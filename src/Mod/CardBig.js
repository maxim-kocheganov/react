import React from 'react'
import Writings from './Writings'

export default props => {
  let style = {}
  if (props.hi === true)
    style = {background: 'yellow'}
  return <div className='cardBig'>
    <Writings
     num={props.num} style={style}
      onIn={props.onIputTitle} enter={props.enter}
      onClickText={props.onClickText}
      onSave={props.onSave}
      onChangeHi={props.onHi}
      onHi={props.onHi}
      text={props.title} sz={1}></Writings>       
  </div>
}
// //<h1 style={style}>{props.title}</h1>