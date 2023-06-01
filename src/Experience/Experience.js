import { useRef } from 'react'
import { Environment, OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { useControls } from "leva"
import Loader from './Loader.js'
import '../styles/experience.css'
import { World } from './World/World.js'
import { controls } from '../controls.js'


export default function Experience() {
  const orbitC = useRef()
  const { lightRadius, roomWidth, roomHeight, roomLength } = useControls(controls)

  return (
    <>
      <Canvas shadows>
        <World></World>

        <directionalLight castShadow position={[0, 5, 5]} intensity={.8} shadow-mapSize={[1024, 1024]} >
          <mesh>
            <sphereGeometry args={[lightRadius]}></sphereGeometry>
            <meshStandardMaterial color={'red'}></meshStandardMaterial>
          </mesh>
        </directionalLight>

        <ambientLight intensity={1} >
          <mesh>
            <sphereGeometry args={[lightRadius]}></sphereGeometry>
            <meshStandardMaterial color={'green'}></meshStandardMaterial>
          </mesh>
        </ambientLight>

        <Environment files='./envMap/brown_photostudio_02_1k.hdr' />

        <EffectComposer >
          <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8} />
        </EffectComposer>

        <OrbitControls ref={orbitC}
        // enableRotate={false} enableZoom={false} enablePan={false}
        />

        <PerspectiveCamera
          makeDefault
          position={[-roomWidth, roomHeight, roomLength]}
        ></PerspectiveCamera>

        <Preload all />
      </Canvas>

      {/* <Loader /> */}
    </>
  )
}