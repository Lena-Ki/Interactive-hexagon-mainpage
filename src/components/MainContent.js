import React, { useState } from 'react'
import { AppStore } from '../stores/AppStore'
import { ReusableHex } from './ReusableHex'
import './maincontent.scss'
import './hexcontent.scss';
import './teaminfo.scss'

export const MainContent = () => {

  let [active, setActive] = useState(3)

  // render elements 
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

  // render team information
  const renderTeams = (active, id) => {
    let team = id === 1 ? 'team1' : 'team2'
    let name = AppStore.items[active - 1][team]
    let clName = "strong team team" + id
    return (<span className={clName}>{name}</span>)
  }

  // onWheel event 
  const handleWheel = (e) => {
    e.stopPropagation()
    switch (active) {
      case 1:
        e.deltaY < 0 ? setActive(active) : setActive(active++)
        break;
      case 5:
        e.deltaY < 0 ? setActive(active--) : setActive(active)
        break;      
      default:
        e.deltaY < 0 ? setActive(active--) : setActive(active++)
    }
  }

  return (
    <div onWheel={handleWheel}>
      {/* left team info */}
      <div className="cut-corner cut-corner__left">
        {renderTeams(active, 1)}
      </div>

      <div className="hex-container">
        {renderHex(active, 'desktop')}
      </div>
      
      {/* right team info */}
      <div className="cut-corner cut-corner__right">
        {renderTeams(active, 2)}
      </div>
    </div>
  )
}