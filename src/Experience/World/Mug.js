import { RepeatWrapping } from 'three'
import { useTexture } from "@react-three/drei"


export const Mug = ({ position, rotation, textureUrl, radiusTop, radiusBottom, height }) => {
  const texture = useTexture(textureUrl)
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <cylinderGeometry args={[radiusTop, radiusBottom, height]}></cylinderGeometry>
      <meshPhongMaterial map={texture}></meshPhongMaterial>
    </mesh>
  )
}
