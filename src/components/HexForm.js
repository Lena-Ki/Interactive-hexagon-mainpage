import React from 'react'
import styled from '@emotion/styled'

export const HexForm = styled.div`
  & { 
    top: 63px;
    left: 26px;
    position: relative;
    border-radius: 20px;
    background-color: white;
    width: 80%;
    height: 143px;
    box-sizing: border-box;
    -webkit-transition: all 1s;
    transition: all 1s;
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
    border: 0.4vh solid transparent;
    border-left: 2px solid;
    border-right: 2px solid; 
  }
          
  /* Creating pseudo-class */
  &:before, &:after { 
      content: ""; 
      border: inherit; 
      background-color: inherit;
      position: absolute; 
      top: -0.5vh; 
      left: -0.5vh; 
      border-radius: inherit;
      height: 100%; 
      width: 100%; 
  } 
    
  /* Align them in such a way 
  that they form a hexagon */
  &:before { 
      transform: rotate(60deg); 
  } 
  &:after { 
      transform: rotate(-60deg); 
  }
`