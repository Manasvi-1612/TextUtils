/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React,{useState} from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light'); //this state tells us whether the dark mode is enable or not
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls)=>{
    
    removeClasses();

    document.body.classList.add('bg-'+cls);
    
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert(" mode has been enabled",cls)
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert(" mode has been enabled",cls)
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter a text to analyze" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
