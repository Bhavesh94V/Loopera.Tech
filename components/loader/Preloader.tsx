'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LoaderText from './LoaderText';

// Lazy load Three.js background to avoid hydration lag
const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
    ssr: false,
    loading: () => null,
});

interface PreloaderProps {
    onComplete?: () => void;
    duration?: number; // total duration in ms
}

const Preloader = ({ onComplete, duration = 2000 }: PreloaderProps) => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFade(true), duration - 500);
        const completeTimer = setTimeout(() => {
            onComplete?.();
        }, duration);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [duration, onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999,
                background: 'radial-gradient(#CECECE, #fff)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                opacity: fade ? 0 : 1,
                transition: 'opacity 0.8s ease',
                willChange: 'opacity, transform',
                transform: 'translateZ(0)',
            }}
        >
            {/* 3D Background (loads async) */}
            <ThreeBackground />

            {/* Main Loader Content */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <LoaderText />
            </div>

            {/* Ambient + Vignette overlays */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    background:
                        'linear-gradient(135deg, rgba(30,144,255,0.05) 0%, transparent 50%, rgba(65,105,225,0.03) 100%)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    background:
                        'radial-gradient(circle at center, transparent 0%, transparent 70%, rgba(255,255,255,0.1) 100%)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default Preloader;
