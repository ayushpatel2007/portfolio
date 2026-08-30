import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const RUBIK_SCRIBBLE_URL = '/fonts/RubikScribble-Regular.ttf';
const CABIN_SKETCH_URL = '/fonts/CabinSketch-Regular.ttf';

const HeroText = ({ position = [0, 0.3, 0] }) => {
    const groupRef = useRef();
    const letterRefs = useRef([]);
    const taglineRefs = useRef([]);
    const { camera } = useThree();

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            const minWidth = 320;
            const maxWidth = 1200;
            const minScale = 0.65;
            const maxScale = 1.0;

            const clampedWidth = Math.max(minWidth, Math.min(maxWidth, width));
            const t = (clampedWidth - minWidth) / (maxWidth - minWidth);
            setScale(minScale + t * (maxScale - minScale));
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const splitAmount = useRef(0);
    const targetSplit = useRef(0);
    const floatY = useRef(0);
    const worldPosVec = useRef(new THREE.Vector3());

    // Letter positions for AYUSH PATEL split effect
    const letters = useMemo(() => [
        { char: 'A', baseX: -1.65, splitDir: -2.2 },
        { char: 'Y', baseX: -1.15, splitDir: -1.6 },
        { char: 'U', baseX: -0.65, splitDir: -1.0 },
        { char: 'S', baseX: -0.15, splitDir: -0.4 },
        { char: 'H', baseX: 0.35, splitDir: 0.4 },
        { char: ' ', baseX: 0.70, splitDir: 0.6 },
        { char: 'P', baseX: 1.05, splitDir: 1.0 },
        { char: 'A', baseX: 1.50, splitDir: 1.5 },
        { char: 'T', baseX: 1.95, splitDir: 2.0 },
        { char: 'E', baseX: 2.35, splitDir: 2.4 },
        { char: 'L', baseX: 2.75, splitDir: 2.8 },
    ], []);

    // Tagline words for split effect
    const taglineWords = useMemo(() => [
        { text: '<', baseX: -1.2, splitDir: -1.8 },
        { text: 'automation', baseX: -0.6, splitDir: -0.9 },
        { text: '&', baseX: 0.1, splitDir: 0 },
        { text: 'robotics', baseX: 0.7, splitDir: 0.9 },
        { text: '/>', baseX: 1.4, splitDir: 1.8 },
    ], []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const time = state.clock.elapsedTime;

        groupRef.current.getWorldPosition(worldPosVec.current);
        const distance = camera.position.z - worldPosVec.current.z;

        const SPLIT_START = 3;
        const SPLIT_PEAK = 0;
        const SPLIT_END = -2;
        const SPLIT_AMOUNT = 0.9;

        if (distance > SPLIT_PEAK && distance < SPLIT_START) {
            const t = (SPLIT_START - distance) / (SPLIT_START - SPLIT_PEAK);
            targetSplit.current = SPLIT_AMOUNT * (t * (2 - t));
        } else if (distance <= SPLIT_PEAK && distance > SPLIT_END) {
            const t = (distance - SPLIT_END) / (SPLIT_PEAK - SPLIT_END);
            targetSplit.current = SPLIT_AMOUNT * (t * (2 - t));
        } else {
            targetSplit.current = 0;
        }

        splitAmount.current = THREE.MathUtils.lerp(splitAmount.current, targetSplit.current, 0.08);

        letterRefs.current.forEach((ref, i) => {
            if (ref) {
                if (ref.material) ref.material.opacity = 1;
                ref.scale.setScalar(1);

                const letter = letters[i];
                if (letter) {
                    ref.position.x = letter.baseX + letter.splitDir * splitAmount.current;
                    ref.position.y = 0.2 + Math.sin(time * 0.7 + i * 0.3) * 0.015;
                    ref.rotation.z = Math.sin(time * 0.5 + i) * 0.02 * (1 + splitAmount.current);
                }
            }
        });

        taglineRefs.current.forEach((ref, i) => {
            if (ref) {
                if (ref.material) ref.material.opacity = 1;

                const word = taglineWords[i];
                if (word) {
                    ref.position.x = word.baseX + word.splitDir * splitAmount.current * 0.6;
                    ref.position.y = -0.45 + Math.sin(time * 0.6 + i * 0.3) * 0.008;
                }
            }
        });

        floatY.current = Math.sin(time * 0.5) * 0.02;
        groupRef.current.position.y = position[1] + floatY.current;
    });

    return (
        <group ref={groupRef} position={[-0.5, position[1], position[2]]} scale={[scale * 0.75, scale * 0.75, 1]}>
            {letters.map((letter, i) => (
                <Text
                    key={`let-${i}-${letter.char}`}
                    ref={(el) => (letterRefs.current[i] = el)}
                    position={[letter.baseX, 0.2, 0]}
                    fontSize={0.8}
                    font={RUBIK_SCRIBBLE_URL}
                    color="#ffffff"
                    outlineWidth={0.012}
                    outlineColor="#1a1a1a"
                    anchorX="center"
                    anchorY="middle"
                >
                    {letter.char}
                </Text>
            ))}

            {taglineWords.map((word, i) => (
                <Text
                    key={`word-${i}-${word.text}`}
                    ref={(el) => (taglineRefs.current[i] = el)}
                    position={[word.baseX, -0.55, 0.3]}
                    fontSize={0.16}
                    font={CABIN_SKETCH_URL}
                    color="#555555"
                    anchorX="center"
                    anchorY="middle"
                >
                    {word.text}
                </Text>
            ))}

            <SmallStar position={[-1.8, 0.55, 0]} scale={0.07} />
            <SmallStar position={[2.8, 0.45, 0]} scale={0.05} />
            <SmallStar position={[-1.5, -0.6, 0]} scale={0.04} />
            <SmallStar position={[2.5, -0.55, 0]} scale={0.035} />
        </group>
    );
};

const SmallStar = ({ position, scale = 0.1 }) => {
    return (
        <group position={position} scale={scale}>
            {[0, 1, 2, 3].map((i) => (
                <mesh key={i} rotation={[0, 0, (i * Math.PI) / 4]}>
                    <planeGeometry args={[1, 0.12]} />
                    <meshBasicMaterial color="#333" transparent opacity={0.6} side={2} />
                </mesh>
            ))}
        </group>
    );
};

export default HeroText;
