import React from 'react'
import { BackHeader, Headername, MyLine, BackOfPage, MyContainer } from './PageElements';
import img from './photos/BCCAQv2_85_annual_plus30_2021-2050.png'
import firee from './photos/fireee.mp4'
import './animations/heat.css'


function Heatrisk() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                 <source src={firee} type='video/mp4' />
            </video>
            < BackOfPage />
            < MyLine />
            <BackHeader > 
                <Headername> HEAT RISK </Headername>
            </BackHeader>
            <img src={img} className="fireboi"></img>
            <MyContainer style={{ backgroundColor: "orange", height: "36.3rem" }} />
        </div>
    )
}

export default Heatrisk
