import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, vec3 } from '@react-three/rapier'
import { useControls } from 'leva'
import { controls } from '../../controls'


export const Mug = ({ modelUrl, position, rotation, scale }) => {
  const { enableAnim } = useControls(controls)
  const { nodes } = useGLTF(modelUrl)
  const rigidBody = useRef(null)
  const meshes = []

  Object.keys(nodes).forEach(nodeKey => {
    if (nodes[nodeKey]?.isMesh) {
      meshes.push(nodes[nodeKey])
    }
  })

  useFrame(state => {
    if (enableAnim && rigidBody.current) {
      const curPos = vec3(rigidBody.current.translation())
      state.camera.lookAt(curPos)
      state.camera.position.lerp(curPos.clone().set(curPos.x - 0.7, curPos.y, curPos.z + 0.7), .005)
    }
  })

  return (
    <RigidBody
      ref={rigidBody}
      colliders='hull'
      position={position}
      rotation={rotation}
      scale={scale}
    // enabledRotations={[false, false, false]}
    // enabledTranslations={[false, false, false]}
    >
      {meshes.map((mesh, index) =>
        <mesh
          key={index}
          geometry={mesh.geometry}
          material={mesh.material}
          castShadow
        ></mesh>
      )}
    </RigidBody>
  )
}
