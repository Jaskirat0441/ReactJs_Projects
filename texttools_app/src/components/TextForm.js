import React ,{useState} from "react";

export default function TextForm(props) {
    // uppercase
    const upperCase = () => {
        console.log("first");
        setText(text.toUpperCase());
    } 
//   lowercarse
const lowerCase = () => {
    console.log("first");
    setText(text.toLowerCase());
}
//   textfield onchange
const onchangeTextField = (e) => {
    setText(e.target.value)
}

// copy the text
const handleCopy = () => {
    var text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
}

// remove extra spaces
const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}
// clear Text
const clearText = () => {
    setText("")
}
const [text,setText]= useState("")

  return (
    <>
    <div className="container" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextArea"
          rows="6" value={text}
          onChange={onchangeTextField} 
        ></textarea>
      </div>
      <button disabled={text.trim().length===0}  className="btn btn-primary" onClick={upperCase}>
        Convert to Uppercase
      </button>
      <button disabled={text.trim().length===0}  className="btn btn-primary m-2" onClick={lowerCase}>
        Convert to LowerCase
      </button>
      <button disabled={text.trim().length===0}  className="btn btn-primary m-2" onClick={handleCopy}>
        Copy Text
      </button> 
      <button disabled={text.trim().length===0}  className="btn btn-primary m-2" onClick={removeExtraSpace}>
        Remove Extra Spaces 
      </button>
      <button disabled={text.trim().length===0}  className="btn btn-primary m-2" onClick={clearText}>
        Clear Text
      </button>
    </div>

    <div className="container my-3" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
        <h2>Text Summary</h2>
        <h6>No. of Character : {text.trim().length} </h6> 
        <h6>No. of Words :{text.split(" ").filter((element)=>{return element.length!==0}).length}</h6> 
        <h3 className="my-3">Preview</h3>
        <p>{text.trim().length >0 ?text :"Enter Something to preview here"}</p>
    </div>
    </>
  );
}
