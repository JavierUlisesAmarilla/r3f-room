import { useControls } from "leva"
import { Wall } from "./Wall"
import { controls } from "../../controls"
import { Mug } from "./Mug"
import { Card } from "./Card"
import { Frame } from "./Frame"
import { Table } from "./Table"


export const World = () => {
  const {
    roomWidth, roomHeight, roomLength, wallUrl, floorUrl,
    showMug, mugUrl, mugRadiusTop, mugRadiusBottom, mugHeight,
    showCard, cardUrl, cardWidth, cardHeight, cardLength,
    showFrame, frameUrl, frameWidth, frameHeight, frameLength,
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

      {/* Table */}
      <Table
        position={[0, -2.5, 0]}
        rotation={[0, 0, 0]}
        scale={[3,3,3]}
      ></Table>

      {/* Mug */}
      {showMug &&
        <Mug
          position={[0, -1.7, 0]}
          rotation={[0, 0, 0]}
          textureUrl={mugUrl}
          radiusTop={mugRadiusTop}
          radiusBottom={mugRadiusBottom}
          height={mugHeight}
        ></Mug>
      }

      {/* Card */}
      {showCard &&
        <Card
          position={[0, 0, -roomLength / 2 + cardLength / 2]}
          rotation={[0, 0, 0]}
          textureUrl={cardUrl}
          width={cardWidth}
          height={cardHeight}
          length={cardLength}
        ></Card>
      }

      {/* Frame */}
      {showFrame &&
        <Frame
          position={[roomWidth / 2 - frameLength / 2, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          textureUrl={frameUrl}
          width={frameWidth}
          height={frameHeight}
          length={frameLength}
        ></Frame>
      }

      {showAxesHelper &&
        <axesHelper args={[10]}></axesHelper>
      }
    </>
  )
}
