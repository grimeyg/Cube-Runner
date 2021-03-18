import React from 'react'
import { useFrame } from 'react-three-fiber'

const Testing = ({ ship, camDirection }) => {

  useFrame(() => {
    ship.current.position.x += camDirection
  })
}

export default Testing
