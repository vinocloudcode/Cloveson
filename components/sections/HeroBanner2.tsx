'use client';
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Leaf, Globe, ShieldCheck } from 'lucide-react';

export default function HeroBanner2() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-32">
            {/* Decorative background blobs */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#39b54b]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#39b54b]/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

            <div
                ref={sectionRef}
                className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12"
            >
                {/* Left: Content */}
                <div className="flex-1 flex flex-col gap-8">
                    <h1
                        className={`text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight ${
                            inView ? 'animate-side-in-left delay-100' : 'opacity-0'
                        }`}
                    >
                        About Cloveson.
                    </h1>
                    <p
                        className={`text-lg md:text-xl text-gray-700 max-w-xl ${
                            inView ? 'animate-side-in-left delay-200' : 'opacity-0'
                        }`}
                    >
                        Cloveson is a leading provider of{' '}
                        <span className="text-[#39b54b] font-semibold">
                            eco-friendly medical waste liners
                        </span>{' '}
                        and industrial packaging solutions. With a commitment to
                        sustainability and innovation, we deliver high-quality, durable
                        products designed to meet the needs of healthcare, agriculture, and
                        manufacturing sectors worldwide.
                    </p>
                    <div
                        className={`flex gap-4 mt-4 ${
                            inView ? 'animate-side-in-left delay-300' : 'opacity-0'
                        }`}
                    >
                        <a
                            href="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#39b54b] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200 focus:ring-4 focus:ring-[#39b54b]/30"
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                    {/* Features */}
                    <div
                        className={`flex flex-wrap gap-6 mt-8 ${
                            inView ? 'animate-side-in-left delay-400' : 'opacity-0'
                        }`}
                    >
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <Globe className="w-6 h-6 text-[#39b54b] group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover:text-[#39b54b] transition-colors">
                                Global Reach
                            </span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <ShieldCheck className="w-6 h-6 text-[#39b54b] group-hover:scale-110 transition-transform" />
                            <span className="text-gray-700 group-hover:text-[#39b54b] transition-colors">
                                Eco-Friendly
                            </span>
                        </div>
                    </div>
                </div>
                {/* Right: Illustration */}
                <div
                    className={`flex-1 flex justify-center items-center ${
                        inView ? 'animate-side-in-right delay-500' : 'opacity-0'
                    }`}
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-[#39b54b]/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                            src="/ceo.jpg"
                            alt="Eco-friendly Medical Waste Liners"
                            className="w-[350px] md:w-[420px] rounded-3xl shadow-2xl border-4 border-[#39b54b]/20 hover:scale-105 transition-transform duration-300"
                        />
                        {/* Micro interaction: floating icon */}
                        <Leaf className="absolute -top-6 -right-6 w-10 h-10 text-[#39b54b] bg-white rounded-full shadow-lg p-2 animate-float" />
                    </div>
                </div>
            </div>
            {/* Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes side-in-left {
                    0% {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-side-in-left {
                    animation: side-in-left 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes side-in-right {
                    0% {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-side-in-right {
                    animation: side-in-right 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                .delay-100 {
                    animation-delay: 0.1s;
                }
                .delay-200 {
                    animation-delay: 0.2s;
                }
                .delay-300 {
                    animation-delay: 0.3s;
                }
                .delay-400 {
                    animation-delay: 0.4s;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-12px);
                    }
                }
                .animate-float {
                    animation: float 2.5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
