import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Table = ({ modelUrl, position, rotation, scale, color }) => {
  const model = useGLTF(modelUrl)

  model.scene.traverse(child => {
    if (child.isMesh) {
      child.material.color.set(color)
    }
  })

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
