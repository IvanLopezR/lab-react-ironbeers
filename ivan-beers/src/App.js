import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import Navbar from './components/Navbar'
import Beer from './components/Beer/Beer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => {
          return <Home />
        }} />
        <Route exact path='/beers' component={Beers} />
        }} />
        <Route exact path='/random-beers' component={RandomBeer} />
        }} />
        <Route exact path='/new-beers' render={() => {
          return <NewBeer />
        }} />
        <Route exact path='/detail/:id' component={Beer} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
