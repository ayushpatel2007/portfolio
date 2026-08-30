import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import AboutRoom from './AboutRoom';
import ProjectsRoom from './ProjectsRoom';
import HackathonsRoom from './HackathonsRoom';
import ContactRoom from './ContactRoom';

const RoomWarmup = ({ onWarmupComplete }) => {
  const { gl, scene, camera } = useThree();

  useEffect(() => {
    // Compile all shaders for off-screen room meshes
    gl.compile(scene, camera);
    const timer = setTimeout(() => {
      if (onWarmupComplete) onWarmupComplete();
    }, 150);

    return () => clearTimeout(timer);
  }, [gl, scene, camera, onWarmupComplete]);

  return (
    <group position={[0, -500, 0]}>
      <AboutRoom active={false} />
      <ProjectsRoom active={false} />
      <HackathonsRoom active={false} />
      <ContactRoom active={false} />
    </group>
  );
};

export default RoomWarmup;
