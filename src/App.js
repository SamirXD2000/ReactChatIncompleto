import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { index } from './components/index';
import Bygoogle from './components/Bygoogle';
import { Aboutus } from './components/about_us';
import { Navbar } from './components/navbar';
import { features } from './components/features';
import { Contactus } from './components/contact_us';
import { Login } from './components/login';
import { Recuperar } from './components/recuperar';
import { Registro } from './components/registro';
import { Home } from './components/home';
import { Chat } from './components/chat';

function App() {
  return (
    
    <Router>
      <Navbar/>

      <div>
        <Switch>
          <Route path = "/contactus" component = {Contactus} />
          <Route path = "/features" component = {features} />
          <Route path = "/aboutus" component = {Aboutus} />
          <Route path = "/registro" component = {Registro} />
          <Route path = "/recuperar" component = {Recuperar} />
          <Route path = "/home" component = {Home} />
          <Route path='/chat' component= {Chat} />
          <Route path = "/" component = {Login} />
          

        </Switch>
      </div>
    </Router>

  );
}

export default App;
