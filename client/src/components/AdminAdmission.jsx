import "../styles/adminadmission.css"
import { useEffect, useState } from "react";
import axios from "axios";

function AdminAdmission() {
    var tmp;
    var username = {
        rollNumber:tmp,
    }
    var approval = {};
    const [approvals,setApprovals] = useState([])
    const [text,setText] = useState([])
    const [formData, setFormData] = useState({
        rollNumber: ""
      });
    useEffect(()=>{
        const fetchAllCredentials = async () => {
          try{
            const res = await axios.get("http://localhost:8800/checkApprove")
            approval = res.data
            console.log(approval)
          }
          catch(err){
            console.log(err)
          }
        };
        fetchAllCredentials();
      },[])
    var check = false;
    var temp = 0
    const validate = () => {
        username.rollNumber=tmp
        for(var i=0; i<approval.length; i++){
            if (approval[i]["RollNumber"]==username.rollNumber) {
                check = true;
                temp = i;
            }
        }
        if (check) {
            var ap = approval[temp]["isAccepted"];
            console.log(typeof(ap))
            if (approval[temp]["isAccepted"]==1) {
                setText("This application has already been approved.")
            }
            else{
                try{
                    console.log(username.rollNumber)
                    axios.post("http://localhost:8800/approve", username);
                    axios.post("http://localhost:8800/sendEmail", approval[temp])
                    // alert(username.rollNumber)
                    setText("The application has been approved successfully.")
                  }
                  catch(err){
                    console.log(err)
                  }
            }
        }
    }
    const handleChange = (event) => {
        tmp = event.target.value;
      };
    return (   
        <div id="adminAd-container">
            <div id="adminAd">
                <h1>Admission Approval</h1>
                <div className="adContainer">
                    <label>Enter Roll Number:</label>
                    <input name="rollNumber" type={"text"} value={tmp} onChange={handleChange}/>
                    <button onClick={validate}>Approve</button>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AdminAdmission;