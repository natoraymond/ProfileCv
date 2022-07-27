import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts';


function App(){
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/skills'>
            <Skills/>
          </Route>

          <Route path='/contacts'>
            <Contacts/>
          </Route>
          
        </Switch>
      </Router>
    );
  }

export default App;
