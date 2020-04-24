import React from 'react'

const ShipUno = (props) => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
      <meshBasicMaterial attach="material" color="red"/>
    </mesh>
  )
}

export default ShipUno
