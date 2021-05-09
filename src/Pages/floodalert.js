import React, { useState } from 'react';
import { BackHeader, Headername, Box, MyLine, BackOfPage, myPic, MyContainer } from './PageElements';
import './animations/raining.css';
import img from './photos/stormypic.jpg';
import Forms from './form';


function Floodalert() {
    const [curState, setcurState] = useState("NoS");
    const handleStateChange = (val) => {
      setcurState(val);
    }
    var Current = curState;
    return (
        <div>
            { Current }
            {/* the rain effect */}
            <Box className = "rain" />
            <MyLine />
            <BackHeader style={{ backgroundImage: `url(${img})` }}> 
                <Headername> Flood Alert </Headername>
            </BackHeader>
            <Forms className="myform" handleStateChange={handleStateChange} curState={curState} style={{ paddingTop: "100px" }}/>
            <img src={process.env.PUBLIC_URL + '/Graphs/' + Current + '.jpg'} className="mypicss"></img>
            <MyContainer style={{ height: "32.5rem", backgroundColor: "#597696"}} />
            <BackOfPage />
        </div>
    )
}

export default Floodalert
