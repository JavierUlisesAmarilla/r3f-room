import { useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { useControls } from 'leva'
import { controls } from '../controls'


export default function CameraAnim() {
  const { enableAnim } = useControls(controls)
  const vec = new Vector3()

  useFrame(state => {
    if (enableAnim) {
      state.camera.lookAt(0, 0, 0)
      state.camera.position.lerp(vec.set(-1, 0, 1), .005)
    }
  })
}
