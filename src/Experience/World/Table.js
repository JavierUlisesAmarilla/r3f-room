import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Table = ({ modelUrl, position, rotation, scale, color }) => {
  const { nodes } = useGLTF(modelUrl)
  const meshes = []

  color && Object.keys(nodes).forEach(nodeKey => {
    if (nodes[nodeKey]?.isMesh) {
      nodes[nodeKey].material.color.set(color)
      meshes.push(nodes[nodeKey])
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
      {meshes.map((mesh, index) =>
        <mesh
          key={index}
          geometry={mesh.geometry}
          material={mesh.material}
          receiveShadow
          castShadow
        ></mesh>
      )}
    </RigidBody>
  )
}
