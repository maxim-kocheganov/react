import React from 'react'

export default props => {
  let style = {}
  if (props.hi === true)
    style = {background: 'yellow'}
  return <div className='card'>
    <h1 style={style}>{props.title}</h1>
    <h4>{props.text}</h4>
  </div>
}