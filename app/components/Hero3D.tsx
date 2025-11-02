'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AICofounder() {
  const { scene } = useGLTF('/models/base.glb');
  const ref = useRef<THREE.Object3D>(null);

  // Small rotation effect based on mouse movement
  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.8, 0.05);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.5, 0.05);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.8} floatIntensity={2}>
  <primitive ref={ref} object={scene} scale={1.3} position={[0, -1, 0]} />
</Float>

  );
}

export default function Hero3D() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen w-full bg-black text-white overflow-hidden px-6 md:px-16">
      {/* Left side: 3D model */}
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-full mt-[50px]">
 <Canvas camera={{ position: [0, 1, 3.5] }}>

          <ambientLight intensity={1} />
          <Environment preset="city" />
          <AICofounder />
        </Canvas>
      </div>

      {/* Right side: content */}
      <div className="flex flex-col justify-center md:w-1/2 mt-8 md:mt-0 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Meet Your <span className="text-blue-400">AI Co-Founder</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Turn your ideas into products overnight.  
          Your AI partner helps you brainstorm, build, and launch faster than ever.
        </p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-400/40">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
}
