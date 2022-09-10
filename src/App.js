import React, { Component } from 'react';
import './App.css';
import Card from './Mod/Card'
import CardBig from './Mod/CardBig'

class App extends Component {

  state = {
    Card: [{title:"Hello",text:"First thing", hi:false}, {title:"world",text:"Second thing", hi:true}, 
           {title:"Another one",text:"Bites the dust", hi:false}],
    selected : 0
  }

  changeMainCard(num)
  {
    this.setState(() => {
      return {selected:num}
    })
  }

  render() {
    let res = []
    let num = 0
    this.state.Card.forEach((elem) => {
      res.push(<Card title={elem.title} text={elem.text} hi={elem.hi} onClick={this.changeMainCard.bind(this, num++)} key={num}></Card>)
    })
    let sel = this.state.selected
    let card = this.state.Card[sel]
    let cardBig = <CardBig title={card.title} text={card.text} hi={card.hi}></CardBig>
    let final_res = <div className='columns'><div className='leftColumn'> {res} </div> <div className='rightColumn'>{cardBig}</div></div>
    return final_res
  }
}

export default App;
