import React, { useState } from 'react'
import { AppStore } from '../stores/AppStore'
import { ClippedRectangle } from './ClippedRectangle'
import { ReusableHex } from './HexItems/ReusableHex'
import './maincontent.css'
import './hexcontent.css';

export const MainContent = () => {

  const [active, setActive] = useState(3)

  const renderHex = (active, device) => {
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

  const renderTeams = (active) => {
    let team1 = AppStore.items[active - 1].team1
    console.log(team1)
    return (<span className="mainhex__date team1">{team1}</span>)
  }

  return (
    <>
      <div className="cut-corner">
        {renderTeams(active)}
      </div>
      <div className="hex-container">
        {renderHex(active, 'desktop')}
      </div>
    </>
  )
}