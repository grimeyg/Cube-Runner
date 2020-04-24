import React from 'react'
import './ClassicGame.css'
import { Canvas } from 'react-three-fiber'
import BlockObstacle from '../BlockObstacle/BlockObstacle.js'


const ClassicGame = () => {
  const handleKeydown = (e) => {
    console.log(e.key)
  }
  
  window.addEventListener("keydown", handleKeydown)

    return (
        <Canvas className="game">
          <BlockObstacle/>
        </Canvas>
    )
}

export default ClassicGame
