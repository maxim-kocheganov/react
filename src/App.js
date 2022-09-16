import React, { Component } from 'react';
import './App.css';
import Card from './Mod/Card'
import CardBig from './Mod/CardBig'

class App extends Component {

  state = {
    Card: [{title:"Hello",text:"First thing", hi:false}, {title:"world",text:"Second thing", hi:true}, 
           {title:"Another one",text:"Bites the dust", hi:false}],
    selected : 0,
    enter : false
  }

  changeMainCard(num)
  {
    this.setState(() => {
      return {selected:num,enter:false}
    })
  }
  onSave(event, textType)
  {
    this.setState((prev) => {
        prev.enter = false
      })
    this.forceUpdate()
  }
  onClickTitle(event, textType)
  {
    this.setState((prev) => {
        prev.enter = true
      })
    this.forceUpdate()
  }
  onClickText(event, textType)
  {
    this.setState((prev) => {
        prev.enter = true
      })
    this.forceUpdate()
  }
  onHi(event, textType)
  {
    let num = parseInt(event.target.dataset.num)
    this.setState((prev) => {
      prev.Card[num].hi = !prev.Card[num].hi
      })
    this.forceUpdate()
  }
  onIputTitle(event, textType)
  {
    console.log("Hit")
    let num = parseInt(event.target.dataset.num)
    let val = event.target.value
    
    this.setState((prev) => {
          prev.Card[num].title = val
      })
    this.forceUpdate()
  }
  onIputText(event, textType)
  {
    let num = parseInt(event.target.dataset.num)
    let val = event.target.value
    
    this.setState((prev) => {
          prev.Card[num].text = val
      })
    this.forceUpdate()
  }

  render() {
    let res = []
    let num = 0
    this.state.Card.forEach((elem) => {
      res.push(<Card title={elem.title} text={elem.text} hi={elem.hi} onClick={this.changeMainCard.bind(this, num++)} key={num} ></Card>)
    })
    let sel = this.state.selected
    let card = this.state.Card[sel]
    let cardBig = <CardBig
                    num={sel} 
                    onInputTitle={(event) => this.onIputTitle.call(this,event)} 
                    onInputText={(event) => this.onIputText.call(this,event)} 
                    onClickTitle={(event) => this.onClickTitle.call(this,event)}
                    onClickText={(event) => this.onClickText.call(this,event)}
                    onSave={(event) => this.onSave.call(this,event)}                    
                    onHi={(event) => this.onHi.call(this,event)}
                    title={card.title} text={card.text}
                    hi={card.hi} enter={this.state.enter}>                      
                  </CardBig>
    let final_res = <div className='columns'><div className='leftColumn'> {res} </div> <div className='rightColumn'>{cardBig}</div></div>
    return final_res
  }
}

export default App;
