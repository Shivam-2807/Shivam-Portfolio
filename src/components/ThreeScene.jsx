import { Canvas } from "@react-three/fiber";
import Character from "./Character";

export default function ThreeScene({ animation }) {
  return (
    <div className="three-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.1, 7.8], fov: 31 }}>
        <ambientLight intensity={2.1} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} />
        <directionalLight position={[-4, 2, 3]} intensity={0.9} />
        <Character animation={animation} />
      </Canvas>

      <style>{`
        .three-scene {
          position: absolute;
          right: clamp(-28px, -2vw, 0px);
          bottom: -112px;
          width: clamp(430px, 44vw, 660px);
          height: clamp(640px, 86vh, 840px);
          z-index: 4;
          pointer-events: none;
        }

        .three-scene canvas {
          display: block;
        }

        @media (max-width: 1180px) {
          .three-scene {
            right: -20px;
            width: clamp(380px, 44vw, 540px);
            height: 700px;
          }
        }

        @media (max-width: 820px) {
          .three-scene {
            left: 50%;
            right: auto;
          bottom: -76px;
            width: min(94vw, 480px);
            height: 460px;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 560px) {
          .three-scene {
            width: min(100vw, 400px);
            height: 410px;
            bottom: -72px;
          }
        }
      `}</style>
    </div>
  );
}
