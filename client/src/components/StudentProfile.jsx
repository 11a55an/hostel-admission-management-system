import "../styles/studentprofile.css"
import { useEffect, useState } from "react";
import axios from 'axios'

function StudentProfile() {
    const [loginData, setLoginData] = useState([])

    var studentData = {
        FirstName: "",
        LastName: "",
        Email: "",
        RollNumber: "",
        Department: "",
        Address: "",
        City: "",
        Semester: 0,
        CGPA: 0
    }
    // const userName = window.localStorage.getItem("userName")
    useEffect(()=>{
        const fetchAllRecord = async () => {
          try{
            const res = await axios.get("http://localhost:8800/profile")
            setLoginData(res.data)
            console.log(loginData)
            console.log(res.data)
          }
          catch(err){
            console.log(err)
          }
        };
        fetchAllRecord();
      },[])
      for (var i=0; i<loginData.length; i++){
        if (loginData[i]["RollNumber"] == window.localStorage.getItem("userName")) {
            studentData = loginData[i]
        }
      }
      const [formData, setFormData] = useState(
        {
            rollNumber: studentData["RollNumber"],
            email: studentData["Email"],
            password: studentData["Password"],
            firstName: studentData["FirstName"],
            lastName: studentData["LastName"],
            address: studentData["Address"],
            city: studentData["City"],
            department: studentData["Department"],
            semester: studentData["Semester"],
            cgpa: studentData["CGPA"],
        });
    const handleClick = async e=>{
        e.preventDefault()
        try{
          axios.put("http://localhost:8800/students"+studentData["RollNumber"], studentData)
        }
        catch(err){
          console.log(err)
        }
      }
    return (
        <div id="studentP-container">
            <div id="studentP">
                <h1>Profile</h1>
                <div className="form">
                    <label>First Name: </label><input type="text" placeholder={"First Name"} value={studentData["FirstName"]} onChange={(e) =>studentData["FirstName"] = e.target.value}/>
                    <label>Last Name: </label><input type="text" placeholder={"Last Name"} value={studentData["LastName"]} onChange={(e) =>studentData["LastName"] = e.target.value}/>
                    <label>Roll Number: </label><input type="text" placeholder={"Roll Number"} value={studentData["RollNumber"]} disabled="disabled"/>
                    <label>Email: </label><input type="text" placeholder={"Email"} value={studentData["Email"]} disabled="disabled"/>
                    <label>Address: </label><input type="text" placeholder={"Address"} value={studentData["Address"]} onChange={(e) =>studentData["Address"] = e.target.value}/>
                    <label>City: </label><input type="text" placeholder={"City"} value={studentData["City"]} onChange={(e) =>studentData["City"] = e.target.value}/>
                    <label>Department: </label><input type="text" placeholder={"Department"} value={studentData["Department"]} disabled="disabled"/>
                    <label>Semester: </label><input type="text" placeholder={"Semester"} value={studentData["Semester"]} onChange={(e) =>studentData["Semester"] = e.target.value}/>
                    <label>CGPA: </label><input type="text" placeholder={"CGPA"} value={studentData["CGPA"]} onChange={(e) =>studentData["CGPA"] = e.target.value}/>
                    {/* <div className="btnHolder">
                        <button onClick={handleClick}>Update Profile!</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default StudentProfile;
