import "../styles/rejectapplication.css"
import { useEffect, useState } from "react";
import axios from "axios";

function RejectApplication() {
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
            var ap = approval[temp]["isRejected"];
            console.log(typeof(ap))
            if (approval[temp]["isRejected"]==1) {
                setText("This application has already been rejected.")
            }
            else{
                try{
                    console.log(username.rollNumber)
                    axios.post("http://localhost:8800/reject", username);
                    axios.post("http://localhost:8800/rejectionEmail", approval[temp])
                    // alert(username.rollNumber)
                    setText("The application has been rejected successfully.")
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
        <div id="adminRe-container">
            <div id="adminRe">
                <h1>Application Rejection</h1>
                <div className="reContainer">
                    <label>Enter Roll Number:</label>
                    <input name="rollNumber" type={"text"} value={tmp} onChange={handleChange}/>
                    <button onClick={validate}>Reject</button>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default RejectApplication;