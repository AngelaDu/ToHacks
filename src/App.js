import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './NavBar/index';
import Home from './Pages/index';
import Floodalert from './Pages/floodalert'
import Heatrisk from './Pages/heatrisk'
 
 
function App() {
 return (
   <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/heatrisk' exact component={Heatrisk} />
       <Route path='/floodalert' exact component={Floodalert} />
     </Switch>
   </Router>
 );
}
 
export default App;