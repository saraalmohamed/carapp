import React, {useState} from "react";
import { useNavigate, Link } from 'react-router-dom';
import './scrollbar.css'
import Button from "./Button";
import './App.css';
import profile from './Profile.png'; 
import './Form.css'


function Form() {

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
    top: '180px',
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

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [submittedPassword, setSubmittedPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedEmail(emailValue);
    setSubmittedPassword(passwordValue);
    setEmailValue('');
    setPasswordValue('');
  };

  const navigate = useNavigate(); 
  const handleRegister = () => {
    navigate('/Register');
  };

  fetch('localhost:5226/login?username={put username here}&password={put password here}' + inputValue)
  .then(response => response.json())
    .then (json => {
      setData(json);
       console.log(data);
  })


  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div className='background-container' style={{backgroundColor: "#EBEBEB"}}>
      <div className = "scrollbar">

      {/*Setting the logo in the top left corner*/}
      <a href="/">
         <img src={profile} alt="Logo" style={{ position: 'absolute', top: '20px', left: '50px', height: '50px', width: '50px', zIndex: '1' }}/>
      </a>        {/*Text with logo*/}
      <p style={{position: 'absolute', top: '-5px', left: '45px', height: '100px', fontSize: '10px', color: "white", zIndex: '1'}}></p>

      {/*Menu bar hyperlinks*/}
      <div className='container-menu'>
      <div className='menu-bar'>
        <ul>
        <li><Link to="/">Home</Link></li>          
          <li ><a href="#">Maintenance</a></li>
          <li ><a href="#">Account</a></li>
        </ul>
      </div>
      </div>

      {/*Top right sign in and register button*/}
      <div className='top-right'>
        <button onClick= {handleRegister} style={{...buttonStyles, marginRight: "20px", fontWeight: 'bold'}}>Register</button>
      </div>
      </div>

    {/* Setting left page text */}
    <h1 style={{...styles, lineHeight: '1.2', marginTop: "-10px", color: '#457B9D', zIndex: '1'}}> 
      Sign Into Your Account <br></br> </h1>

      <form onSubmit={handleSubmit}>
      <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 530, top: 275, width: '350px', height: "70px"}} 
        type="text" placeholder="Enter Email" value={emailValue}
        onChange={handleEmailChange} />

      <p style={{zIndex: 1, position: 'absolute',left: 90, top: 350, fontWeight: "bold"}}>{submittedEmail}</p>

      <input style={{...inputStyles, zIndex: 1, position: 'absolute',left: 530, top: 375, width: '350px', height: "70px"}} 
        type="password" placeholder="Enter Password" value={passwordValue}
        onChange={handlePasswordChange} />

      <p style={{zIndex: 1, position: 'absolute',left: 90, top: 430, fontWeight: "bold"}}>{submittedPassword}</p>

      <button style={{...buttonStyles, zIndex: 1, position: 'absolute',left: 590, top: 550,
          fontWeight: "bold", width: '200px', height: '60px', fontSize: '20px'}}>Submit</button>
       </form>
        <div className="white-box"></div>

    </div>
  );
}

export default Form;
