import styled from 'styled-components'

export const Box = styled.nav `
   position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
   width: 80%;
   justify-content: center;
   height: 7rem;
   display: flex;
   flex-direction: row;
   margin-top: 7rem;
   padding-top: 13%;
   padding-right: 2%;
   padding-left: 2%;
   z-index: 5;
`;

export const BackHeader = styled.nav`
   position: absolute;
   top: 0px;
   left: 0px;
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
   width: 80%;
   justify-content: center;
   height: 7rem;
   display: flex;
   flex-direction: row;
   margin-top: 7rem;
   padding-top: 13%;
   padding-right: 2%;
   padding-left: 2%;
`;

export const Headername = styled.div `
    margin-top: 1.4rem;
    position: absolute;
    display: flex;
    height: 92vh;
   align-self: center;
   justify-content: center;
   align-items: center;
   color: white;
   font-size: 42px;
   font-weight: 750;
   z-index: 100;
`;
