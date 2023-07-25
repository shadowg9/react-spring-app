import { Routes, Route } from 'react-router';
import React from 'react';



import './App.css';
import Nav from './components/NavBar/Nav';
import Home from './components/Homepage/Home';
import Emp from './components/Employee/Emp';
import Register from './components/Register/Register';



function App() {
  return (
    <div>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/emp" exact element={<Emp />}/>
          <Route path="/reg" exact element={<Register />}/>
        </Routes>
      </div>
      
       
       
      
      
    </div>
    
  );
}

export default App;
