import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const [text,setText] = useState("Hello World")
    // const [word,setWord] = useState((text.split(' ')).length)
    // const [letter,setLetter] = useState(text.length)

    let changeToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    let changeToLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    let handleChange = (event) => {
        let text = event.target.value
        setText(text)
        // let letterLength = (text).length
        // let wordLength = (text.split(' ')).length
        // setLetter(letterLength)
        // setWord(wordLength)
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
      <button type="button" className="btn btn-primary mx-2" onClick={changeToUpperCase}>UpperCase</button>
      <button type="button" className="btn btn-primary" onClick={changeToLowerCase}>LowerCase</button>
      </div>
      <div className="container my-3">
      <p>Word Count = {(text.split(' ')).length}</p>
      <p>Letter Count = {(text).length}</p>
      <p>Time to Read = {(text.split(' ')).length * 0.008}</p>
      </div>
      <div className="container my-3">
      <h3>
          Preview Text
      </h3>
      <p>{text}</p>
      </div>
    </>
  );
}
