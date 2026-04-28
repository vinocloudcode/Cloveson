"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Globe, Leaf, Lightbulb, Package, Award, Users, User } from 'lucide-react';

const WhyChooseUs = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: Globe,
      title: "Global Expertise",
      description: "Serving clients across North America, Europe, Asia, and Australia with tailored solutions.",
      gradient: "from-emerald-400 to-teal-500"
    },
    
    {
      icon: Lightbulb,
      title: "Innovation & Quality",
      description: "Continuous R&D for durable, high-performance products meeting global standards.",
      gradient: "from-lime-400 to-green-500"
    },
    {
      icon: Package,
      title: "Comprehensive Range",
      description: "One-stop solution for autoclave liners and  industrial packaging",
      gradient: "from-teal-400 to-green-500"
    },
    
    // {
    //   icon: Users,
    //   title: "Customer-Centric Approach",
    //   description: "Personalized service, timely delivery, and post-sales support.",
    //   gradient: "from-green-500 to-emerald-600"
    // },
    {
      icon: User,
      title: "Experienced Leadership",
      description: "Founded by Harsha Soundararajan, an industry expert with over a decade of experience.",
      gradient: "from-lime-500 to-teal-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            setTimeout(() => {
              setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-lime-200/30 to-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-700 bg-clip-text text-transparent mb-4 animate-fade-in">
              Why Choose
            </h2>
            <div className="relative">
              <h2 className="text-5xl md:text-6xl font-bold text-[#39b54b] animate-fade-in delay-300">
                Cloveson
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#39b54b] to-transparent animate-scale-x delay-500"></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto animate-fade-in delay-700">
            Experience excellence through our commitment to innovation, quality, and customer satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className={`relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#39b54b]/20 via-emerald-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-4 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <Icon className="w-full h-full text-white drop-shadow-sm" />
                    </div>
                    
                    {/* Floating Particles */}
                    {isHovered && (
                      <>
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 bg-[#39b54b] rounded-full animate-ping`}
                            style={{
                              top: `${20 + i * 15}%`,
                              left: `${80 + i * 10}%`,
                              animationDelay: `${i * 200}ms`,
                              animationDuration: '1s'
                            }}
                          ></div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#39b54b] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39b54b] to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>

                {/* Floating Badge */}
                {isHovered && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#39b54b] rounded-full flex items-center justify-center animate-bounce">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-[#39b54b] to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900 group-hover:text-[#39b54b] transition-colors duration-300">
                Ready to Experience Excellence?
              </p>
              <p className="text-sm text-gray-600">
                Join our global network of satisfied clients
              </p>
            </div>
            <div className="w-2 h-2 bg-[#39b54b] rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;