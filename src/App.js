import './App.css';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  let showAlert = (message,type) => {
    setAlert({
      message:message,
      type:type
    })
  }
  let toogleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated",'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#080058'
      showAlert("Dark Mode Activated",'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  }
  return (
    <>
      <Router>
      <NavBar title='Text-Utils' mode={mode} toogleMode = {toogleMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
      <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/">
          <TextForm heading='Enter Your Text' mode={mode} showAlert = {showAlert} setAlert = {setAlert}/>
          </Route>
        </Switch>
      {/* <AboutUs/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
