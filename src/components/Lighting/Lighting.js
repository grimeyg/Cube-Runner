import React from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const Lighting = () => {
  const light = new THREE.DirectionalLight(0xffffff, 0.85)
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 512
  light.shadow.mapSize.height = 512
  light.shadow.camera.near = 0.5
  light.shadow.camera.far = 500
  light.shadow.camera.top = 40
  light.shadow.camera.bottom = -10
  light.shadow.camera.right = 10
  light.shadow.camera.left = -10

  // useFrame(() => {
  //   light.position.z += -0.05
  // })

  return (
    <primitive object={light} position={[20, 200, 30]} castShadow/>
  )
}

export default Lighting
