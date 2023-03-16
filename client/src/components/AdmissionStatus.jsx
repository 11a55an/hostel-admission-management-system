import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/admissionstatus.css"
function AdmissionStatus() {
    const userName = window.localStorage.getItem("userName")
    // const navigate2 = useNavigate()
    var hasApplied;
    const formData = {
        rollNumber: userName
      };
    const [loginData, setLoginData] = useState([]);
    const [data, setData] = useState([]);
    var Data;
    useEffect(()=>{
        const fetchAllCredentials = async () => {
          try{
            const res = await axios.get("http://localhost:8800/check")
            setLoginData(res.data)
          }
          catch(err){
            console.log(err)
          }
        };
        fetchAllCredentials();
      },[])
      useEffect(()=>{
        const fetchData2 = async () => {
          try{
            const res = await axios.get("http://localhost:8800/applicants2")
            Data = res.data
            setData(res.data)
            // console.log(Data)
          }
          catch(err){
            console.log(err)
          }
        };
        fetchData2();
      },[])
      var check = false;
      for (var i=0; i<loginData.length; i++){
        if (loginData[i]["RollNumber"]==window.localStorage.getItem("userName")) {
            check = true
        }
      }
      if(check){
        var temp;
        // console.log(data)
        for (var i=0; i<loginData.length; i++){
          if (loginData[i]["RollNumber"]==window.localStorage.getItem("userName")) {
              temp=i;
          }
        }
          // const fetchData = () => {
          //   try{
          //     console.log(data[temp])
          //     axios.post("http://localhost:8800/createInvoice", data[temp])
          //   }
          //   catch(err){
          //     console.log(err)
          //   }
          // };
          // fetchData();
        return (   
            <div id="admissionC-container">
                <div id="admissionC">
                    <h1>Check Admission Status</h1>
                    <p>Your Application has been approved. Please pay your hostel fee to further your application.</p>
                    <p></p>
                </div>
            </div>
        )
      }
      else{
        return (   
            <div id="admissionC-container">
                <div id="admissionC">
                    <h1>Check Admission Status</h1>
                    <p>Your Application is still under review. Please wait for a few days. You will be informed via email when there is any progress</p>
                    <p></p>
                </div>
            </div>
        )
      }
}

export default AdmissionStatus;