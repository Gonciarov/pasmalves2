import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Terms from './terms';
import ContactAbout from './contactabout';
import NavAbout from './navabout';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/terms' component={Terms}></Route>
      <Route exact path='/contact' component={ContactAbout}></Route>
      <Route exact path='/about' component={NavAbout}></Route>
      
    </Switch>
  );
}

export default Main;