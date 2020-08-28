import React from 'react'
import { HexContent } from '../HexContent';

export const Hex3 = ({state, sizes, positions, setActive}) => {

  let {width, height, left, right, top, transform} = 0

  switch (state) {
    case 2:
      ({width, height} = sizes[0]);
      ({top, left, right, transform} = positions[2])
      break;
      
    case 3:
      ({width, height} = sizes[1]);
      ({top, left, right, transform} = positions[1])
      break;
  
    default:
      break;
  }

  return (
    <div onClick={() => setActive(3)} style={
      {width: width,
      height: height,
      display: 'flex',
      position: 'absolute',
      justifyContent:'center',
      alignItems: 'center',
      top: top,
      transform: transform,
      left: left,
      right: right,
      background: 'url(/static/media/hexagon.d3253850.svg) no-repeat center',
      backgroundSize: 'contain',
      transition: 'all 1.5s'
    }}>
      {state === 3 ? <HexContent /> : null}
    </div>
  )
}