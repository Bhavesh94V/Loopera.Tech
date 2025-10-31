
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Preloader from '@/components/loader/Preloader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();

    // Handle initial load
    useEffect(() => {
        const splash = document.getElementById('preload-splash');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 400);
        }

        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Handle route changes
    useEffect(() => {
        if (!pathname) return;
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div
                key={pathname}
                style={{
                    opacity: loading ? 0 : 1,
                    transition: 'opacity 0.8s ease',
                    pointerEvents: loading ? 'none' : 'auto',
                }}
            >
                {!loading && children}
            </div>
        </>
    );
}
