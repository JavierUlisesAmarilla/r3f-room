import { useControls } from "leva"
import { Wall } from "./Wall"
import { controls } from "../../controls"


export const World = () => {
  const { roomWidth, roomHeight, roomLength } = useControls(controls)

  return (
    <>
      {/* Back wall */}
      <Wall
        position={[0, 0, -roomLength / 2]}
        rotation={[0, 0, 0]}
        textureUrl={'textures/walls/(7).png'}
        width={roomWidth}
        height={roomHeight}
      ></Wall>

      {/* Right wall */}
      <Wall
        position={[roomWidth / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        textureUrl={'textures/walls/(7).png'}
        width={roomLength}
        height={roomHeight}
      ></Wall>

      {/* Bottom wall */}
      <Wall
        position={[0, -roomHeight / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        textureUrl={'textures/walls/(5).png'}
        width={roomWidth}
        height={roomLength}
      ></Wall>

      <axesHelper args={[10]}></axesHelper>
    </>
  )
}
