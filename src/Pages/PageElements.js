import styled from 'styled-components'

export const Box = styled.nav `
   position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
   width: 70%;
   justify-content: center;
   height: 17rem;
   display: flex;
   flex-direction: row;
   margin-top: 5rem;
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
   width: 70%;
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
    text-shadow: 3px 3px black;
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
    width: 76%;
    position: absolute;
    background-color: gray;
    height: 1px;
    margin-top: 24rem;
    z-index: 100;
`;

export const BackOfPage = styled.div `
   position: absolute;
   display: flex;
   top: 0;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   width: 74%;
   height: 100%;
   margin-top: 24rem;
   background-color: white;
   z-index: -1;
`;

export const MyContainer = styled.div `
   position: absolute;
   display: flex;
   top: 0;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   margin-top: 25.3rem;
   width: 72%;
   height: 300px;
   background-color: gray;
   z-index: 0;
`;

export const myPic = styled.nav `
position: absolute;
   display: flex;
   top: 0;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   margin-top: 25.3rem;
   width: 72%;
`;

export const TextContainer = styled.nav `
   position: absolute;
   display: flex;
   top: 0;
   left: 0;
   right: 0;
   margin-left: auto;
   margin-right: auto;
   margin-top: 81rem;
   z-index: 1;
   flex-direction: row;
   width: 70%;
   height: 20rem;
   justify-content: space-around;
`;

export const Textbox = styled.nav  `
   background-color: blue;
   position: relative;
   width: 48%;
   height: 20rem;
   border-radius: 8%;
`;