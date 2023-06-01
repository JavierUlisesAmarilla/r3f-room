import { useProgress } from "@react-three/drei"
import { useRef, useEffect } from "react"
import { ThreeCircles } from "react-loader-spinner"
import gsap from 'gsap'


export default function Loader() {
  const container = useRef()
  const { active, progress, error, item, loaded, total } = useProgress()

  useEffect(() => {
    if (progress === 100) {
      gsap.timeline()
        .to('.loaderContainer div svg', {
          delay: 1,
          height: 3000,
          width: 3000,
          opacity: 0,
          duration: 4
        })
        .to('.loaderContainer', {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            container.current.style.display = 'none'
          }
        }, 1.7)
    }
  }, [progress]);

  return (
    <div ref={container} className="loaderContainer">
      <ThreeCircles
        height="100"
        width="100"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#a6e9f4"
        innerCircleColor="#ffffff"
        middleCircleColor="#a6e9f4"
      />
    </div>
  )
}
