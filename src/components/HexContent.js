import React from 'react'
import { AppStore } from '../stores/AppStore'
import './hexcontent.css';

export const HexContent = ({id}) => {
  const hexContent = AppStore.items[id - 1]
  
  return (
    <div className="mainhex__content">
      <p>Стадион</p>
      <span className="mainhex__date">{hexContent.date.toUpperCase()}</span>
      <span className="mainhex__time">{hexContent.time}</span>
      <button className="mainhex__button">Купить билет</button>
    </div>
  )
}