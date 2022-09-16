import React from 'react'

export default props => {
    if (props.enter === true)
        return <div> 
          <input data-num = {props.num} onChange={props.onIn} type="text" defaultValue= {props.text} ></input>
          <button onClick={props.onSave}> save </button>   
          <input className='hiButton' onChange={props.onHi} type="checkbox" value={props.valueChangeHi} data-num = {props.num}></input>       
        </div>
    if (props.sz === 1)
      return <h1 onClick={props.onClickText} style={props.style}> {props.text} </h1>
    else if (props.sz === 4)
        return <h4 onClick={props.onClickText} style={props.style}> {props.text} </h4>    
  }