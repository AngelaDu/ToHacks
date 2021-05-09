import styled from 'styled-components'

export const Box = styled.nav `
   position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
   width: 80%;
   justify-content: center;
   height: 17rem;
   display: flex;
   flex-direction: row;
   margin-top: 7rem;
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
   height: 17rem;
   display: flex;
   flex-direction: row;
   margin-top: 7rem;
   padding-right: 2%;
   padding-left: 2%;
`;

export const Headername = styled.div `
    margin-top: 11rem;
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

export const MyLine = styled.nav `
    top: 0px;
    display: flex;
      left: 0; 
      right: 0; 
      margin-left: auto; 
      margin-right: auto; 
    width: 84%;
    position: absolute;
    background-color: gray;
    height: 1px;
    margin-top: 24rem;
    z-index: 100;
`;