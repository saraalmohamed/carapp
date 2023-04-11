import React from 'react';
import './App.css';
import './scrollbar.css'
import profile from './Profile.png'; 
import car from './car.png'; 
import './App.js'; 
import Button from './Button';

function Home () {

  const styles = {
    position: 'absolute',
    left: 80,
    top: 200,
    width: '800px',
    padding: '20px',
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

  return (

    //Setting the background picture
    <div className='background-container' style={{backgroundColor: "#EBEBEB"}}>
      <div className = "scrollbar">

      {/*Setting the logo in the top left corner*/}
      <img src={profile} alt="Logo" style={{ position: 'absolute', top: '20px', left: '50px', height: '50px', width: '50px', zIndex: '1' }}/>
      {/*Text with logo*/}
      <p style={{position: 'absolute', top: '-5px', left: '45px', height: '100px', fontSize: '10px', color: "white", zIndex: '1'}}></p>

      {/*Menu bar hyperlinks*/}
      <div className='container-menu'>
      <div className='menu-bar'>
      <ul>
        <li ><a href="#">Home</a></li>
        <li ><a href="#">About Us</a></li>
        <li ><a href="#">Maintenance</a></li>
        <li ><a href="#">Account</a></li>
      </ul>
      </div>
      </div>

      {/*Top right sign in and register button*/}
      <div className='top-right'>
        <button style={{...buttonStyles, marginRight: "20px", fontWeight: 'bold'}}>Register</button>
      </div>


      {/*Setting layered image for lotus car*/}
      <img src={car} alt="Example" className = 'car-image' width="620" height="500"/>

      {/* Setting left page text */}
    <div style={{...styles, fontSize: '24px', color: "#1D3557"}}>
      <p style={{fontSize: "26px", fontWeight: "bold"}}>All In One Application</p>

      <h1 style={{lineHeight: '1.2', marginTop: "-10px", color: '#B7D1DA', 
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(255, 255, 255, 0.5)"}}> 
      Personal Car Maintenance <br></br> & Ability to View Records </h1>
      
      <p style={{fontSize: "20px", color: "#1D3557", fontWeight: "bold"}}> Get Started Today!</p>
    </div>

    {/*Button styles*/}
    <div>
      <Button/>
    </div>


    {/*End of the program*/}
      </div>
      </div>
    );
}


export default Home;
