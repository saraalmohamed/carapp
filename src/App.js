import React from 'react';
import Home from './Home'; // import the Home component
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Form from './Form';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.css';


function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
