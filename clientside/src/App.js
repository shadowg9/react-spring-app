import { Routes, Route } from 'react-router';
import React from 'react';



import './App.css';
import Nav from './components/NavBar/Nav';
import Home from './components/Homepage/Home';
import Emp from './components/Employee/Emp';



function App() {
  return (
    <div>
      <Nav/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/emp" exact element={<Emp />}/>
        </Routes>
      </div>
      
       
       
      
      
    </div>
    
  );
}

export default App;
