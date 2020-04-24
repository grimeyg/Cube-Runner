import React from 'react'
import MenuCard from '../MenuCard/MenuCard.js'
// import App from '../App/App.js'
import './Home.css'

const Home = (props) => {
  return (
    <div className='home-page'>
      <MenuCard
        name = "Classic"
        key = "1"
        startGame = {props.startGame}
      />

      <MenuCard
        name = "Race"
        key = "2"
        startGame = {props.startGame}
      />

      <MenuCard
        name = "Leaderboards"
        key = "3"
      />

      <MenuCard
        name = "Options"
        key = "4"
      />
    </div>
  )
}

export default Home
