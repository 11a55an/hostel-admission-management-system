import "../styles/studentadmission.css"
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
function StudentAdmission() {
    const userName = window.localStorage.getItem("userName")
    const navigate2 = useNavigate()
    var formData = {
      rollNumber: ""
    }
    const [loginData, setLoginData] = useState({
      rollNumber: ""
    });
  useEffect(()=>{
      const fetchAllCredentials = async () => {
        try{
          const res = await axios.get("http://localhost:8800/check")
          setLoginData(res.data)
          // console.log(loginData)
          // console.log(res.data)
        }
        catch(err){
          console.log(err)
        }
      };
      fetchAllCredentials();
    },[])
    var check = false;
    var i=0;
    if(loginData[i]){
      for (i=0; i<loginData.length; i++){
        if (loginData[i]["RollNumber"]==window.localStorage.getItem("userName")) {
            check = true
        }
      }
    }
    const handleClick = async e=>{
      e.preventDefault()
      formData.rollNumber = userName
      try{
        axios.post("http://localhost:8800/apply", formData);
        navigate2("/admissioncheck")
        console.log(userName)
      }
      catch(err){
        console.log(err)
      }
    }
    const handleClick2 = async e=>{
      e.preventDefault()
      navigate2("/admissioncheck")
    }
    if (check) {
      return (   
        <div id="studentA-container">
            <div id="studentA">
                <h1>Apply For Admission!</h1>
                <p>Dear {userName}, You have already applied for admission.</p>
                <button onClick={handleClick2}>Check Application Status</button>
            </div>
        </div>
    )
    }
    else{
      return (   
        <div id="studentA-container">
            <div id="studentA">
                <h1>Apply For Admission!</h1>
                <p>{userName} If you want to proceed with your application to apply for admission, please click the button below:</p>
                <button onClick={handleClick}>Apply!</button>
            </div>
        </div>
    )
    }
}

export default StudentAdmission;