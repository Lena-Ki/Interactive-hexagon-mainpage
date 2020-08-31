import React from 'react'
import { AppStore } from '../stores/AppStore'
import './hexcontent.scss';

export const HexContent = ({id, state}) => {
  const hexContent = AppStore.items[id - 1]
  let position = AppStore.states.classid[state - 1][id - 1]
  let size = position === 1 | position === 5 ? 'small' : 'medium'
  
  return (
    <div className="mainhex__content">
      {state === id ? 
        <>
          <p>Стадион</p>
          <span className="strong">{hexContent.date.toUpperCase()}</span>
          <span className="mainhex__time">{hexContent.time}</span>
          <button className="mainhex__button">Купить билет</button>
        </> :
        <span className={"secondary__content " + size}>{hexContent.date}</span>
      }
    </div>
  )
}