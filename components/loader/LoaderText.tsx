'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BlurText from './BlurText'

const LoaderText = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleAnimationComplete = () => {
        console.log('Text animation completed!')
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '1rem',
                position: 'relative',
                zIndex: 20,
            }}
        >
            {/* --- Circular Loader Background --- */}
            <div
                style={{
                    position: 'absolute',
                    width: '350px',
                    height: '350px',
                    borderRadius: '100%',
                    background:
                        'linear-gradient(165deg, rgba(255,255,255,1) 0%, rgb(220, 220, 220) 40%, rgb(170, 170, 170) 98%, rgb(10, 10, 10) 100%)',
                    zIndex: -1,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        content: '""',
                        width: '100%',
                        height: '100%',
                        borderRadius: '100%',
                        borderBottom: '0 solid rgba(255,255,255,0.02)',
                        boxShadow: `
                            0 -10px 20px 20px rgba(255,255,255,0.25) inset,
                            0 -5px 15px 10px rgba(255,255,255,0.31) inset,
                            0 -2px 5px rgba(255,255,255,0.5) inset,
                            0 -3px 2px rgba(255,255,255,0.73) inset,
                            0 2px 0px #ffffff,
                            0 2px 3px #ffffff,
                            0 5px 5px rgba(255,255,255,0.56),
                            0 10px 15px rgba(255,255,255,0.38),
                            0 10px 20px 20px rgba(255,255,255,0.25)
                        `,
                        filter: 'blur(3px)',
                        animation: 'rotate 2s linear infinite',
                    }}
                />
            </div>

            {/* --- Main Text Section --- */}
            <div
                style={{
                    textAlign: 'center',
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    justifyItems: 'center',
                }}
            >
                <div
                    className="text-center"
                    style={{
                        fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        color: '#1E90FF',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                        fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                    }}
                >
                    <BlurText
                        text="Creation Never Ends"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="mx-auto text-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8"
                    />
                </div>
            </div>

            {/* --- Floating Particles (client-only to prevent hydration errors) --- */}
            {isClient && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 10,
                    }}
                >
                    {Array.from({ length: 30 }).map((_, i) => {
                        const size = Math.random() * 6 + 2
                        const left = `${Math.random() * 100}%`
                        const top = `${Math.random() * 100}%`
                        const duration = 4 + Math.random() * 3
                        const delay = Math.random() * 3
                        const offsetX = Math.random() * 100 - 50

                        return (
                            <motion.div
                                key={i}
                                style={{
                                    position: 'absolute',
                                    borderRadius: '50%',
                                    background:
                                        'linear-gradient(to right, #1E90FF, #87CEEB)',
                                    width: size,
                                    height: size,
                                    left,
                                    top,
                                    boxShadow:
                                        '0 0 10px rgba(30, 144, 255, 0.6)',
                                }}
                                animate={{
                                    y: [-30, -150],
                                    x: [0, offsetX],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration,
                                    repeat: Infinity,
                                    delay,
                                    ease: 'easeOut',
                                }}
                            />
                        )
                    })}
                </div>
            )}

            {/* --- CSS Keyframes for Rotation --- */}
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    )
}

export default LoaderText
