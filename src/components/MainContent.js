import React, { useState } from 'react'
import { AppStore } from '../stores/AppStore'
import { ReusableHex } from './ReusableHex'
import './maincontent.css'
import './hexcontent.scss';
import './clipped.css'

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

  const renderTeams = (active, id) => {
    let team = id === 1 ? 'team1' : 'team2'
    let name = AppStore.items[active - 1][team]
    let clName = "strong team" + id
    return (<span className={clName}>{name}</span>)
  }

  return (
    <>
      <div className="cut-corner cut-corner__left">
        {renderTeams(active, 1)}
      </div>
      <div className="hex-container">
        {renderHex(active, 'desktop')}
      </div>
      <div className="cut-corner cut-corner__right">
        {renderTeams(active, 2)}
      </div>
    </>
  )
}