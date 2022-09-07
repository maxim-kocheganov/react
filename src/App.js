import React, { Component } from 'react';
import './App.css';
import Card from './Mod/Card'
import CardBig from './Mod/CardBig'

class App extends Component {

  state = {
    Card: [{title:"Hello",text:"First thing", hi:false}, {title:"world",text:"Second thing", hi:true}, 
           {title:"Another one",text:"Bites the dust", hi:false}],
    selected : {title:"Hello",text:"First thing", hi:false}
  }


  render() {
    let res = []
    this.state.Card.forEach((elem) => {
      res.push(<Card title={elem.title} text={elem.text} hi={elem.hi}></Card>)
    })
    let sel = this.state.selected
    res.push(<CardBig title={sel.title} text={sel.text} hi={sel.hi}></CardBig>)
    return res
  }
}

export default App;
