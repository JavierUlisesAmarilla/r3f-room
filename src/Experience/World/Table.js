import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Table = ({ modelUrl, position, rotation, scale, color }) => {
  const { nodes } = useGLTF(modelUrl)

  Object.keys(nodes).forEach(nodeKey => {
    if (nodes[nodeKey]) {
      nodes[nodeKey].material.color.set(color)
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
      {Object.keys(nodes).map((nodeKey, index) =>
        <mesh
          key={index}
          geometry={nodes[nodeKey].geometry}
          material={nodes[nodeKey].material}
          color={color}
          castShadow
        ></mesh>
      )}
    </RigidBody>
  )
}
