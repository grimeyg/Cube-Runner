import React, { useState, useEffect } from 'react'
import './ShipUno.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSpring, a } from 'react-spring/three'

const ShipUno = () => {
  const [coordinates, updateCoordinates] = useState([0, 0, 0])
  const [model, setModel] = useState()
  let movingLeft = false
  let movingRight = false

  const handleKeyDown = (e) => {
    if(e.repeat === true) {return null}

      if(e.key === 'a' || e.key === 'j' ) {
        movingLeft = true
        if(movingRight){
          updateCoordinates([0, 0, 0])
        } else {
          updateCoordinates([0, 0, 0.5])
        }
      } else if (e.key === 'd' || e.key === 'l') {
          movingRight= true
          if(movingLeft){
            updateCoordinates([0, 0, 0])
          } else {
            updateCoordinates([0, 0, -0.5])
          }
      }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'a' || e.key === 'j' ) {
      movingLeft = false
      if(movingRight) {
        updateCoordinates([0, 0, -0.5])
      }
    } else if (e.key === 'd' || e.key === 'l') {
        movingRight = false
        if(movingLeft) {
          updateCoordinates([0, 0, 0.5])
        }
    }
    if(!movingLeft && !movingRight) {
      updateCoordinates([0, 0, 0])
    }
  }

  const props = useSpring({rotation: coordinates})

  useEffect(() => {
    new GLTFLoader().load('ship.gltf', ( gltf ) => {
      gltf.scene.traverse(( node ) => {
        if ( node.isMesh ) {
          node.castShadow = true
        }
      })
      setModel(gltf)
    })

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
  }, [])

  return model ?
    <a.primitive
      castShadow
      object={model.scene}
      position={[0, 0, 2.5]}
      rotation={props.rotation}
      scale={[.2, .2, .2]}
    /> : null
}

export default ShipUno
