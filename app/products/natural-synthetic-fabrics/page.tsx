'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Leaf,
  Shield,
  Package,
  Eye,
  Recycle,
  ArrowRight,
} from 'lucide-react';

const NaturalSyntheticFabricsPage = () => {
  const [expandedSpecs, setExpandedSpecs] = useState(false);

  const highlights = [
    {
      icon: Leaf,
      text: 'Eco-Friendly Materials',
      desc: 'Biodegradable and eco-friendly options',
    },
    {
      icon: Shield,
      text: 'High Tensile Strength',
      desc: 'Built for demanding applications',
    },
    {
      icon: Package,
      text: 'Custom Solutions',
      desc: 'Tailored sizes and designs',
    },
    {
      icon: Recycle,
      text: 'Versatile Use',
      desc: 'Packaging, protection, and reinforcement',
    },
  ];

  const specs = [
    { label: 'Material Types', value: 'Natural & Synthetic', icon: Leaf },
    { label: 'Strength Rating', value: 'Heavy-duty grade', icon: Shield },
    { label: 'Applications', value: 'Industrial packaging', icon: Package },
    {
      label: 'Customization',
      value: 'Available in various sizes',
      icon: Recycle,
    },
    { label: 'Tear Resistance', value: 'Tear-resistant design', icon: Shield },
    { label: 'Sustainability', value: 'Eco-friendly options', icon: Leaf },
  ];

  const subProducts = [
    {
      title: 'Hessian (Jute)',
      description:
        'Natural, breathable fabric perfect for eco-friendly packaging needs.',
      image: '/Product/nfs/p2.jpg',
      link: '/products/natural-synthetic-fabrics/hessian-jute',
    },
    {
      title: 'Calico',
      description:
        'Unbleached cotton fabric ideal for eco-conscious applications.',
      image: '/Product/nfs/p3.jpg',
      link: '/products/natural-synthetic-fabrics/calico',
    },
    {
      title: 'Poly-Woven Fabrics',
      description:
        'Synthetic fabrics used for heavy packaging and reinforcement.',
      image: '/Product/nfs/p6.jpg',
      link: '/products/natural-synthetic-fabrics/poly-woven-fabrics',
    },
    {
      title: 'Woven & Knitted Fabrics',
      description:
        'Flexible solutions for industrial and commercial textile applications.',
      image: '/Product/nfs/p9.jpg',
      link: '/products/natural-synthetic-fabrics/woven-knitted-fabrics',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-fuchsia-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-200 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-pink-300 via-pink-100 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-fuchsia-300 via-pink-100 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-300 via-pink-200 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '6s' }}
        ></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
        >
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#gradient1)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q400,300 800,500 T1200,300"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
          <path
            d="M200,0 Q500,200 800,100 T1200,200"
            stroke="url(#gradient3)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '4s' }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a21caf" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#db2777" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-6 shadow-2xl relative animate-bounce">
              <Leaf className="h-10 w-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-75 animate-ping"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Natural & Synthetic Fabrics
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
            Eco-friendly fabrics for industrial-grade packaging, protection &
            reinforcement
          </p>
          <p className="text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Premium fabrics designed for demanding environments, combining
            eco-friendliness and flexibility for various industries.
          </p>
        </div>
        {/* Showcase Image and Specs */}
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-lg"></div>
            <div className="absolute top-4 right-8 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="absolute top-12 right-16 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-white/25 rounded-full"></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              {/* Left - Image */}
              <div className="relative">
                <div className="aspect-video bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000"
                    alt="Natural & Synthetic Fabrics"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye
                        className="h-12 w-12 mx-auto mb-2 opacity-80 animate-spin"
                        style={{ animationDuration: '20s' }}
                      />
                      <p className="text-lg font-semibold">Product Showcase</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right - Specs */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    Technical Specifications
                  </h3>
                  <button
                    onClick={() => setExpandedSpecs(!expandedSpecs)}
                    className="p-2 rounded-full bg-white/20 text-white transition-all duration-300 shadow-lg hover:bg-white/30 hover:scale-110"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        expandedSpecs ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSpecs ? 'max-h-96' : 'max-h-48'
                  }`}
                >
                  <div className="space-y-1">
                    {specs
                      .slice(0, expandedSpecs ? specs.length : 4)
                      .map((spec, index) => {
                        const SpecIcon = spec.icon;
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center py-3 border-b border-white/20 hover:bg-white/10 rounded-lg px-2 transition-all duration-200"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="flex items-center space-x-3">
                              <SpecIcon className="h-4 w-4 text-white" />
                              <span className="font-medium text-white text-sm">
                                {spec.label}
                              </span>
                            </div>
                            <span className="text-white font-semibold bg-white/20 px-2 py-1 rounded-full text-xs">
                              {spec.value}
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Highlights */}
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 shadow-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-3 w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="absolute top-6 right-1 w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-2 w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-8 right-4 w-1.5 h-1.5 bg-white/35 rounded-full"></div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4 shadow-lg relative z-10 transition-transform duration-300 hover:rotate-12">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 relative z-10">
                    {item.text}
                  </h3>
                  <p className="text-white/90 text-sm relative z-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 text-center">
            Explore Fabric Types
          </h2>
          <div className="w-64 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto mb-12 rounded-full"></div>

          {/* Grid container for 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {subProducts.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden text-white hover:scale-[1.02] group h-full"
              >
                {/* Vertical layout for better fit in grid */}
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow relative">
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 right-6 w-3 h-3 bg-white/25 rounded-full"></div>
                    <div className="absolute top-10 right-4 w-2 h-2 bg-white/35 rounded-full"></div>
                    <div className="absolute bottom-8 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 right-8 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    <div className="absolute top-1/2 right-2 w-2.5 h-2.5 bg-white/30 rounded-full"></div>

                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h4>
                      <p className="text-white/90 mb-6 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center text-white font-semibold hover:text-white/80 transition-colors duration-200 group-hover:translate-x-2 cursor-pointer relative z-10 mt-auto">
                      <Link href={item.link} className="flex items-center">
                        <span className="mr-2">View More</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
            <div className="absolute top-4 left-8 w-4 h-4 bg-white/25 rounded-full"></div>
            <div className="absolute top-8 right-12 w-2 h-2 bg-white/35 rounded-full"></div>
            <div className="absolute bottom-6 left-16 w-3 h-3 bg-white/30 rounded-full"></div>
            <div className="absolute bottom-12 right-8 w-2.5 h-2.5 bg-white/20 rounded-full"></div>
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <Recycle className="h-12 w-12 mx-auto animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Contact us to discuss custom sizes, materials, and
                eco-alternatives for your packaging needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-700 py-4 px-8 rounded-xl font-bold transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-xl">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        `,
        }}
      ></style>
    </div>
  );
};

export default NaturalSyntheticFabricsPage;
