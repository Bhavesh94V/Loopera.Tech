'use client'

import { motion } from 'framer-motion'
import {
    SiReact,
    SiNodedotjs,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiDocker,
    SiKubernetes,
    SiAmazon,
    SiMongodb,
    SiPostgresql,
    SiGraphql,
    SiFirebase
} from 'react-icons/si'

export default function TechMarquee() {
    const logos = [
        { node: <SiReact color="#61DAFB" />, title: 'React', href: 'https://react.dev' },
        { node: <SiNodedotjs color="#68A063" />, title: 'Node.js', href: 'https://nodejs.org' },
        { node: <SiTypescript color="#3178C6" />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
        { node: <SiTailwindcss color="#38BDF8" />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
        { node: <SiPython color="#3776AB" />, title: 'Python', href: 'https://www.python.org' },
        { node: <SiDocker color="#2496ED" />, title: 'Docker', href: 'https://www.docker.com' },
        { node: <SiKubernetes color="#326CE5" />, title: 'Kubernetes', href: 'https://kubernetes.io' },
        { node: <SiAmazon color="#FF9900" />, title: 'AWS', href: 'https://aws.amazon.com' },
        { node: <SiMongodb color="#47A248" />, title: 'MongoDB', href: 'https://www.mongodb.com' },
        { node: <SiPostgresql color="#336791" />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },
        { node: <SiGraphql color="#E10098" />, title: 'GraphQL', href: 'https://graphql.org' },
        { node: <SiFirebase color="#FFCA28" />, title: 'Firebase', href: 'https://firebase.google.com' }
    ]

    return (
        <section className="py-5 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-12 text-left md:text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Powered by <span className="text-[#1e90ff]">Modern Technologies</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto md:text-center text-left">
                        We leverage industry-leading tools to build fast, scalable, and future-ready solutions.
                    </p>
                </motion.div>



                {/* Marquee Wrapper */}
                <div className="relative overflow-hidden py-1">
                    <motion.div
                        className="flex gap-16 items-center whitespace-nowrap"
                        animate={{
                            x: ['0%', '-100%']
                        }}
                        transition={{
                            ease: 'linear',
                            duration: 25,
                            repeat: Infinity
                        }}
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <a
                                key={i}
                                href={logo.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center min-w-[120px] hover:scale-110 transition-transform duration-300"
                            >
                                <div className="text-5xl mb-2">{logo.node}</div>
                                <span className="text-sm text-muted-foreground font-medium">{logo.title}</span>
                            </a>
                        ))}
                    </motion.div>

                    {/* Gradient fade edges */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
