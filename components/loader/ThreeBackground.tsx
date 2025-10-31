'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<THREE.Scene>()
    const rendererRef = useRef<THREE.WebGLRenderer>()
    const animationIdRef = useRef<number>()

    useEffect(() => {
        // Only run in browser
        if (typeof window === 'undefined' || !mountRef.current) return

        // WebGL support check
        const isWebGLAvailable = () => {
            try {
                const canvas = document.createElement('canvas')
                return !!(
                    window.WebGLRenderingContext &&
                    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
                )
            } catch {
                return false
            }
        }

        if (!isWebGLAvailable()) {
            console.error('WebGL not supported on this device or browser.')
            return
        }

        // Scene setup
        const scene = new THREE.Scene()
        scene.fog = new THREE.Fog(0xffffff, 10, 50)
        sceneRef.current = scene

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0, 0, 8)

        // Renderer setup (GPU-safe)
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        })

        try {
            renderer.setSize(window.innerWidth, window.innerHeight)
        } catch (err) {
            console.error('Renderer initialization failed:', err)
            return
        }

        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        rendererRef.current = renderer
        mountRef.current.appendChild(renderer.domElement)

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x1e90ff, 0.3)
        const directionalLight = new THREE.DirectionalLight(0x4169e1, 0.8)
        directionalLight.position.set(10, 10, 5)
        directionalLight.castShadow = true
        const pointLight1 = new THREE.PointLight(0x87ceeb, 1, 20)
        pointLight1.position.set(-10, 5, 5)
        const pointLight2 = new THREE.PointLight(0x6495ed, 1, 20)
        pointLight2.position.set(10, -5, 5)
        scene.add(ambientLight, directionalLight, pointLight1, pointLight2)

        // Particle setup
        const particles = new THREE.Group()
        const geometries = [
            new THREE.IcosahedronGeometry(0.15, 0),
            new THREE.OctahedronGeometry(0.12),
            new THREE.TetrahedronGeometry(0.18),
            new THREE.DodecahedronGeometry(0.1),
            new THREE.SphereGeometry(0.08, 12, 8),
            new THREE.BoxGeometry(0.15, 0.15, 0.15),
        ]

        const materials = [
            new THREE.MeshPhongMaterial({
                color: 0x1e90ff,
                transparent: true,
                opacity: 0.7,
                shininess: 100,
            }),
            new THREE.MeshPhongMaterial({
                color: 0x4169e1,
                transparent: true,
                opacity: 0.6,
                wireframe: true,
            }),
            new THREE.MeshPhongMaterial({
                color: 0x87ceeb,
                transparent: true,
                opacity: 0.8,
                shininess: 80,
            }),
            new THREE.MeshPhongMaterial({
                color: 0x6495ed,
                transparent: true,
                opacity: 0.5,
                wireframe: true,
            }),
        ]

        for (let i = 0; i < 80; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)]
            const material = materials[Math.floor(Math.random() * materials.length)]
            const particle = new THREE.Mesh(geometry, material)
            particle.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 25
            )
            particle.rotation.set(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            )
            particle.castShadow = true
            particle.receiveShadow = true
            particle.userData = {
                initialPosition: particle.position.clone(),
                floatSpeed: 0.005 + Math.random() * 0.015,
                rotationSpeed: 0.005 + Math.random() * 0.02,
                amplitude: 1 + Math.random() * 2,
                phaseX: Math.random() * Math.PI * 2,
                phaseY: Math.random() * Math.PI * 2,
                phaseZ: Math.random() * Math.PI * 2,
                orbitRadius: 2 + Math.random() * 5,
                orbitSpeed: 0.001 + Math.random() * 0.003,
            }
            particles.add(particle)
        }
        scene.add(particles)

        // Wave geometry
        const waveGeometry = new THREE.PlaneGeometry(40, 40, 50, 50)
        const waveMaterial = new THREE.MeshPhongMaterial({
            color: 0x1e90ff,
            transparent: true,
            opacity: 0.1,
            wireframe: true,
            side: THREE.DoubleSide,
        })
        const wave = new THREE.Mesh(waveGeometry, waveMaterial)
        wave.rotation.x = -Math.PI / 2
        wave.position.y = -8
        scene.add(wave)

        // Connection lines
        const lineGeometry = new THREE.BufferGeometry()
        const positions = new Float32Array(600)
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x1e90ff,
            transparent: true,
            opacity: 0.2,
        })
        const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
        scene.add(lines)

        // Animation loop
        let time = 0
        const animate = () => {
            animationIdRef.current = requestAnimationFrame(animate)
            time += 0.01

            particles.children.forEach((particle, index) => {
                const mesh = particle as THREE.Mesh
                const userData = mesh.userData
                const orbitX =
                    Math.cos(time * userData.orbitSpeed + userData.phaseX) * userData.orbitRadius
                const orbitZ =
                    Math.sin(time * userData.orbitSpeed + userData.phaseZ) * userData.orbitRadius

                mesh.position.x =
                    userData.initialPosition.x +
                    orbitX +
                    Math.sin(time * userData.floatSpeed + userData.phaseX) * userData.amplitude
                mesh.position.y =
                    userData.initialPosition.y +
                    Math.sin(time * userData.floatSpeed * 0.7 + userData.phaseY) *
                    userData.amplitude *
                    1.5
                mesh.position.z =
                    userData.initialPosition.z +
                    orbitZ +
                    Math.cos(time * userData.floatSpeed + userData.phaseZ) * userData.amplitude

                mesh.rotation.x += userData.rotationSpeed
                mesh.rotation.y += userData.rotationSpeed * 0.8
                mesh.rotation.z += userData.rotationSpeed * 0.6

                const scale = 1 + Math.sin(time * 2 + index) * 0.2
                mesh.scale.setScalar(scale)
            })

            const wavePositions = wave.geometry.attributes.position
            for (let i = 0; i < wavePositions.count; i++) {
                const x = wavePositions.getX(i)
                const z = wavePositions.getZ(i)
                const y = Math.sin(x * 0.3 + time * 2) * Math.cos(z * 0.2 + time * 1.5) * 2
                wavePositions.setY(i, y)
            }
            wavePositions.needsUpdate = true

            const linePositions = lines.geometry.attributes.position.array as Float32Array
            let lineIndex = 0
            for (let i = 0; i < particles.children.length && lineIndex < linePositions.length - 6; i += 3) {
                const p1 = particles.children[i] as THREE.Mesh
                const p2 = particles.children[(i + 1) % particles.children.length] as THREE.Mesh
                const dist = p1.position.distanceTo(p2.position)
                if (dist < 8) {
                    linePositions.set([
                        p1.position.x,
                        p1.position.y,
                        p1.position.z,
                        p2.position.x,
                        p2.position.y,
                        p2.position.z,
                    ], lineIndex)
                    lineIndex += 6
                }
            }
            lines.geometry.attributes.position.needsUpdate = true

            pointLight1.position.x = Math.cos(time * 0.5) * 15
            pointLight1.position.z = Math.sin(time * 0.5) * 15
            pointLight2.position.x = Math.sin(time * 0.3) * 12
            pointLight2.position.z = Math.cos(time * 0.3) * 12

            camera.position.x = Math.sin(time * 0.1) * 2
            camera.position.y = Math.cos(time * 0.15) * 1
            camera.lookAt(0, 0, 0)

            renderer.render(scene, camera)
        }

        // Delay first frame to avoid hydration mismatch
        requestAnimationFrame(animate)

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize)
            if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
            if (rendererRef.current) {
                rendererRef.current.dispose()
                rendererRef.current.forceContextLoss()
            }
            if (mountRef.current && renderer.domElement)
                mountRef.current.removeChild(renderer.domElement)

            particles.children.forEach((child) => {
                const mesh = child as THREE.Mesh
                mesh.geometry.dispose()
                if (mesh.material instanceof THREE.Material) mesh.material.dispose()
            })
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -10,
                background:
                    'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(241,245,249,1) 100%)',
            }}
        />
    )
}

export default ThreeBackground
