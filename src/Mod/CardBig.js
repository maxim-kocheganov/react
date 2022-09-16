import React from 'react'
import Writings from './Writings'

export default props => {
  let style = {}
  if (props.hi === true)
    style = {background: 'yellow'}
  return <div className='cardBig'>
    <Writings
      num={props.num} style={style}
      onInputTitle={props.onInputTitle} 
      onInputText={props.onInputText}
      enter={props.enter}
      onClickTitle={props.onClickTitle}
      onClickText={props.onClickText}
      onSave={props.onSave}
      onChangeHi={props.onHi}
      onHi={props.onHi} hi={props.hi}
      title={props.title} 
      text={props.text}></Writings>       
  </div>
}
// //<h1 style={style}>{props.title}</h1>