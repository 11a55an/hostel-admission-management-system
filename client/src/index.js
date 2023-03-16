import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';
import Home from './components/Home.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Admission from './components/Admission';
import AdmissionCheck from './components/AdmissionCheck';
import Profile from './components/Profile';
import AdmissionApproval from "./components/AdmissionApproval"
import AdmissionRejection from './components/AdmissionRejection';

export default function App() {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={loggedIn? <Dashboard/>:<Login />}></Route>
          <Route path="/Signup" element={loggedIn? <Dashboard/>:<Signup />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Admission" element={loggedIn? <Admission/>:<Login />}></Route>
          <Route path="/AdmissionCheck" element={loggedIn? <AdmissionCheck/>:<Login />}></Route>
          <Route path="/Profile" element={loggedIn? <Profile/>:<Login />}></Route>
          <Route path="/AdmissionApproval" element={<AdmissionApproval/>}></Route>
          <Route path="/AdmissionRejection" element={<AdmissionRejection/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
