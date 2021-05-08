import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/index';
import Home from './Pages/index';
import Floodalert from './Pages/floodalert'
import Heatrisk from './Pages/heatrisk'
import Pollutionlevel from './Pages/pollutionlevel'
import CO2level from './Pages/co2level'
 
 
function App() {
 return (
   <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/heatrisk' exact component={Heatrisk} />
       <Route path='/floodalert' exact component={Floodalert} />
       <Route path='/pollutionlevel' exact component={Pollutionlevel} />
       <Route path='/co2level' exact component={CO2level} />
     </Switch>
   </Router>
 );
}
 
export default App;