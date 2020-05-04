import React from 'react'
import './ClassicGame.css'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import BlockObstacle from '../BlockObstacle/BlockObstacle.js'
import ShipUno from '../ShipUno/ShipUno.js'
import Ground from '../Ground/Ground.js'
import Lighting from '../Lighting/Lighting.js'


const ClassicGame = () => {
  const handleKeydown = (e) => {
    console.log(e.key)
  }

  window.addEventListener("keydown", handleKeydown)

    return (
        <Canvas className="game" camera={{position:[0, 0.7, 3.5]}}>
          <Lighting />
          <Ground />
          <BlockObstacle/>
          <ShipUno/>
        </Canvas>
    )
}

export default ClassicGame
