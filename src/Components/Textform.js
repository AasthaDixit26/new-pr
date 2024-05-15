import { useState } from "react";

const Textform = (props) => {
  const [Text,setText]=useState("Enter Your Text")
  const handleUpClick=()=>{
    // console.log("uppercase");
    let newText=Text.toUpperCase();
    setText(newText);
  };
  const handleOnChange=(event)=>{
    // console.log("ON CHANGE");
    setText(event.target.value)
  };
  
  return (
    <>
     
      <div className="mb-3">
        <h2>Write something to see the magic .</h2>
        <textarea
          className="form-control"
          value={Text} 
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick} >Uppercase</button>
      </div>
    </>
  );
};
export default Textform;
