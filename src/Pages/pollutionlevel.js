import React from 'react'
import smoke from './photos/smoke.mp4'
import { BackHeader, Headername, BackOfPage, MyLine } from './PageElements';
import './animations/clouds.css';

function Pollutionlevel() {
    return (
        <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={smoke} type='video/mp4' />
        </video>
        < MyLine />
        <BackHeader> 
            <Headername> Pollution Levels  </Headername>
        </BackHeader>
        <BackOfPage />
        </div>
    )
}

export default Pollutionlevel
