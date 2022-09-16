import React from 'react'

export default props => {
    if (props.enter === true)
        return <div> 
          <input data-num = {props.num} onChange={props.onInputTitle} type="text" defaultValue= {props.title} ></input>
          <button onClick={props.onSave}> save </button>   
          <input className='hiButton' onChange={props.onHi} type="checkbox" data-num = {props.num}></input>       
          <input data-num = {props.num} onChange={props.onInputText} type="text" defaultValue= {props.text} ></input>
        </div>
    else
      return  <div>
                <h1 onClick={props.onClickText} style={props.style}> {props.title} </h1>
                <h4 onClick={props.onClickText}> {props.text} </h4> 
                <a className='changeRef' onClick={props.onClickText}>Change</a>
              </div> 
  }