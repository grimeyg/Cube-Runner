import React, { useState, useEffect } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const ShipUno = () => {
  const [model, setModel] = useState(false)

  useEffect(() => {
    new GLTFLoader().load('ship.gltf', setModel)
  }, [])

  return model ? <primitive object={model.scene} scale={[.2, .2, .2]} position={[0, 0, 2.5]}><ambientLight /></primitive> : null
}

export default ShipUno
