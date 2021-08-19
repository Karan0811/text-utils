import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const [text,setText] = useState("Hello World")
    let changeToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    let handleChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea
        value={text}
        onChange={handleChange}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={changeToUpperCase}>UpperCase</button>
      </div>
    </>
  );
}
