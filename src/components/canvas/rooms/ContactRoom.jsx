import React from 'react';
import { Text } from '@react-three/drei';
import { contactInfo } from '../../../config/portfolioData';

const ContactRoom = ({ active = true, position = [14, 0, -62] }) => {
  if (!active) return null;

  return (
    <group position={position} rotation={[0, -Math.PI / 2, 0]}>
      {/* Ambient Lighting */}
      <ambientLight intensity={1.5} />
      <pointLight position={[0, 4, 0]} intensity={4.0} color="#00ff88" distance={16} />

      {/* Room Floor & Backdrop */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#05120a" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0, 1, -7]}>
        <planeGeometry args={[14, 7]} />
        <meshStandardMaterial color="#071a0e" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Title Header */}
      <group position={[0, 3.2, -6.8]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[9.0, 0.9, 0.1]} />
          <meshStandardMaterial color="#0a2414" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.4, 0.06]}>
          <boxGeometry args={[8.8, 0.04, 0.02]} />
          <meshBasicMaterial color="#00ff88" />
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
          CONTACT & COMMAND TERMINAL
        </Text>
      </group>

      {/* Central Interactive Terminal Board */}
      <group position={[0, 0.6, -6.5]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[8.5, 3.8, 0.12]} />
          <meshStandardMaterial color="#0d2e1b" metalness={0.8} roughness={0.3} />
        </mesh>

        <Text
          position={[0, 1.4, 0.08]}
          fontSize={0.22}
          color="#00ff88"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          DIRECT COMMUNICATION & RESUME ACCESS
        </Text>

        {/* Phone Call Display */}
        <Text
          position={[0, 0.9, 0.08]}
          fontSize={0.16}
          color="#00ff88"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          📞 PHONE: {contactInfo.phone}
        </Text>

        {/* Email Display */}
        <Text
          position={[0, 0.4, 0.08]}
          fontSize={0.16}
          color="#ffffff"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          ✉ EMAIL: {contactInfo.email}
        </Text>

        {/* GitHub Link Display */}
        <Text
          position={[0, -0.1, 0.08]}
          fontSize={0.16}
          color="#00ff88"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          🌐 GITHUB: github.com/ayushpatel2007
        </Text>

        {/* LinkedIn Link Display */}
        <Text
          position={[0, -0.6, 0.08]}
          fontSize={0.16}
          color="#00ff88"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          🔗 LINKEDIN: linkedin.com/in/ayushpatel2037
        </Text>

        {/* Instructions Badge */}
        <Text
          position={[0, -1.1, 0.08]}
          fontSize={0.12}
          color="#a0ffd0"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
          anchorX="center"
          anchorY="middle"
        >
          [ USE THE HUD OVERLAY CONTROLS TO DOWNLOAD RESUME & SEND DIRECT MESSAGES ]
        </Text>
      </group>
    </group>
  );
};

export default ContactRoom;
