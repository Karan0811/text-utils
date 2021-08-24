import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [word, setWord] = useState(0);
  const [time, setTime] = useState(0);

  // const [letter,setLetter] = useState(text.length)

  let changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Upper Case Done', 'success');
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  let changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Lower Case Done', 'success');
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  let clearText = () => {
    setText('');
    setWord(0);
    setTime(0);
    props.showAlert('Clear Text Done', 'success');
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  const handleCopy = () => {
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied', 'success');
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Removed Extra Spaces', 'success');
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  let handleChange = (event) => {
    let text = event.target.value;
    setText(text);
    let wordLength = text.split(' ');
    var filtered = wordLength.filter(function (value, index, arr) {
      return value !== '';
    });
    // setLetter(letterLength)
    setWord(filtered.length);
    setTime(filtered.length * 0.008);
  };
  return (
    <>
      <div className='container'>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          {props.heading}
        </h1>
        <div className='mb-3'>
          <textarea
            value={text}
            style={{
              backgroundColor: props.mode === 'dark' ? '#080058' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            onChange={handleChange}
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='8'
          ></textarea>
        </div>
        <button
          type='button'
          className='btn btn-primary mx-2 my-1'
          onClick={changeToUpperCase}
          disabled = {text.length === 0}
        >
          Upper Case
        </button>
        <button
          type='button'
          className='btn btn-primary mx-2 my-1'
          onClick={changeToLowerCase}
          disabled = {text.length === 0}
        >
          Lower Case
        </button>
        <button disabled = {text.length === 0} type='button' className='btn btn-primary mx-2 my-1' onClick={clearText}>
          Clear Text
        </button>
        <button disabled = {text.length === 0} type='button' className='btn btn-primary mx-2 my-1' onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled = {text.length === 0} type='button' className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className='container my-3'
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <p>Word Count = {word}</p>
        <p>Letter Count = {text.length}</p>
        <p>Time to Read = {time}</p>
      </div>
      <div
        className='container my-3'
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h3>Preview Text</h3>
        <p>{text ? text : 'Nothing to Show'}</p>
      </div>
    </>
  );
}
