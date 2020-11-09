import './App.css';
import React from 'react'
import Navigation from './navigation';
import Contact from './contact';
import About from './about';
import Header from './header';

const App = () => {

  
    return (
      <div>
        
        <Navigation />
        <Header />
        <About />
        <Contact />
      </div>
    )
}

export default App;

