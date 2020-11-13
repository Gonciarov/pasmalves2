import React from "react";
import './App.css';

const Navigation = () => {
    
      return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top"> 
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand page-scroll" href="/">
            <i class="fas fa-truck"></i> | UAB PASMALVĖS
            </a>{" "}
          </div>
        <div>
          
          <a href="#about" className="nav-elements">
            About 
          </a>
   
  
          <a href="#contact" className="nav-elements">
            Contact
          </a>

          </div>
          </div>
        </nav>
        
          )

  }
  
  export default Navigation;