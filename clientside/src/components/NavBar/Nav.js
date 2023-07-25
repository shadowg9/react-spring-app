import React from 'react';
import './Nav.css'


const Nav = props => {
    return (

        <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">

        <a href="/"> EMS </a>

      
    
      
      
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
      
              <a class="nav-link mx-2 active" href="/reg">Register</a> 
            </li>
            <li class="nav-item">
      
              <a class="nav-link mx-2 active" href="/">Login</a> 
            </li>
            <li class="nav-item">
      
              <a class="nav-link mx-2 active" href="/emp">Employees</a> 
            </li>
          
          
       

         
          </ul>
        </div>
      </div>
    </nav>



    );
};

export default Nav;


