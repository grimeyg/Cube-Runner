import React, { useRef } from 'react'
import './ClassicGame.css'
import * as THREE from 'three'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import BlockObstacle from '../BlockObstacle/BlockObstacle.js'
import ShipUno from '../ShipUno/ShipUno.js'
import Ground from '../Ground/Ground.js'
import Lighting from '../Lighting/Lighting.js'


const ClassicGame = () => {

  let camPosition = [0, 0.7, 3.5]

  // useEffect(() => {
  //   window.addEventListener("keydown", handleKeyDown)
  //   window.addEventListener("keyup", handleKeyUp)
  // }, [])

    return (
        <Canvas className="game" camera={{position: camPosition}} onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          <Lighting />
          <Ground />
          <BlockObstacle />
          <ShipUno />
        </Canvas>
    )
}

export default ClassicGame
