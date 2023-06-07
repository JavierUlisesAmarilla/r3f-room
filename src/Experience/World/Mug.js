import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Mug = ({ modelUrl, position, rotation, scale }) => {
  const model = useGLTF(modelUrl)

  return (
    <RigidBody
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
