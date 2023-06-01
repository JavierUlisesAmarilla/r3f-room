import { RepeatWrapping } from 'three'
import { useTexture } from "@react-three/drei"


export const Card = ({ position, rotation, textureUrl, width, height, length }) => {
  const texture = useTexture(textureUrl)
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={[width, height, length]}></boxGeometry>
      <meshPhongMaterial map={texture}></meshPhongMaterial>
    </mesh>
  )
}
