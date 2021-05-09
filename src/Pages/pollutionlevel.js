import React, { useEffect } from 'react'
import smoke from './photos/smoke.mp4'
import { BackHeader, Headername, BackOfPage, MyLine, MyContainer, TextContainer, Textbox } from './PageElements';
import './animations/clouds.css';

function Pollutionlevel() {

    useEffect(() => {
        const script = document.createElement('script');      
        script.src = "https://www.climatelevels.org/graphs/js/co2.php?theme=default&pid=2degreesinstitute%22%3E";
        script.async = true;
        document.getElementById("co2-widget-container").appendChild(script);

        const script2 = document.createElement('iframe');
        script2.src = "https://ourworldindata.org/grapher/annual-co-emissions-by-region";
        script2.async = true;
        script2.width = "1000px";
        script2.height = "400px";
        document.getElementById("average-total-co2").appendChild(script2);
      }, []);

    return (
        <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={smoke} type='video/mp4' />
        </video>
        < MyLine />
        <BackHeader> 
            <Headername> Pollution Levels  </Headername>
        </BackHeader>
        <BackOfPage style={{ height: '80rem' }} />
        <div className='CO2thing' id="co2-widget-container" />
        <div className='CO2thing2' id="average-total-co2" /> 
        <MyContainer style={{ height: '26.7rem'}} />
        <MyContainer style={{ height: '26.7rem', marginTop: '52.9rem'}} />
        <MyContainer style={{ height: '21.6rem', marginTop: '80.4rem'}} />
        <TextContainer>
            <Textbox />
            <Textbox />
        </TextContainer>
        </div>
    )
}

export default Pollutionlevel
