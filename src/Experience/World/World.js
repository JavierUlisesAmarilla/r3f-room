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
    tableUrl, tableColor,
    showMug, mugUrl,
    showCard, cardUrl, cardWidth, cardHeight, cardLength,
    showFrame, frameUrl, frameWidth, frameHeight, frameLength,
    showAxesHelper,
  } = useControls(controls)

  return (
    <>
      {/* Back wall */}
      <Wall
        textureUrl={wallUrl}
        position={[0, 0, -roomLength / 2]}
        rotation={[0, 0, 0]}
        width={roomWidth}
        height={roomHeight}
      ></Wall>

      {/* Right wall */}
      <Wall
        textureUrl={wallUrl}
        position={[roomWidth / 2, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        width={roomLength}
        height={roomHeight}
      ></Wall>

      {/* Bottom wall */}
      <Wall
        textureUrl={floorUrl}
        position={[0, -roomHeight / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        width={roomWidth}
        height={roomLength}
      ></Wall>

      {/* Table */}
      <Table
        modelUrl={tableUrl}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
        scale={[3, 3, 3]}
        color={tableColor}
      ></Table>

      {/* Mug */}
      {showMug &&
        <Mug
          modelUrl={mugUrl}
          position={[-1, -3.5, 0.2]}
          rotation={[0, 0, 0]}
          scale={[3, 3, 3]}
        ></Mug>
      }

      {/* Card */}
      {showCard &&
        <Card
          textureUrl={cardUrl}
          position={[0, 0, -roomLength / 2 + cardLength / 2]}
          rotation={[0, 0, 0]}
          width={cardWidth}
          height={cardHeight}
          length={cardLength}
        ></Card>
      }

      {/* Frame */}
      {showFrame &&
        <Frame
          textureUrl={frameUrl}
          position={[roomWidth / 2 - frameLength / 2, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
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
