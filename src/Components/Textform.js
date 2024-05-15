import { useState } from "react";

const Textform = (props) => {
  const [Text,setText]=useState("")
  const handleUpClick=()=>{
    // console.log("uppercase");
    let newText=Text.toUpperCase();
    setText(newText);
  };
  const handleOnChange=(event)=>{
    // console.log("ON CHANGE");
    setText(event.target.value)
  };
  const reverseText=()=>{
    let finaltxt=Text.split("").reverse().join("");
    
    setText(finaltxt);
  }
  
  return (
    <>
     <div className="container"> 
      <div className="mb-3">
        <h2>Write something to see the magic .</h2>
        <textarea
          className="form-control"
          value={Text} 
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-md-2" onClick={handleUpClick} >Uppercase</button>
        <button className="btn btn-primary mx-md-2" onClick={reverseText}> Reverse</button> 
      </div>
      </div>
      <div className="container">
        <h2>Your text have </h2>
        <p>{Text.split(" ").length} words and {Text.length} Characters.</p>
      </div>
      <div className="container">
        <h4>You will take </h4>
        <p>{0.25*(Text.length)}seconds time to read above text</p>
      </div>
      
    </>
  );
};
export default Textform;
