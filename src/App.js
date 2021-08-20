import './App.css';
// import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  let toogleMode = () => {
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#080058'

    }
  }
  return (
    <>
      <NavBar title='Text-Utils' mode={mode} toogleMode = {toogleMode}/>
      <div className='container'>
      {/* <AboutUs/> */}
        <TextForm heading='Enter Your Text' mode={mode}/>
      </div>
    </>
  );
}

export default App;
