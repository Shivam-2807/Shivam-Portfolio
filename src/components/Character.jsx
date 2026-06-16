import { useEffect, useMemo, useRef } from "react";
import { useAnimations, useFBX } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const clipNames = {
  idle: "Idle",
  greeting: "Greeting",
  thinking: "Thinking",
  bow: "Bow",
};

const desktopPoses = {
  idle: { position: [0, -2.12, 0], rotation: [0, -0.08, 0], scale: 0.0108 },
  greeting: { position: [0, -2.08, 0], rotation: [0, -0.04, 0], scale: 0.011 },
  thinking: { position: [0, -2.12, 0], rotation: [0, 0.08, 0], scale: 0.0108 },
  bow: { position: [0, -2.18, 0], rotation: [0, -0.02, 0], scale: 0.0108 },
};

const tabletPoses = {
  idle: { position: [0, -2.02, 0], rotation: [0, 0, 0], scale: 0.0096 },
  greeting: { position: [0, -1.98, 0], rotation: [0, 0, 0], scale: 0.0098 },
  thinking: { position: [0, -2.02, 0], rotation: [0, 0.06, 0], scale: 0.0096 },
  bow: { position: [0, -2.08, 0], rotation: [0, 0, 0], scale: 0.0096 },
};

const mobilePoses = {
  idle: { position: [0, -1.92, 0], rotation: [0, 0, 0], scale: 0.0087 },
  greeting: { position: [0, -1.88, 0], rotation: [0, 0, 0], scale: 0.0089 },
  thinking: { position: [0, -1.92, 0], rotation: [0, 0.05, 0], scale: 0.0087 },
  bow: { position: [0, -1.98, 0], rotation: [0, 0, 0], scale: 0.0087 },
};

function getPose(animation, width) {
  const poses = width <= 560 ? mobilePoses : width <= 900 ? tabletPoses : desktopPoses;
  return poses[animation] || poses.idle;
}

export default function Character({ animation = "idle" }) {
  const group = useRef();
  const { size } = useThree();
  const initialPose = getPose(animation, size.width);

  const model = useFBX("/models/Remy.fbx");
  const idle = useFBX("/models/Idle.fbx");
  const greeting = useFBX("/models/Greeting.fbx");
  const thinking = useFBX("/models/Thinking.fbx");
  const bow = useFBX("/models/Bow.fbx");

  const animationClips = useMemo(() => {
    return [
      [idle, "Idle"],
      [greeting, "Greeting"],
      [thinking, "Thinking"],
      [bow, "Bow"],
    ].flatMap(([file, name]) => {
      if (!file?.animations?.[0]) return [];
      const clip = file.animations[0].clone();
      clip.name = name;
      return [clip];
    });
  }, [idle, greeting, thinking, bow]);

  const { actions } = useAnimations(animationClips, model);

  useEffect(() => {
    const actionName = clipNames[animation] || "Idle";
    const currentAction = actions[actionName];

    if (currentAction) {
      currentAction.reset().fadeIn(0.24).play();
    }

    return () => {
      if (currentAction) currentAction.fadeOut(0.24);
    };
  }, [animation, actions]);

  useFrame((_, delta) => {
    if (!group.current) return;

    const pose = getPose(animation, size.width);
    const targetPosition = new THREE.Vector3(...pose.position);
    const targetRotation = new THREE.Euler(...pose.rotation);
    const speed = 1 - Math.pow(0.001, delta);

    group.current.position.lerp(targetPosition, speed);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetRotation.x,
      speed,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetRotation.y,
      speed,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      targetRotation.z,
      speed,
    );
    const nextScale = THREE.MathUtils.lerp(
      group.current.scale.x,
      pose.scale,
      speed,
    );
    group.current.scale.setScalar(nextScale);
  });

  return (
    <group
      ref={group}
      position={initialPose.position}
      rotation={initialPose.rotation}
      scale={initialPose.scale}
    >
      <primitive object={model} />
    </group>
  );
}
