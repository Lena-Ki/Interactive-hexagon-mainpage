import React, { useState } from 'react'
import { AppStore } from '../stores/AppStore'
import { ReusableHex } from './HexItems/ReusableHex'
import './maincontent.css'

export const MainContent = () => {

  const [active, setActive] = useState(3)

  const renderHex = (active, device) => {
    console.log(active, device)
    let Hexs = []
    for (let i = 0; i < 5; i++) {
      let classId = AppStore.states.classid[active - 1][i]
      let item = <ReusableHex
        key={i} 
        id={i + 1} 
        clName={device+classId} 
        state={active} 
        setActive={setActive}
      />
      Hexs.push(item)
    }
    return Hexs
  }

  return (
    <div className="hex-container">
      {renderHex(active, 'desktop')}
    </div>

  )
}