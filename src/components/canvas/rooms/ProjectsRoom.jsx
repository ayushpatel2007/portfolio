import React, { useState } from 'react';
import { Text } from '@react-three/drei';
import { personalProjects } from '../../../config/portfolioData';
import { useScene } from '../../../context/SceneContext';
import { useAudio } from '../../../context/AudioContext';

const ProjectsRoom = ({ active = true, position = [14, 0, -32] }) => {
  const { setActiveModalProject } = useScene();
  const { playHoverSound, playClickSound } = useAudio();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!active) return null;

  return (
    <group position={position} rotation={[0, -Math.PI / 2, 0]}>
      {/* Ambient Room Lighting */}
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 4, 0]} intensity={4.0} color="#7000ff" distance={16} />

      {/* Room Floor & Backdrop */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#080712" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1, -7]}>
        <planeGeometry args={[14, 7]} />
        <meshStandardMaterial color="#0b0a1a" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Room Title Header */}
      <group position={[0, 3.2, -6.8]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[9.0, 0.9, 0.1]} />
          <meshStandardMaterial color="#120e24" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, 0.06]}>
          <boxGeometry args={[8.8, 0.04, 0.02]} />
          <meshBasicMaterial color="#7000ff" />
        </mesh>
        <Text
          position={[0, 0.05, 0.08]}
          fontSize={0.36}
          color="#ffffff"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          PERSONAL PROJECTS SHOWCASE
        </Text>
      </group>

      {/* 4 Interactive 3D Project Terminals */}
      {personalProjects.map((project, idx) => {
        const xPos = -4.5 + idx * 3.0;
        const isHovered = hoveredIdx === idx;

        return (
          <group
            key={`proj-${project.id}`}
            position={[xPos, 0, -5]}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = 'pointer';
              setHoveredIdx(idx);
              playHoverSound();
            }}
            onPointerOut={() => {
              document.body.style.cursor = 'auto';
              setHoveredIdx(null);
            }}
            onClick={(e) => {
              e.stopPropagation();
              playClickSound();
              setActiveModalProject(project);
            }}
          >
            {/* Pedestal Base */}
            <mesh position={[0, -1.2, 0]}>
              <boxGeometry args={[2.5, 1.4, 1.2]} />
              <meshStandardMaterial color={isHovered ? '#20153d' : '#110d24'} roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Glowing Pedestal Top Ring */}
            <mesh position={[0, -0.48, 0]}>
              <boxGeometry args={[2.4, 0.05, 1.1]} />
              <meshBasicMaterial color={isHovered ? '#00f0ff' : '#7000ff'} />
            </mesh>

            {/* Interactive Screen Display */}
            <mesh position={[0, 0.7, 0]} rotation={[-0.1, 0, 0]}>
              <boxGeometry args={[2.5, 2.0, 0.15]} />
              <meshStandardMaterial color={isHovered ? '#1c1636' : '#0e0b1c'} metalness={0.9} roughness={0.2} />
            </mesh>

            {/* Screen Inner Display */}
            <mesh position={[0, 0.7, 0.09]} rotation={[-0.1, 0, 0]}>
              <planeGeometry args={[2.3, 1.8]} />
              <meshBasicMaterial color={isHovered ? '#16122e' : '#070512'} />
            </mesh>

            {/* Project Title Text */}
            <Text
              position={[0, 1.3, 0.12]}
              fontSize={0.16}
              color={isHovered ? '#00f0ff' : '#ffffff'}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2.1}
              textAlign="center"
            >
              {project.name}
            </Text>

            {/* Category Tag */}
            <Text
              position={[0, 0.95, 0.12]}
              fontSize={0.10}
              color="#b088ff"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2.1}
              textAlign="center"
            >
              [{project.category}]
            </Text>

            {/* Short Tagline */}
            <Text
              position={[0, 0.5, 0.12]}
              fontSize={0.09}
              color="#d0d0e8"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2.1}
              textAlign="center"
            >
              {project.tagline}
            </Text>

            {/* Action Badge */}
            <mesh position={[0, 0.05, 0.12]}>
              <boxGeometry args={[1.8, 0.3, 0.02]} />
              <meshBasicMaterial color={isHovered ? '#00f0ff' : '#7000ff'} />
            </mesh>
            <Text
              position={[0, 0.05, 0.14]}
              fontSize={0.09}
              color={isHovered ? '#000000' : '#ffffff'}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
            >
              INSPECT PROJECT & DEMO
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export default ProjectsRoom;
