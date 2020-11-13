import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Terms from './terms';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/terms' component={Terms}></Route>
    </Switch>
  );
}

export default Main;