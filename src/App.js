import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('dark');
  const[alert, setAlert] = useState(null);
  const showalert =(message, type)=>{
    setAlert({msg: message,
    type: type })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  
  const togglemode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#210848'
      showalert("Dark Mode Enabled", "success");
      document.title = "TextUlits-DarkMode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'grey'
      showalert("light Mode Enabled", "success");
      document.title = "TextUlits-LightMode";
    
    }
  }
  return (
    <Router>
    <Navbar title="TextUtils" mode = {mode}  togglemode = {togglemode} aboutText = "About TextUtils"/>
    <Alert alert = {alert} />
    <div className = "container">
   
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Routes>
      <Route exact path="/about" element = {<About/>}/>
        
      
      <Route exact path="/" element = {<h2><TextForm showalert = {showalert} heading = "Enter text below to analyze "/></h2>}/>
        
    
    </Routes>
    </div>
    </Router>
  
  

  );
}

export default App;
