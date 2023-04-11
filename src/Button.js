import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Button() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonStyles = {
    backgroundColor: '#457B9D',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    margin: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
    zIndex: "1",

  };

  const inputStyles = {
    backgroundColor: "white",
    border: "2px solid #457B9D",
    color: "#457B9D",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    margin: "10px",
  };

  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setInputValue("");
  }

  const navigate = useNavigate();
  const handleButtonTwo = () => {
    navigate('/Form');
  };


  return (
    <div>
      <button  style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 500,  
      width: '200px', padding: '20px', fontSize: "20px", fontWeight: "bold"}} 
      onClick={handleButtonClick}>Look Up VIN</button>
      {isOpen && (
        <div>
          <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 90, top: 580, width: '180px', height: "32px"}} 
          type="text" placeholder="Enter VIN number" value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

          <button style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 650, fontWeight: "bold"}} 
          onClick = {handleSubmit}>Search</button>

          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 750, fontWeight: "bold"}}>Submitted value: {submittedValue}</p>
        </div>
      )}

      <button style={{...buttonStyles, position: 'absolute',left: 350, top: 500, 
      width: '200px', padding: '20px', fontSize: "20px", fontWeight: "bold"}}
      onClick={handleButtonTwo}>Sign In</button>

    </div>
  );
}

export default Button;

export default Button;