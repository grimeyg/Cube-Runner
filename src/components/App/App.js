import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ClassicGame from '../ClassicGame/ClassicGame.js'
import Home from '../Home/Home.js'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mode: null,
      highScore: null
    }
  }

  startGame = name => {
    console.log(name)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path = '/' exact
            render = {props => <Home startGame={this.startGame} />}
          />
          <Route
            path = '/classic-game'
            component = {ClassicGame}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
