import "../styles/signup.css";
import { useEffect, useState } from "react";
import SignupForm from "./SignupForm";
import PersonalInfo from "./PersonalInfo";
import LocationInfo from "./LocationInfo";
import OtherInfo from "./OtherInfo";
import axios from 'axios'
import Success from "./Success";

function Signup() {
    const [formData, setFormData] = useState({
        rollNumber: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        department: "",
        semester: "",
        cgpa: "",
      });
    const [page, setPage] = useState(0);
    
    const componentList = [
      <SignupForm
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
      <PersonalInfo
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
      <LocationInfo
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
      <OtherInfo
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />,
      <Success 
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      />
    ];
    
    return (
        <div className="App">      
        <div>{componentList[page]}</div>
      </div>
    );
  }

export default Signup;
