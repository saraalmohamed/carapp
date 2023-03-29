import './App.css';
import logo from './logo.png'; 
import Button from './Button';
import banner from './banner.jpg'; 
import lotus from './lotus.png';
import './scrollbar.css'
import bg2 from './bkgrd2.jpg'; 
import profile from './Profile.png'; 

function App() {

  const styles = {
    position: 'absolute',
    left: 80,
    top: 200,
    width: '800px',
    padding: '20px',
  };

  const buttonStyles = {
    backgroundColor: 'orange',
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
    <div className='background-container'>
    <div className = "scrollbar">
      {/*Setting the logo in the top left corner*/}
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '20px', left: '50px', height: '100px', width: '100px' }}/>
      {/*Text with logo*/}
      <p style={{position: 'absolute', top: '0px', left: '45px', height: '100px', fontSize: '20px'}}>Sexy Car App</p>

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
        <button style={{...buttonStyles, marginRight: "20px"}}>Register</button>
      </div>

      {/*Setting layered image for lotus car*/}
      <img src={lotus} alt="Example" className = 'car-image' width="600" height="350"/>

      {/* Setting left page text */}
      <div style={{...styles, fontSize: '24px'}}>
      <p style={{fontSize: "26px"}}>All In One Application</p>
      <h1 style={{lineHeight: '1.2', marginTop: "-10px"}}>Things about the features <br></br> that you can do </h1>
      <p style={{fontSize: "20px"}}> Here is an invitation to link and sign up</p>
    </div>

    {/*Button styles*/}
    <div>
      <button style={{...buttonStyles, position: 'absolute',left: 90, top: 500, width: '200px', padding: '20px', fontSize: "20px"}}>Button 1</button>
      <button style={{...buttonStyles, position: 'absolute',left: 350, top: 500, width: '200px', padding: '20px', fontSize: "20px"}}>Button 2</button>
    </div>

    {/*Seoond background image with a form */}
    <img src={bg2} alt="bg2" className="top-image" style={{marginLeft:50, marginRight: 50 }}/>

    {/* end of the app */}
      </div>
      </div>
  );
}

export default App;
