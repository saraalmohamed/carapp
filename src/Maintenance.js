import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import profile from './Profile.png'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './scrollbar.css'
import './App.css';
import bmw from './bmw.png'

function Maintenance() {
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
      Your Car: *pull data from the database* <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '100px', top: '250px', fontSize: '20px', fontWeight: 'bold'}}> 
      Other things about Maintenance <br></br> </h2>


        </div>
        
    </div>
);

}

export default Maintenance;