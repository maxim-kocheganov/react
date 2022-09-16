import React from 'react'
//import Writings from './Writings'

export default props => {
  let style = {}
  if (props.hi === true)
    style = {background: 'yellow'}
  if (props.new)
  { 
    return <div className='newCard'>  </div>
  }
  else
  {
    return <div className='card'>
      <h1 style={style}>{props.title}</h1>
      <div className='miniColumns'>
        <h4>{props.text}</h4>
        <button onClick={props.onClick}> Select </button>
      </div>
    </div>
  }
}