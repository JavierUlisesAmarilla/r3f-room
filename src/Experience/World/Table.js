import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Table = ({ modelUrl, position, rotation, scale, color }) => {
  const { nodes } = useGLTF(modelUrl)

  if (nodes['tableCoffee(Clone)']) {
    nodes['tableCoffee(Clone)'].material.color.set(color)
  }

  return (
    <RigidBody
      colliders='hull'
      position={position}
      rotation={rotation}
      scale={scale}
    // enabledRotations={[false, false, false]}
    // enabledTranslations={[false, false, false]}
    >
      <mesh
        geometry={nodes['tableCoffee(Clone)'].geometry}
        material={nodes['tableCoffee(Clone)'].material}
        color={color}
        castShadow
      ></mesh>
    </RigidBody>
  )
}
