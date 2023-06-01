import { RepeatWrapping } from 'three'
import { useTexture } from "@react-three/drei"


export const Wall = ({ position, rotation, textureUrl, width, height }) => {
  const texture = useTexture(textureUrl)
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <planeGeometry args={[width, height]}></planeGeometry>
      <meshPhongMaterial map={texture}></meshPhongMaterial>
    </mesh>
  )
}
