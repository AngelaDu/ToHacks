import React from 'react';
import { Nav, NavLink, NavMenu, LogoLink, Headername, MyLine } from './NavbarElements';
import logo from './myLogo.png';
import ParticleBackground from './ParticleFiles/particleBackground';
 
const Navbar = () => {
   return (
        <Nav>
            {/*<LogoLink to="/"> <img className = "myLogo" src={logo} alt = "Logo" height = "100%"/> </LogoLink>*/}
            < ParticleBackground />
            < MyLine />
            <Headername to = "/"> Name of Project </Headername>
            <NavMenu>
                <NavLink to = "/floodalert" activeStyle> Flood Alert </NavLink>
                <NavLink to = "/heatrisk" activeStyle> Heat Risks </NavLink>
                <NavLink to = "/pollutionlevel" activeStyle> Pollution Levels </NavLink>
            </NavMenu>
        </Nav>
   )
}
 
export default Navbar