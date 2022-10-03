// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react'

// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
function App() {

  
const [mode,setMode]= useState("light");

const toggleMode = () => {
  if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enable", "success");
      document.title = "TextTools - Dark Mode"

  }
  else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      document.title = "TextTools - Light Mode"


  }
};

const [alert, setAlert] = useState("");
const showAlert = (message, type) => {
  setAlert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
  return (
    <>
   <Navbar title="TextTools" about="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-2">
   <TextForm heading ="Enter the text for Transform" mode={mode}/>
   {/* <About/> */}

   </div>
  </>
  );
}

export default App;
