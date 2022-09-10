import React from 'react'

export default props => {
  let style = {}
  if (props.hi === true)
    style = {background: 'yellow'}
  return <div className='cardBig'>
    <h1 style={style}>{props.title}</h1>
    <h4 className='centeredText'>{props.text}</h4>
  </div>
}