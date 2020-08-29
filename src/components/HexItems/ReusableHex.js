import React from 'react'
import { HexContent } from '../HexContent';

export const ReusableHex = ({id, clName, state, setActive}) => {

  // toggle class here

  return (
    <div className={'hex__initial hex__' + clName} onClick={() => setActive(id)}>
      {state === id ? <HexContent /> : null}
    </div>
  )
}