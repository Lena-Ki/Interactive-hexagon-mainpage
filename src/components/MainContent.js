import React, { useState } from 'react'

import { Hex2 } from './HexItems/Hex2';
import { Hex3 } from './HexItems/Hex3';
import { Hex4 } from './HexItems/Hex4';
import './maincontent.css'

export const MainContent = () => {

  const items = [
    {id: 1, content: 1},
    {id: 2, content: 2},
    {id: 3, content: 3},
    {id: 4, content: 4},
    {id: 5, content: 5},
  ]

  const sizes = [
    {width: '160px', height: '160px'},
    {width: '282px', height: '264px'},
  ]

  const positions = [
    {top: '51%', left: '30%', right: '', transform: ''},
    {top: '50%', left: '50%', right: '', transform: 'translate(-50%,-50%)'},
    {top: '17%', left: '', right: '30%', transform: ''},
  ]

  const [active, setActive] = useState(3)

  return (
    <div className="hex-container">
    
      <Hex2 state={active} sizes={sizes} positions={positions} setActive={setActive}/>
      <Hex3 state={active} sizes={sizes} positions={positions} setActive={setActive}/>
      <Hex4 state={active} sizes={sizes} positions={positions} setActive={setActive}/>
      
    </div>
  )
}