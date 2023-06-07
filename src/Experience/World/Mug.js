import { useGLTF } from "@react-three/drei"


export const Mug = ({ modelUrl, position, rotation, scale }) => {
  const model = useGLTF(modelUrl)

  return (
    <primitive
      object={model.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    ></primitive>
  )
}
