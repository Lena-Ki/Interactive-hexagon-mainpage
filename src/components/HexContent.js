import React from 'react'
import { AppStore } from '../stores/AppStore'
import './hexcontent.scss';

export const HexContent = ({id, state}) => {
  const hexContent = AppStore.items[id - 1]
  let position = AppStore.states.classid[state - 1][id - 1]
  // secondary text props
  let size = position === 1 | position === 5 ? 'small' : 'medium'
  
  return (
    <div className="hex__content">
      {state === id 
        ? <div className="hex__content main">
          <p>Стадион</p>
          <span className="strong">{hexContent.date.toUpperCase()}</span>
          <span className="mainhex__time">{hexContent.time}</span>
          <button className="mainhex__button">Купить билет</button>
        </div>
        : position === 0 || position === 6 // check not faded
          ? null 
          : <span className={"secondary__content " + size}>{hexContent.date}</span>
      }
    </div>
  )
}