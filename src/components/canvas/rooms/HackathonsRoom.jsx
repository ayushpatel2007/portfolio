import React, { useState } from 'react';
import { Text } from '@react-three/drei';
import { hackathons } from '../../../config/portfolioData';
import { useScene } from '../../../context/SceneContext';
import { useAudio } from '../../../context/AudioContext';

const HackathonsRoom = ({ active = true, position = [-14, 0, -48] }) => {
  const { setActiveModalProject } = useScene();
  const { playHoverSound, playClickSound } = useAudio();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  if (!active) return null;

  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      {/* Ambient Lighting */}
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 4, 0]} intensity={4.0} color="#ff0055" distance={16} />

      {/* Room Floor & Backdrop */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#12060b" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1, -7]}>
        <planeGeometry args={[14, 7]} />
        <meshStandardMaterial color="#1a0810" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Room Title Header */}
      <group position={[0, 3.2, -6.8]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[9.0, 0.9, 0.1]} />
          <meshStandardMaterial color="#240b15" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, 0.06]}>
          <boxGeometry args={[8.8, 0.04, 0.02]} />
          <meshBasicMaterial color="#ff0055" />
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
          COMPETITIVE HACKATHON ARENA
        </Text>
      </group>

      {/* 4 Interactive Hackathon Displays */}
      {hackathons.map((hackathon, idx) => {
        const xPos = -4.5 + idx * 3.0;
        const isHovered = hoveredIdx === idx;

        return (
          <group
            key={`hack-${hackathon.id}`}
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
              setActiveModalProject(hackathon);
            }}
          >
            {/* Pedestal Base */}
            <mesh position={[0, -1.2, 0]}>
              <boxGeometry args={[2.5, 1.4, 1.2]} />
              <meshStandardMaterial color={isHovered ? '#3d0a1b' : '#240813'} roughness={0.3} metalness={0.8} />
            </mesh>

            {/* Glowing Pedestal Ring */}
            <mesh position={[0, -0.48, 0]}>
              <boxGeometry args={[2.4, 0.05, 1.1]} />
              <meshBasicMaterial color={isHovered ? '#00f0ff' : '#ff0055'} />
            </mesh>

            {/* Terminal Screen */}
            <mesh position={[0, 0.7, 0]} rotation={[-0.1, 0, 0]}>
              <boxGeometry args={[2.5, 2.0, 0.15]} />
              <meshStandardMaterial color={isHovered ? '#360c1c' : '#1c0710'} metalness={0.9} roughness={0.2} />
            </mesh>

            {/* Inner Screen Display */}
            <mesh position={[0, 0.7, 0.09]} rotation={[-0.1, 0, 0]}>
              <planeGeometry args={[2.3, 1.8]} />
              <meshBasicMaterial color={isHovered ? '#2e0816' : '#12040a'} />
            </mesh>

            {/* Hackathon Event Title */}
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
              {hackathon.name}
            </Text>

            {/* Event Name Tag */}
            <Text
              position={[0, 0.95, 0.12]}
              fontSize={0.10}
              color="#ff6699"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2.1}
              textAlign="center"
            >
              🏆 {hackathon.hackathon}
            </Text>

            {/* Tagline */}
            <Text
              position={[0, 0.5, 0.12]}
              fontSize={0.09}
              color="#f0d0e0"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              maxWidth={2.1}
              textAlign="center"
            >
              {hackathon.tagline}
            </Text>

            {/* Action Badge */}
            <mesh position={[0, 0.05, 0.12]}>
              <boxGeometry args={[1.8, 0.3, 0.02]} />
              <meshBasicMaterial color={isHovered ? '#00f0ff' : '#ff0055'} />
            </mesh>
            <Text
              position={[0, 0.05, 0.14]}
              fontSize={0.09}
              color={isHovered ? '#000000' : '#ffffff'}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
            >
              VIEW BUILD & DETAILS
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export default HackathonsRoom;
