import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';


import { useNavigate } from 'react-router-dom';


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
  const [data, setData] = useState({});
  const handleSubmit = () => {
    setSubmittedValue(inputValue);
    setInputValue("");

    // have to have the c# http component running
    // REMEMBER to change local host to the one being ran
    fetch('http://localhost:5256/getbasicinfo?vin=' + inputValue)
    .then(response => response.json())
      .then (json => {
        setData(json);
        // console.log(data);
    })
  }

  useEffect(() => {
    console.log(data);
  }, [data]);
  

  const navigate = useNavigate();
  const handleButtonTwo = () => {
    navigate('/Form');
  };

  const handleRegister = () => {
    navigate('/Register');
  };

  return (
    <div>
      <button  style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 500,  
      width: '200px', padding: '20px', fontSize: "20px", fontWeight: "bold"}} 
      onClick={handleButtonClick}>Look Up VIN</button>
      {isOpen && (
        <div>
          <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 90, top: 580, width: '200px', height: "50px"}} 
          type="text" placeholder="Enter VIN number" value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

          

          <button style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 650, fontWeight: "bold"}} 
          onClick = {handleSubmit}>Search</button>

          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 750, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[1].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 770, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[2].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 790, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[3].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 810, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[4].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 830, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[5].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 850, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[7].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 870, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[8].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 890, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[10].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 910, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[11].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 930, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[27].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 950, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[28].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 970, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[30].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 90, top: 990, fontWeight: "bold"}}>Submitted value: {data.length > 1 ? data[36].Value : ""}</p>




        </div>
      )}

      <button style={{...buttonStyles, position: 'absolute',left: 350, top: 500, 
      width: '200px', padding: '20px', fontSize: "20px", fontWeight: "bold"}}
      onClick={handleButtonTwo}>Sign In</button>

      <div className='top-right'>
        <button onClick= {handleRegister} style={{...buttonStyles, marginRight: "20px", fontWeight: 'bold'}}>Register</button>
      </div>

    </div>
  );
}

export default Button;
