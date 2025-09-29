'use client'
import React from "react";
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF('/models/server_rack.glb');
    return (
        <>
            {/* Main model */}
            <primitive object={scene} scale={4} rotation={[0, -Math.PI/3, 0]} castShadow receiveShadow />

        </>
    );
}

export function ThreeLaptop() {
    return (
        <Canvas camera={{ position: [0, 0, -5], fov: 60 }} shadows>
            {/* Simple lights only */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 10, 10]} intensity={1} castShadow shadow-mapSize={[1024, 1024]} />

            <Model />
            <OrbitControls target={[0, 1, 0]} />
        </Canvas>
    );
}
