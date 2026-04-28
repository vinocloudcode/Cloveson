'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Rocket, Play, ChevronDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useRouter } from 'next/navigation';

const PlayfulHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState('🚀');
  const router = useRouter();

  const emojis = ['🚀', '✨', '🎯', '💡', '🌟', '🔥'];
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const emojiInterval = setInterval(() => {
      setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(emojiInterval);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 overflow-hidden pb-32 sm:pb-40 lg:pb-56"
      onMouseMove={handleMouseMove}
    >
      {/* Background animations */}
      <div
        className={`absolute inset-0 opacity-40 transition-opacity duration-1000 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
      >
        {/* Blobs */}
        <div
          className="absolute w-72 h-72 bg-gradient-to-r from-[#39b54b]/30 to-emerald-400/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${10 + mousePosition.x * 5}%`,
            top: `${20 + mousePosition.y * 3}%`,
            animationDuration: '4s',
          }}
        />
        <div
          className="absolute w-96 h-96 bg-gradient-to-l from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-bounce"
          style={{
            right: `${5 + mousePosition.x * 3}%`,
            top: `${10 + mousePosition.y * 2}%`,
            animationDuration: '6s',
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-br from-yellow-300/25 to-orange-300/25 rounded-full blur-xl animate-ping"
          style={{
            left: `${70 + mousePosition.x * 2}%`,
            bottom: `${30 + mousePosition.y * 4}%`,
            animationDuration: '3s',
          }}
        />

        {/* Floating dots */}
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="absolute w-4 h-4 bg-[#39b54b]/20 rounded-full animate-bounce"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              animationDelay: `${el.delay}s`,
              animationDuration: `${el.duration}s`,
            }}
          />
        ))}

        {/* Dotted Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(57,181,75,0.08)_2px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Text Left */}
          <div className="space-y-8 text-left">
            <div
              className={`inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border-2 border-[#39b54b]/20 rounded-full px-6 py-3 shadow-lg transition-all ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <Sparkles className="w-5 h-5 text-[#39b54b] animate-spin" />
              <span className="text-[#39b54b] font-bold text-sm tracking-wide">
                ✨ NEW & EXCITING
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight transition-all delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="block text-slate-800">About</span>
              <span className="block bg-gradient-to-r from-[#39b54b] via-emerald-500 to-[#39b54b] bg-clip-text text-transparent animate-pulse">
                Cloveson
              </span>
            </h1>

            <p
              className={`text-xl sm:text-2xl text-slate-600 max-w-lg font-medium transition-all delay-400 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              A global leader in medical waste liners and packaging — rooted in
              innovation, quality, and service.{' '}
              <span className="text-[#39b54b] font-bold underline decoration-wavy decoration-[#39b54b]/50">
                amazing realities
              </span>{' '}
              {currentEmoji}
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all delay-800 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
            >
              <button
                className="group bg-gradient-to-r from-[#39b54b] to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 hover:-rotate-1 transition-transform duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => router.push('/contact')}
              >
                <span className="flex items-center gap-3">
                  <Rocket
                    className={`w-6 h-6 ${
                      isHovering ? 'rotate-12 scale-110' : ''
                    }`}
                  />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              {/* <button className="group bg-white/70 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg border-2 border-[#39b54b]/20 hover:border-[#39b54b] hover:scale-105 hover:rotate-1 transition-all duration-300">
                <span className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-r from-[#39b54b] to-emerald-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <Play className="w-5 h-5 text-white" />
                  </span>
                  Watch Demo
                </span>
              </button> */}
            </div>
          </div>

          {/* Right - Swiper */}
            <div
            className={`relative w-full h-96 lg:h-[500px] rounded-3xl border border-white/30 shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              style={{ width: '100%', height: '100%' }}
            >
              {[
              'adi/1.jpg',
              'adi/2.jpg',
              'adi/3.jpg',
              'adi/13.jpg',
              'adi/14.jpg',
              ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover rounded-3xl"
                />
              </SwiperSlide>
              ))}
            </Swiper>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#39b54b]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Orbit animation (CSS) */}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(80px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(80px) rotate(-360deg);
          }
        }
      `}</style>
      {/* Floating Feature Boxes */}
      <div className="relative z-10 mt-8 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Eco Friendly', icon: '🌱' },
            { title: 'Global Reach', icon: '🌍' },
            { title: 'Quality First', icon: '🏆' },
            { title: 'Trusted by 500+', icon: '🤝' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#39b54b] to-emerald-600 text-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-3xl mb-2 animate-bounce">{feature.icon}</div>
              <div className="text-lg font-semibold">{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayfulHeroSection;
