import { useControls } from "leva"
import { Wall } from "./Wall"
import { controls } from "../../controls"
import { Mug } from "./Mug"


export const World = () => {
  const {
    roomWidth, roomHeight, roomLength, wallUrl, floorUrl,
    mugUrl, mugRadiusTop, mugRadiusBottom, mugHeight,
    showAxesHelper,
  } = useControls(controls)

  return (
    <>
      {/* Back wall */}
      <Wall
        position={[0, 0, -roomLength / 2]}
        rotation={[0, 0, 0]}
        textureUrl={wallUrl}
        width={roomWidth}
        height={roomHeight}
      ></Wall>

      {/* Right wall */}
      <Wall
        position={[roomWidth / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        textureUrl={wallUrl}
        width={roomLength}
        height={roomHeight}
      ></Wall>

      {/* Bottom wall */}
      <Wall
        position={[0, -roomHeight / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        textureUrl={floorUrl}
        width={roomWidth}
        height={roomLength}
      ></Wall>

      {/* Mug */}
      <Mug
        position={[0, -roomHeight / 2 + mugHeight / 2, -roomLength / 2 + mugRadiusTop]}
        rotation={[0, 0, 0]}
        textureUrl={mugUrl}
        radiusTop={mugRadiusTop}
        radiusBottom={mugRadiusBottom}
        height={mugHeight}
      ></Mug>

      {showAxesHelper && <axesHelper args={[10]}></axesHelper>}
    </>
  )
}
