// first we installed  the styled component and keyframes and then we created a variable loaderSpin and we used keyframes to create a animation
// and we used the loaderSpin variable in the animation 
// and we exported the loader and used it in the App.js

import styled, { keyframes } from "styled-components";
// we use a loaderSpein a variable and we use keyframes to create a animation and
const loaderSpin = keyframes` {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;

// we used styled component to style the loader  and applied in the div
// and removed the class and use the css here
// which elemnet we want to style => div, so we write div `` and then we write the css
// we use the loaderSpin variable in the animation using $ sign innside the curly braces
// replacing  animation: spin 2s linear infinite;
// we are using loader in the Accordion.js so we need to export it and import it in the Accordion.js
export const Loader = styled.div`
    border: 16px solid ${(prop) => prop.border}; /* Light grey */
    border-top: 16px solid ${(prop) => prop.bordertop}; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${loaderSpin} 2s linear infinite;
  }
  `;
// we passed color red from loader in the Accorfdian , so we go inside the temporal literal and change this (    border: 16px solid ${red}; /* Light grey */)  to ${(props) => props.color} and we use it as a border color
// styled.div`` will create a div and we can style it using the css inside the backticks
//used red color from accodion.js loader as a prop in the loader.js and used it in the loader.js as a border color 
// border: 16px solid ${red}; /* Light grey */ here we used the red color as a border color from the Accordion.js loader as a prop in the loader.js and used it in the loader.js as a border color
// we accept props and that propis returing props .color whihc is the red colorfom the loader.