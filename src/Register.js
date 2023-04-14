import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import profile from './Profile.png'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './scrollbar.css'
import './App.css';


function Register() {

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

      const [name, setName] = useState('');
      const [lastName, setLastName] = useState('');
      const [emailValue, setEmailValue] = useState('');
      const [passwordValue, setPasswordValue] = useState('');

      const [VIN, setVIN] = useState('');
      const [make, setMake] = useState('');
      const [model, setModel] = useState('');
      const [year, setYear] = useState('');

      const [submittedEmail, setSubmittedEmail] = useState('');
      const [submittedPassword, setSubmittedPassword] = useState('');
      const [submittedName, setSubmittedName] = useState('');
      const [submittedLastName, setSubmittedLastName] = useState('');

      const [submittedVIN, setSubmittedVIN] = useState('');
      const [submittedMake, setSubmittedMake] = useState('');
      const [submittedModel, setSubmittedModel] = useState('');
      const [submittedYear, setSubmittedYear] = useState('');

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
      
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };

      const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
      };
      
      const handleVINChange = (event) => {
        setVIN(event.target.value);
      };

      const handleMakeChange = (event) => {
        setMake(event.target.value);
      };

      const handleModelChange = (event) => {
        setModel(event.target.value);
      };

      const handleYearChange = (event) => {
        setYear(event.target.value);
      };

      const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedEmail(emailValue);
        setSubmittedPassword(passwordValue);
        setSubmittedMake(emailValue);
        setLastName('');
        setEmailValue('');
        setPasswordValue('');
        setName('');
        setVIN('');
        setMake('');
        setModel('');
        setYear('');

      };

return (
<div className='background-container' style={{backgroundColor: "#EBEBEB"}}>
    <div >
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
      Create Your Account <br></br> </h1>

      <div className="h2">

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '800px', padding: '20px', left: '350px', top: '200px', fontSize: '20px', fontWeight: 'bold'}}> 
      Personal Information <br></br> </h2>

      <h2 style={{lineHeight: '1.2', marginTop: "-10px", color: '#457B9D',
       zIndex: '1', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)",
        position: 'absolute', width: '300px', padding: '20px', top: '200px', left: '870px', fontSize: '20px', fontWeight: 'bold'}}> 
      Vehicle Information <br></br> </h2>
      </div>
        <form onSubmit={handleSubmit}>


        {/* Personal Information */}

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 300, top: 275, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter First Name" value={name}
        onChange={handleNameChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 300, top: 375, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Last Name" value={lastName}
        onChange={handleLastNameChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 300, top: 475, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Email" value={emailValue}
        onChange={handleEmailChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 300, top: 575, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Password" value={passwordValue}
        onChange={handlePasswordChange} />

        {/* Vehicle Information */}

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 800, top: 275, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter VIN" value={VIN}
        onChange={handleVINChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 800, top: 375, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Make" value={make}
        onChange={handleMakeChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 800, top: 475, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Model" value={model}
        onChange={handleModelChange} />

        <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 800, top: 575, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Year" value={year}
        onChange={handleYearChange} />

        <button style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 590, top: 700,
          fontWeight: "bold", width: '200px', height: '60px', fontSize: '20px'}}>Submit</button>

        </form>


    </div>
</div>
);


}

export default Register; 