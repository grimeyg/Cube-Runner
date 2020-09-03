import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ClassicGame from '../ClassicGame/ClassicGame.js'
import Home from '../Home/Home.js'
import './App.css'

const App = () => {

  const startGame = (name) => {
    console.log(name)
  }

    return (
      <Router>
        <Switch>
          <Route
            path = '/' exact
            render = {props => <Home startGame={startGame} />}
          />
          <Route
            path = '/classic-game'
            component = {ClassicGame}
          />
        </Switch>
      </Router>
    )
}

export default App
