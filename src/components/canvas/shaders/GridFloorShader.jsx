import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    vUv = uv;
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform vec3 uGridColor;
  varying vec2 vUv;
  varying vec3 vWorldPosition;

  void main() {
    // World space grid calculations
    vec2 coord = vWorldPosition.xz * 0.5;
    vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
    float line = min(grid.x, grid.y);
    float gridIntensity = 1.0 - min(line, 1.0);

    // Dynamic wave effect along corridor Z
    float wave = sin(vWorldPosition.z * 0.2 - uTime * 2.0) * 0.5 + 0.5;
    vec3 finalGrid = mix(uGridColor, uGridColor * 1.8, wave);

    // Distance fading
    float dist = length(vWorldPosition.xz);
    float fade = smoothstep(60.0, 10.0, dist);

    vec3 color = mix(uColor, finalGrid, gridIntensity * 0.4);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const GridFloorMaterial = ({ color = '#090a10', gridColor = '#00f0ff' }) => {
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uGridColor: { value: new THREE.Color(gridColor) }
  }), [color, gridColor]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <shaderMaterial
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
    />
  );
};

export default GridFloorMaterial;
