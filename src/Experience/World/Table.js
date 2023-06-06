import { useGLTF } from "@react-three/drei"


export const Table = ({ position, rotation, scale }) => {
  const model = useGLTF('models/table.glb')

  return (
    <primitive
      object={model.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    ></primitive>
  )
}
