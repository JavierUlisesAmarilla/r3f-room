import { RepeatWrapping } from 'three'
import { Box, useTexture } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'


export const Wall = ({ textureUrl, position, rotation, width, height }) => {
  const texture = useTexture(textureUrl)
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <RigidBody
      colliders='hull'
      position={position}
      rotation={rotation}
      enabledRotations={[false, false, false]}
      enabledTranslations={[false, false, false]}
    >
      <Box
        args={[width, height, 0.01]}
        receiveShadow
      >
        <meshStandardMaterial map={texture} />
      </Box>
    </RigidBody>

  )
}
