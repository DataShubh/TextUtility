import React, { useState } from 'react';


export default function TextForm(props){
    const handleUpClick = () =>{
        console.log("Upper Case was Clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Upper Case", "success")
    }
    const handleLoClick = () =>{
        console.log("Lower Case was Clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to Lower Case", "success")
    }
    const handleOnChange = (event) =>{
        console.log("On Change was clicked");
        setText(event.target.value);
    }
    const handleClearClick = () =>{
        console.log("Clear Text was clicked");
        let newtext = '' ;
        setText(newtext);
        props.showalert("Text was cleared", "success")
    }
    const handleCopytext = () =>{
        console.log("Copy text was clicked");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Text copied to clipboard", "success")
    }
    const handleExtraspace = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" ")) 
        props.showalert("Extra Spaces removed", "success")
    }


    const [text, setText] = useState("Enter your text here");
    return(
        <>
        <div className = "container text"  style ={{color: props.mode==='dark'? 'white':'black'}} >
          <div className="mb-3"> 
            <label htmlFor="mybox" className="form-label" textColor={props.mode==='dark'? 'white':'grey'} >{props.heading}</label>
            <textarea className="form-control" value = {text}  style = {{backgroundColor: props.mode==='dark'? 'white':'grey',color: props.mode==='dark'?'grey':'black'}} onChange = {handleOnChange} id="myBox" rows="6"></textarea>
          </div>
            <button className = "btn btn-primary mx-1 " onClick = {handleUpClick}> Convert to Upper Case</button>
            <button className = "btn btn-primary mx-1 my-1" onClick = {handleLoClick}> Convert to Lower Case</button>
            <button className = "btn btn-primary mx-1 my-1" onClick = {handleClearClick}> Clear Text</button>
            <button className = "btn btn-primary mx-1 my-1" onClick = {handleCopytext}> Copy Text</button>
            <button className = "btn btn-primary mx-1 my-1" onClick = {handleExtraspace}> Remove Extra Space</button>
            

        </div>
        <div className = "container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
            <h5 > Your text summary</h5>
            <h6>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {text.split(" ").length *0.008} minutes to read the text</p>
            <h5>Preview</h5>
            <p> {text.length>0? text:'Enter text to review'}</p>

            </h6>
            
        </div>
        </>

        
    )
}