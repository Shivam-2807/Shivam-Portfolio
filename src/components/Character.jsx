import { useRef, useEffect, useMemo } from "react";
import { useFBX, useAnimations } from "@react-three/drei";

export default function Character({ animation = "greeting" }) {
  const group = useRef();

  // Character model
  const model = useFBX("/models/Remy.fbx");

  // Animation files
  const idle = useFBX("/models/Idle.fbx");
  const greeting = useFBX("/models/Greeting.fbx");
  const thinking = useFBX("/models/Thinking.fbx");
  const bow = useFBX("/models/Bow.fbx");

  // Create unique animation clips
  const animationClips = useMemo(() => {
  const clips = [];

  if (idle.animations?.[0]) {
    const clip = idle.animations[0].clone();
    clip.name = "Idle";
    clips.push(clip);
  }

  if (greeting.animations?.[0]) {
    const clip = greeting.animations[0].clone();
    clip.name = "Greeting";
    clips.push(clip);
  }

  if (thinking.animations?.[0]) {
    const clip = thinking.animations[0].clone();
    clip.name = "Thinking";
    clips.push(clip);
  }

  if (bow.animations?.[0]) {
    const clip = bow.animations[0].clone();
    clip.name = "Bow";
    clips.push(clip);
  }

  return clips;
}, [idle, greeting, thinking, bow]);

  const { actions } = useAnimations(animationClips, group);

  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    console.log("Animation prop:", animation);
    console.log("Available actions:", Object.keys(actions));
    console.log(actions);

    // Stop all animations
    Object.values(actions).forEach((action) => {
      action.stop();
    });

    let actionName;

switch (animation) {
  case "greeting":
    actionName = "Greeting";
    break;

  case "thinking":
    actionName = "Thinking";
    break;

  case "bow":
    actionName = "Bow";
    break;

  case "idle":
  default:
    actionName = "Idle";
}

    const action = actions[actionName];
console.log("Requested action:", actionName);
console.log("Actions object:", actions);
    if (action) {
      action.reset();
      action.fadeIn(0.3);
      action.play();

      console.log("Playing:", actionName);
    } else {
      console.error(
        `Animation '${actionName}' not found`,
        Object.keys(actions)
      );
    }

    return () => {
      if (action) action.fadeOut(0.3);
    };
  }, [animation, actions]);

  return (
    <group ref={group}>
      <primitive
        object={model}
        scale={0.01}
        position={[0, -1.5, 0]}
      />
    </group>
  );
}