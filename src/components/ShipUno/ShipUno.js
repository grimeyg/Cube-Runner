import React, { useState, useEffect, useRef } from 'react'
import './ShipUno.css'
import { useSpring, a } from 'react-spring/three'
import { useFrame, useThree } from 'react-three-fiber'

const ShipUno = ({ model }) => {
  //controls
  const { camera } = useThree()
  const [camDirection, updateCamDirection] = useState(0)
  const [shipX, updateShipX] = useState(0)
  const [shipZ, updateShipZ] = useState(2.5)
  const [rotation, updateRotation] = useState([0, 0, 0])
  const ref = useRef()
  let movingLeft = false
  let movingRight = false


  const handleKeyDown = (e) => {
    if(e.repeat === true) {return null}

      if(e.key === 'a' || e.key === 'j' ) {
        movingLeft = true
        if(movingRight){
          updateRotation([0, 0, 0])
          updateCamDirection(0)
        } else {
          updateRotation([0, 0, 0.5])
          updateCamDirection(-0.05)
        }
      } else if (e.key === 'd' || e.key === 'l') {
          movingRight= true
          if(movingLeft){
            updateRotation([0, 0, 0])
            updateCamDirection(0)
          } else {
            updateRotation([0, 0, -0.5])
            updateCamDirection(0.05)
          }
      }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'a' || e.key === 'j' ) {
      movingLeft = false
      if(movingRight) {
        updateRotation([0, 0, -0.5])
        updateCamDirection(0.05)
      }
    } else if (e.key === 'd' || e.key === 'l') {
        movingRight = false
        if(movingLeft) {
          updateRotation([0, 0, 0.5])
          updateCamDirection(-0.05)
        }
    }
    if(!movingLeft && !movingRight) {
      updateRotation([0, 0, 0])
      updateCamDirection(0)
    }
  }

  const props = useSpring({ rotation: rotation })


  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
  }, [])



  useFrame(() => {
    camera.position.x += camDirection
    camera.position.z += -0.05

    let poo = ref.current.position.x
    poo += camDirection
    updateShipX(poo)

    let zoo = shipZ
    zoo += -0.05
    updateShipZ(zoo)
  })

  return model ?
    <a.primitive
      castShadow
      object={model.scene}
      position={[shipX, 0, shipZ]}
      ref={ref}
      rotation={props.rotation}
      scale={[.2, .2, .2]}
    /> : null
}

export default ShipUno
