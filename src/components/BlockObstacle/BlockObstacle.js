import React from 'react'

const BlockObstacle = (props) => {
  return (
    <mesh position={[0, 0, -5]} castShadow>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
    </mesh>
  )
}

export default BlockObstacle
