import React from 'react'
import { BackHeader, Headername } from './PageElements';
import './animations/fires.css';


function Heatrisk() {
    return (
        <div>
                <div className = 'flame' ></div>
            <BackHeader style={{ background: 'rgb(255,141,43)', background: 'radial-gradient(circle at 50% 40%, rgba(255,141,43,1) 0%, rgba(91,18,18,1) 21%, rgba(65,6,6,1) 35%, rgba(50,0,0,1) 59%)' }}> 
                <Headername> HEAT RISK   </Headername>
            </BackHeader>
            
        </div>
    )
}

export default Heatrisk
