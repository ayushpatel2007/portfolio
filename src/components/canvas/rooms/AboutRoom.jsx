import React from 'react';
import { Text } from '@react-three/drei';
import { personalInfo, workExperience, education, skillCategories } from '../../../config/portfolioData';

const AboutRoom = ({ active = true, position = [-14, 0, -18] }) => {
  if (!active) return null;

  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      {/* Ambient Room Lighting */}
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 4, 0]} intensity={3.5} color="#00f0ff" distance={15} />

      {/* Room Floor & Walls */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#080c16" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 4.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#0a0f1c" roughness={0.5} />
      </mesh>
      <mesh position={[0, 1, -7]}>
        <planeGeometry args={[14, 7]} />
        <meshStandardMaterial color="#0b1020" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Main Holographic Header Display */}
      <group position={[0, 2.6, -6.8]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[9.5, 1.8, 0.1]} />
          <meshStandardMaterial color="#0e1424" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.85, 0.06]}>
          <boxGeometry args={[9.3, 0.05, 0.02]} />
          <meshBasicMaterial color="#00f0ff" />
        </mesh>
        <Text
          position={[0, 0.4, 0.08]}
          fontSize={0.42}
          color="#ffffff"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          {personalInfo.name}
        </Text>
        <Text
          position={[0, -0.1, 0.08]}
          fontSize={0.20}
          color="#00f0ff"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          {personalInfo.role} | {personalInfo.institution}
        </Text>
        <Text
          position={[0, -0.5, 0.08]}
          fontSize={0.13}
          color="#a0b0d0"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          {personalInfo.location}
        </Text>
      </group>

      {/* Bio Statement Board */}
      <group position={[0, 0.9, -6.8]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[9.5, 1.2, 0.1]} />
          <meshStandardMaterial color="#0a0e1a" metalness={0.8} roughness={0.3} />
        </mesh>
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.13}
          color="#d0e0ff"
          maxWidth={8.8}
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
          textAlign="center"
        >
          "{personalInfo.bio}"
        </Text>
      </group>

      {/* 3D Engineering Stat Pedestals */}
      {personalInfo.stats.map((stat, idx) => {
        const xPos = -3.2 + idx * 2.1;
        return (
          <group key={`stat-${idx}`} position={[xPos, -0.8, -6.8]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.9, 1.4, 0.1]} />
              <meshStandardMaterial color="#10182b" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0.65, 0.06]}>
              <boxGeometry args={[1.8, 0.04, 0.02]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
            <Text
              position={[0, 0.25, 0.08]}
              fontSize={0.38}
              color="#00f0ff"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
            >
              {stat.value}
            </Text>
            <Text
              position={[0, -0.3, 0.08]}
              fontSize={0.11}
              color="#ffffff"
              maxWidth={1.7}
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="center"
              anchorY="middle"
              textAlign="center"
            >
              {stat.label}
            </Text>
          </group>
        );
      })}

      {/* Experience & Education Wall Panels */}
      <group position={[-4.5, 0.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[8, 3.2, 0.1]} />
          <meshStandardMaterial color="#0c1220" metalness={0.8} roughness={0.3} />
        </mesh>
        <Text
          position={[0, 1.2, 0.08]}
          fontSize={0.22}
          color="#00f0ff"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          EXPERIENCE & LEADERSHIP
        </Text>
        {workExperience.map((exp, i) => (
          <group key={`exp-${i}`} position={[0, 0.5 - i * 0.75, 0.08]}>
            <Text
              position={[-3.6, 0, 0]}
              fontSize={0.13}
              color="#ffffff"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="left"
              anchorY="middle"
            >
              • {exp.role} — {exp.company}
            </Text>
            <Text
              position={[3.6, 0, 0]}
              fontSize={0.11}
              color="#00f0ff"
              font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
              anchorX="right"
              anchorY="middle"
            >
              {exp.period}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );
};

export default AboutRoom;
