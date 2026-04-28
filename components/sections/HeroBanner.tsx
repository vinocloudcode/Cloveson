'use client';

import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  Globe,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { slides as lapSlides } from '@/constants/slides.lap';
import { slides as mobileSlides } from '@/constants/slides.mobile';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect device type (simple width check)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Select slides based on device
  const slides = isMobile ? mobileSlides : lapSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const achievements = [
    { icon: Users, label: '500+ Global Clients', value: '500+' },
    { icon: Globe, label: '10+ Countries Served', value: '10+' },
    { icon: Award, label: '8+ Years Experience', value: '8+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Animated Green Shape Decorations */}
      {/* Top Left Shape */}
      <div
        className="absolute top-[-10px] left-[-80px] z-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="block w-36 h-36 sm:w-64 sm:h-64  rounded-full bg-green-600 blur-3xl animate-green-loop1" />
      </div>
      {/* Bottom Right Shape */}
      <div
        className="absolute bottom-[90px] right-[10px] sm:right-[80px] z-0 pointer-events-none"
        aria-hidden="true"
      >
        <span className="block w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full bg-green-400 blur-2xl animate-green-loop2" />
      </div>
      {/* Center Left Shape */}
      <div
        className="absolute top-1/2 left-[-60px] z-0 pointer-events-none"
        style={{ transform: 'translateY(-50%)' }}
        aria-hidden="true"
      >
        <span className="block w-40 h-40 rounded-full bg-green-200/30 blur-2xl animate-green-loop3" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-center min-h-[60vh]">
        <div className="w-full items-center justify-center">
          {/* Left Column - Main Content */}
          <div className="text-gray-900 flex flex-col items-center text-center">
            {/* Stats */}
            <div
              className="inline-flex items-center space-x-2 bg-primary-600/10 backdrop-blur-sm border border-primary-400/10 rounded-full px-4 py-2 mb-6 transition-all duration-700 ease-in-out opacity-0 animate-fade-in"
              key={`stats-${currentSlide}`}
              style={{
                willChange: 'opacity, transform',
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
              }}
            >
              <CheckCircle className="h-4 w-4 text-primary-400" />
              <span
                className="text-sm font-medium text-primary-600 transition-opacity duration-700 ease-in-out"
                key={`stats-text-${currentSlide}`}
              >
                {slides[currentSlide].stats}
              </span>
            </div>

            {/* Title */}
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <AnimatedTitle slides={slides} currentSlide={currentSlide} />
            </div>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl transition-all duration-700 ease-in-out opacity-0 animate-fade-in"
              style={{
                willChange: 'opacity, transform',
                animationDelay: '0.5s',
                animationFillMode: 'forwards',
              }}
            >
              The Only Manufacturer with Global Supply Capability for Medical Waste Autoclave Facilities
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center opacity-0 animate-fade-in"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <a href="/products">
                <Button
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold shadow-brand"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  About us
                </Button>
              </a>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 group justify-center opacity-0 animate-fade-in"
                  style={{
                    animationDelay: `${0.9 + index * 0.15}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="p-3 bg-primary-600/10 backdrop-blur-sm rounded-xl group-hover:bg-primary-600/20 transition-colors">
                    <achievement.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

type AnimatedTitleProps = {
  slides: { title: string }[];
  currentSlide: number;
};

const AnimatedTitle = ({ slides, currentSlide }: AnimatedTitleProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const [displayTitle, setDisplayTitle] = useState(slides[currentSlide].title);

  useEffect(() => {
    if (slides[currentSlide].title !== displayTitle) {
      setIsChanging(true);

      // Wait for exit animation to complete, then change title
      const timeout = setTimeout(() => {
        setDisplayTitle(slides[currentSlide].title);
        setIsChanging(false);
      }, 400); // Half of the total transition duration

      return () => clearTimeout(timeout);
    }
    // Only depend on currentSlide
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="relative overflow-visible">
      <h1
        className={`
        text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6
        transition-all duration-500 ease-in-out
        ${
          isChanging
            ? 'opacity-0 translate-y-4 blur-sm'
            : 'opacity-100 translate-y-0 blur-0'
        }
      `}
        style={{
          willChange: 'opacity, transform, filter',
          textShadow: isChanging ? 'none' : '0 2px 16px rgba(34,197,94,0.10)',
        }}
      >
        <span
          className={`
        bg-gradient-to-r from-primary-600 via-green-500 to-cyan-500
        bg-clip-text text-transparent
        transition-all duration-500 ease-in-out
        ${isChanging ? 'animate-none' : 'animate-gradient-x'}
        `}
        >
          {displayTitle}
        </span>
      </h1>

      <div
        className={`
        mx-auto h-1 rounded-full
        bg-gradient-to-r from-primary-500 via-green-400 to-cyan-400
        transition-all duration-500 ease-in-out
        ${isChanging ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'}
      `}
        style={{
          width: '120px',
          marginTop: '-1rem',
          marginBottom: '1.5rem',
          transformOrigin: 'left',
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease-in-out infinite;
          background-size: 200% 200%;
        }
        `,
        }}
      />
    </div>
  );
};

export default HeroBanner;
