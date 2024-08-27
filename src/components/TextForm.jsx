import React, {useState} from "react"

export default function TextForm (props) {
    const handleupclick=()=>{
        // console.log('hey i there'+ text)
        let next=text.toUpperCase();
        setText(next)
        props.showAlert("converted to uppercase!", "success");
    }

    const handleclear=()=>{
        let next='';
        setText(next)
        props.showAlert("Text is cleared", "success")

    }


    const handleloclick=()=>{
        // console.log('hey i there'+ text)
        let next=text.toLowerCase();
        setText(next)
        props.showAlert("converted to lowercase!", "success")
    }



    const handleonchange=(event)=>{
        console.log('my name is maaz')
        setText(event.target.value)
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces eliminated", "success")
    }

    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", "success")

    }

    const [text, setText]=useState('')

  return (
    <>
 <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          onChange={handleonchange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleupclick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleloclick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleclear}>clear</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>copy</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Extraspaces</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above it to preview here'}</p>
    </div>
    </>
    
  );
}
