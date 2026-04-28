'use client';

import React, { useState, useEffect } from 'react';
import {
  Leaf,
  Globe,
  Shield,
  ArrowRight,
  Play,
  CheckCircle,
  Recycle,
  Heart,
  Factory,
  Stethoscope,
  Wheat,
  Package,
} from 'lucide-react';
import './animate.css';
import { slides as lapSlides } from '@/constants/slides.lap';
import { slides as mobileSlides } from '@/constants/slides.mobile';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = isMobile ? mobileSlides : lapSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '1M+', label: 'Products Delivered', icon: Shield },
    { number: '99%', label: 'Eco-Friendly Materials', icon: Leaf },
    { number: '24/7', label: 'Global Support', icon: Heart },
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, color: 'text-blue-500' },
    { name: 'Agriculture', icon: Wheat, color: 'text-yellow-500' },
    { name: 'Manufacturing', icon: Factory, color: 'text-gray-600' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative min-h-screen  overflow-hidden ${
        isVisible ? 'animate__animated animate__fadeIn' : ''
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#39b54b]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#39b54b]/5 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-[#39b54b]/15 rounded-full animate-ping delay-2000"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="bg-[#39b54b] rounded-sm animate-pulse"
                style={{ animationDelay: `${i * 80}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            {/* Company Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-[#39b54b]/10 text-[#39b54b] px-4 py-2 rounded-full text-sm font-medium mb-6 transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              <Leaf className="w-4 h-4 animate-spin-slow" />
              Eco-friendly materials
            </div>

            {/* Main Heading */}
            <h1
              className={`text-7xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <span className="block">
                Cloveson
                {/* <span className="block text-[#39b54b] relative">
                  Inc. */}
                  <span className="relative block h-3 mt-2">
                    {/* Animated underline, loops infinitely */}
                    <span
                      className="
                                            absolute left-0 w-24 h-1 
                                            bg-gradient-to-r from-[#39b54b] to-emerald-400 
                                            origin-left
                                            animate-underline-loop
                                            sm:h-2
                                            h-0.5
                                        "
                      style={{
                        animation:
                          'underlineScaleX 2s cubic-bezier(0.4,0,0.2,1) infinite',
                      }}
                    />
                  </span>
                {/* </span> */}
              </span>
            </h1>
            <AnimatedTitle slides={slides} currentSlide={currentSlide} />

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              Your Global Leader in Medical Waste Liners & Industrial Packaging
              Solutions
            </p>

            {/* Industry Tags */}
            {/* <div className={`flex flex-wrap gap-3 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            {industries.map((industry, index) => (
                                <div 
                                    key={industry.name}
                                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                >
                                    <industry.icon className={`w-4 h-4 ${industry.color} group-hover:scale-125 transition-transform duration-300`} />
                                    <span className="text-sm font-medium text-gray-700">{industry.name}</span>
                                </div>
                            ))}
                        </div> */}

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <a
                href="/products"
                className="group bg-[#39b54b] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2d8f3a] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Animated Stats */}
          </div>

          {/* Right Content - Interactive Visual */}
          <div className="flex-1 lg:pl-12">
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-8 opacity-0'
              }`}
            >
              {/* Main Visual Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Central Circle */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#39b54b] to-emerald-500 rounded-full shadow-2xl animate-pulse-slow"></div>
                  <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <div className="text-center">
                      <Package className="w-16 h-16 text-[#39b54b] mx-auto mb-4 animate-spin-slow" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Smart Packaging
                      </h3>
                      <p className="text-sm text-gray-600">
                        Secure & Efficient Delivery Solutions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-reverse-slow">
                  {/* Healthcare */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <Stethoscope className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Agriculture */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <Wheat className="w-8 h-8 text-yellow-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Manufacturing */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <Factory className="w-8 h-8 text-gray-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Global */}
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <Globe className="w-8 h-8 text-[#39b54b] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Floating Feature Cards */}
                {/* <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#39b54b]" />
                    <span className="text-sm font-medium text-gray-700">
                      ISO Certified
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#39b54b]" />
                    <span className="text-sm font-medium text-gray-700">
                      FDA Approved
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-50 fill-[#39b54b]">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            className="animate-wave"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;

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
        text-2xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-2
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

      {/* <div
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
      /> */}
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
