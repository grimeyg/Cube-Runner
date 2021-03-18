import React, { useState, useEffect } from 'react'
import './ClassicGame.css'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import BlockObstacle from '../BlockObstacle/BlockObstacle.js'
import ShipUno from '../ShipUno/ShipUno.js'
import Ground from '../Ground/Ground.js'
import Lighting from '../Lighting/Lighting.js'


const ClassicGame = () => {
  //ship model
  const [model, setModel] = useState(false)

  useEffect(() => {
    new GLTFLoader().load('ship.gltf', ( gltf ) => {
      gltf.scene.traverse(( node ) => {
        if ( node.isMesh ) {
          node.castShadow = true
        }
      })
      setModel(gltf)
    })
  })

    return (
        <Canvas className="game" camera={{position: [0, 0.656, 3.6]}} onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          <Lighting />
          <Ground />
          <BlockObstacle />
          <ShipUno model={model}/>
        </Canvas>
    )
}

export default ClassicGame
