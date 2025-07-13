import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
  let newText = text.toUpperCase();
  setText(newText);
  console.log("Uppercase was clicked");
};

     const handleOnChange = (event) => {
  setText(event.target.value);  // ইনপুট ফিল্ডের লেখা state এ বসানো
  console.log("On change");
};
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }
    const [text, setText] = useState('');
  return (
<> 
<div className="container">
<h1>{props.heading}</h1>
<div className="container">
<textarea className="form-control" value={text} onChange={handleOnChange} id="My Forms" rows="8"></textarea>
</div>
<button className="btn btn-primary my-3" onClick = {handleUpClick} > Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
</div> 
<div className="container my-4">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
}
