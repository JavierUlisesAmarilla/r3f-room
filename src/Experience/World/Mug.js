import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, vec3 } from '@react-three/rapier'
import { useControls } from 'leva'
import { controls } from '../../controls'


export const Mug = ({ modelUrl, position, rotation, scale }) => {
  const { enableAnim } = useControls(controls)
  const model = useGLTF(modelUrl)
  const rigidBody = useRef(null)

  useFrame(state => {
    if (enableAnim && rigidBody.current) {
      const curPos = vec3(rigidBody.current.translation())
      curPos.set(curPos.x + 0.5, curPos.y + 2.6, curPos.z) // Temp
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
      <primitive object={model.scene}></primitive>
    </RigidBody>
  )
}
