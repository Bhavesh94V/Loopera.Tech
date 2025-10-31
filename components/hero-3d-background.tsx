"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

// ===============================
// Glowing Orb Component
// ===============================
const GlowingOrb = ({
  position,
  scale = 1,
  speed = 1,
  color = "#1e90ff",
}: { position: [number, number, number]; scale?: number; speed?: number; color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.4) * 2.5
    meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.3) * 2
    meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.25) * 1.5
    meshRef.current.rotation.x += 0.001 * speed
    meshRef.current.rotation.y += 0.002 * speed
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.35}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  )
}

// ===============================
// Flowing Wireframe Mesh
// ===============================
const FlowingMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(time * 0.08) * 0.4
    meshRef.current.rotation.y = time * 0.03
    meshRef.current.rotation.z = Math.cos(time * 0.06) * 0.2
    meshRef.current.position.z = Math.sin(time * 0.1) * 3
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -12]}>
      <icosahedronGeometry args={[10, 4]} />
      <meshPhongMaterial
        color="#1e90ff"
        wireframe
        transparent
        opacity={0.08}
        emissive="#1e90ff"
        emissiveIntensity={0.15}
      />
    </mesh>
  )
}

// ===============================
// Rotating Tech Rings
// ===============================
const TechRing = ({
  position,
  rotation,
  speed = 1,
}: { position: [number, number, number]; rotation: [number, number, number]; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.0005 * speed
    meshRef.current.rotation.y += 0.0008 * speed
    meshRef.current.rotation.z += 0.0003 * speed
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={[3, 0.15, 16, 100]} />
      <meshStandardMaterial
        color="#1e90ff"
        emissive="#1e90ff"
        emissiveIntensity={0.2}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

// ===============================
// Scene Composition
// ===============================
const Scene = () => {
  return (
    <>
      {/* Lights */}
      <ambientLight intensity={0.7} color="#ffffff" />
      <directionalLight position={[15, 15, 15]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-15, -15, -15]} intensity={0.2} color="#1e90ff" />
      <pointLight position={[0, 0, 8]} intensity={0.6} color="#1e90ff" />

      {/* Background mesh */}
      <FlowingMesh />

      {/* Tech rings */}
      <TechRing position={[0, 0, -15]} rotation={[0.5, 0.5, 0]} speed={0.6} />
      <TechRing position={[0, 0, -15]} rotation={[0.3, 0.8, 0.2]} speed={0.8} />

      {/* Glowing orbs */}
      <GlowingOrb position={[-10, 6, -18]} scale={1.4} speed={0.7} color="#1e90ff" />
      <GlowingOrb position={[10, -6, -18]} scale={1.1} speed={1.2} color="#00d4ff" />
      <GlowingOrb position={[0, 0, -22]} scale={1.6} speed={0.5} color="#1e90ff" />
      <GlowingOrb position={[-6, -8, -16]} scale={0.9} speed={0.9} color="#00d4ff" />
      <GlowingOrb position={[8, 8, -16]} scale={1.2} speed={1.1} color="#1e90ff" />
    </>
  )
}

// ===============================
// Main Component (Safe for SSR)
// ===============================
export const Hero3DBackground = () => {
  const [pixelRatio, setPixelRatio] = useState(1)

  // ✅ Safe browser-only access for window.devicePixelRatio
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
          pixelRatio, // ✅ dynamic, safe value
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
