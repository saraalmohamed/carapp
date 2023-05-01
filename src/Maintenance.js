import React, {useState, useEffect} from "react";
import { useNavigate, Link } from 'react-router-dom';
import profile from './Profile.png'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './scrollbar.css'
import './App.css';
import bmw from './bmw.png'

function Maintenance() {

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

      const styles = {
        position: 'absolute',
        width: '800px',
        padding: '20px',
        left: '520px',
        top: '100px',
        fontSize: '32.5px',
        fontWeight: 'bold'
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


      const navigate = useNavigate(); 
      const handleRegister = () => {
        navigate('/Register');
      };

        const [inputValue, setInputValue] = useState("");
        const [submittedValue, setSubmittedValue] = useState("");
        const [data, setData] = useState({});
        const handleSubmit = () => {
          setSubmittedValue(inputValue);
          setInputValue("");
   }

return (

    <div className='background-container' style={{backgroundColor: "#EBEBEB"}}>
        <div className="scrollbar">

        {/*Setting the logo in the top left corner*/}
        <a href="/">
            <img src={profile} alt="Logo" style={{ position: 'absolute', top: '20px', left: '50px', height: '50px', width: '50px', zIndex: '1' }}/>
        </a> 

        {/*Text with logo*/}
        <p style={{position: 'absolute', top: '-5px', left: '45px', height: '100px', fontSize: '10px', color: "white", zIndex: '1'}}></p>

        {/*Menu bar hyperlinks*/}
        <div className='container-menu'>
        <div className='menu-bar'>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Maintenance">Maintenance</Link></li>         
            <li><Link to="/Account">Account</Link></li> 
            </ul>
        </div>
        </div> 

              {/*Top right sign in and register button*/}
      <div className='top-right'>
        <button onClick= {handleRegister} style={{...buttonStyles, marginRight: "20px", fontWeight: 'bold'}}>Register</button>
      </div>

      <h1 style={{...styles, lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)"}}> 
      Car Maintenance Log <br></br> </h1>

      {/*Setting layered image for lotus car*/}
      <img src={bmw} alt="Example" className = 'car-image' width="665" height="450"/>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '200px', fontSize: '20px', fontWeight: 'bold'}}> 
      Your Car:  <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '250px', fontSize: '20px', fontWeight: 'bold'}}> 
      VIN Number: <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '300px', fontSize: '20px', fontWeight: 'bold'}}> 
      Make:  <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '350px', fontSize: '20px', fontWeight: 'bold'}}> 
      Model:  <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '400px', fontSize: '20px', fontWeight: 'bold'}}> 
      Oil:  <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '450px', fontSize: '20px', fontWeight: 'bold'}}> 
      Coolant:  <br></br> </h2>

      <button  style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 550,  
      width: '200px', padding: '20px', fontSize: "20px", fontWeight: "bold"}} 
      onClick={handleButtonClick}>Look Up VIN</button>
      {isOpen && (
        <div>
          <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 90, top: 630, width: '200px', height: "50px"}} 
          type="text" placeholder="Enter VIN number" value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} />

          <button style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 90, top: 700, fontWeight: "bold"}} 
          onClick = {handleSubmit}>Search</button>

          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 215, fontWeight: "bold"}}>{data.length > 1 ? data[1].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 245, fontWeight: "bold"}}>{data.length > 1 ? data[2].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 265, fontWeight: "bold"}}> {data.length > 1 ? data[3].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 300, fontWeight: "bold"}}> {data.length > 1 ? data[4].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 350, fontWeight: "bold"}}>{data.length > 1 ? data[5].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 400, fontWeight: "bold"}}> {data.length > 1 ? data[7].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 450, fontWeight: "bold"}}> {data.length > 1 ? data[8].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 500, fontWeight: "bold"}}>{data.length > 1 ? data[10].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 550, fontWeight: "bold"}}> {data.length > 1 ? data[11].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 600, fontWeight: "bold"}}> {data.length > 1 ? data[27].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 650, fontWeight: "bold"}}>{data.length > 1 ? data[28].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 700, fontWeight: "bold"}}> {data.length > 1 ? data[30].Value : ""}</p>
          <p style={{zIndex: 1, position: 'absolute',left: 280, top: 7500, fontWeight: "bold"}}>{data.length > 1 ? data[36].Value : ""}</p>




        </div>
      )}

      </div>
    </div>
);

}

export default Maintenance;