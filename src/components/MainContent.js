import React, { useState } from 'react'
import { AppStore } from '../stores/AppStore'
import { ReusableHex } from './HexItems/ReusableHex'
import './maincontent.css'

export const MainContent = () => {

  const items = [
    {id: 1, content: 1},
    {id: 2, content: 2},
    {id: 3, content: 3},
    {id: 4, content: 4},
    {id: 5, content: 5},
  ]

  const [active, setActive] = useState(3)

  const renderHex = (active, device) => {
    console.log(active, device)
    let Hexs = []
    let classId = null
    let item = null
    let i = 0
    for (i; i < 5; i++) {
      classId = AppStore.states.classid[active][i]
      item = <ReusableHex key={i} id={i} clName={device+classId} state={active} setActive={setActive}/>
      Hexs.push(item)
    }
    console.log(Hexs)
    return Hexs
  }

  return (
    <div className="hex-container">
      
      {renderHex(active, 'desktop')}
    </div>

  )
}