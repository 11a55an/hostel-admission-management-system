import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import nodemailer from "nodemailer"
import easyinvoice from 'easyinvoice'
import fs from "fs"
const app = express()
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hostel"
})

app.use(express.json())
app.use(cors())

app.get("/applicants", (req, res)=>{
    const q = "Select * from student where hasApplied = True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})
app.get("/profile", (req, res)=>{
    const q = "Select * from student"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})
app.get("/applicants2", (req, res)=>{
    const q = "Select RollNumber, FirstName, LastName, Department, Semester from student where hasApplied = True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})
app.post("/createInvoice", async (req,res)=>{
    var data2 = {
        "sender": {
            "company": "Hostel Management System",
            "address": "University of Gujrat, Jalalpur Jattan Road, Gujratample Street 123",
            "city": "Gujrat",
        },
        "client": {
            "rollnumber": req.body.RollNumber,
            "firstname":req.body.FirstName,
            "lastname":req.body.LastName,
            "department":req.body.Department,
            "semester":String(req.body.Semester)
        },
        
        "information": {
            // Invoice due date
            "due-date": "14-03-2023"
        },
        "products": [
            {
                "description": "Admission Fee",
                "price": "7000"
            },
            {
                "description": "Security Fee",
                "price": "5000"
            },
            {
                "description": "Hostel Fee",
                "price": "14000"
            }
        ],
        "settings": {
            "currency": "PKR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        },
    };
    try{
        console.log(data2)
        let result = await easyinvoice.createInvoice(data2);
        let filename = req.body.rollNumber+".pdf"
        fs.writeFileSync(filename, result)
    }
    catch(error){
        console.log(error)
    }
})
app.post("/sendEmail",(req,res)=>{
    console.log(req.body.Email)
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"iamhassantahir@gmail.com",
                pass:"ftquqozridoxyzyn"
            }
        })
        const mailOptions = {
            from: "iamhassantahir@gmail.com",
            to: req.body.Email,
            subject: "Application Approval",
            html: '<h1>Congratulations!</h1><p>Your application has been successfully approved. Login to your account to see the next steps</p>'

        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(info.response)
            }
        })
    }
    catch(error){
        console.log(error)
    }
})

app.post("/rejectionEmail",(req,res)=>{
    console.log(req.body.Email)
    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"iamhassantahir@gmail.com",
                pass:"ftquqozridoxyzyn"
            }
        })
        const mailOptions = {
            from: "iamhassantahir@gmail.com",
            to: req.body.Email,
            subject: "Application Rejection",
            html: '<h1>Better Luck Next Time!</h1><p>Sorry to say your application has been rejected.</p>'

        }
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(info.response)
            }
        })
    }
    catch(error){
        console.log(error)
    }
})

app.get("/check", (req, res)=>{
    const q = "Select RollNumber from student where hasApplied = True"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/apply", (req, res)=>{
    const q = "Select RollNumber from student"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/checkStatus", (req, res)=>{
    const q = "Select isAccepted, isRejected from student where RollNumber = ?"
    const values=[
        req.body.rollNumber
    ]
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/checkApprove", (req, res)=>{
    const q = "Select RollNumber, isAccepted, isRejected, Email from student where hasApplied = True"
    db.query(q, (err,data) =>{
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/credentials", (req, res)=>{
    const q = "Select RollNumber, Password from student"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})

app.get("/eligibles", (req, res)=>{
    const q = "Select RollNumber from StudentFee where isEligible = True"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)   
    })
})

app.post("/students", (req,res)=>{
    const q = "Insert into Student (RollNumber, Email, Password, FirstName, LastName, Address, City, Department, Semester, CGPA) values (?)";
    const values = [
        req.body.rollNumber,
        req.body.email,
        req.body.password,
        req.body.firstName,
        req.body.lastName,
        req.body.address,
        req.body.city,
        req.body.department,
        req.body.semester,
        req.body.cgpa
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Data Entered Successfully");
    })
})
app.put("/students:rollNumber", (req,res)=>{
    const rollNumber = req.params.id
    const q = "Update Student Set 'FirstName' = ?, 'LastName' = ?, 'Address' = ?, 'City' = ?, 'Department' = ?, 'Semester' = ?, 'CGPA' = ? WHERE RollNumber = ?";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.address,
        req.body.city,
        req.body.department,
        req.body.semester,
        req.body.cgpa
    ];
    db.query(q, [...values, rollNumber], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Student Updated Successfully");
    })
})
app.post("/apply", (req,res)=>{
    const q = "Update Student Set hasApplied = True Where RollNumber = (?)";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Data Updated Successfully");
    })
})

app.post("/approve", (req,res)=>{
    const q = "Update Student Set isAccepted = True, isRejected = False Where RollNumber = ?";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Application has been approved successfully");
    })
})

app.post("/reject", (req,res)=>{
    const q = "Update Student Set isAccepted = False, isRejected = True Where RollNumber = ?";
    const values = [
        req.body.rollNumber
    ];
    db.query(q, [values], (err,data) =>{
        if (err) return res.json(err);
        return console.log("Application has been rejected successfully");
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend")
})