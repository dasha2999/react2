import React from 'react';
import { Button } from './button/Button'
// import { Text } from './text/Text';
import { delay } from '../utils/delay';
import { Header } from './header/header';
import { Greeting } from './greeting/greeting';

export class App extends React.Component {

  state = {
    isVisible: true,
    counter: 0
  }

  handleClick = () => { // обработчик клика
    console.log(this.state.isVisible)
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  counterInc = () => {
    delay(1000).then(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    })
  }

  counterDec = () => {
    delay(1000).then(() => {
      this.setState({
        counter: this.state.counter - 1
      })
    })
  }

getTimeofDay () {
  const date = new Date() 
  const time = date.getHours()
  let timeOfDay 

  if (time > 6 && time < 12) {
    timeOfDay = 'Доброе утро'
  }
  if (time >= 12 && time < 17) {
    timeOfDay = 'Добрый день'
  }
  if (time >= 17 && time < 23) {
    timeOfDay = 'Добрый вечер'
  }
  if (time >= 23 && time < 6) {
    timeOfDay = 'Добрый ночи'
  }
  return timeOfDay
}

  render () {


    return (
    <>
    <h1> App Component </h1>
    {/* <Button handleClick = {this.handleClick} /> */}
    {/* <Text /> */}

    {/* !!! */}
    {/* {this.state.isVisible && <Text />}  */}
    {/* !!! */}
    {/* <Button handleClick = {this.handleClick}>
      Props кнопка
    </Button>

    <Button handleClick = {this.handleClick}>
      Другая кнопка
    </Button> */}

    {/* <Button buttonName='Plus' handleClick={this.counterInc}/>
    <Button buttonName='Minus' handleClick={this.counterDec}/>

    <div> {this.state.counter} </div> */}

    <Header text={this.getTimeofDay()}/>
    <Greeting userName='Ваня'/>
    </>
    )
  }
}

export default App;
