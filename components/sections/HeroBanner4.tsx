'use client'
import React, { useState, useEffect } from 'react'
import { 
    Shield, 
    Leaf, 
    Globe, 
    ChevronRight, 
    Play,
    CheckCircle,
    Users,
    Award,
    ArrowDown
} from 'lucide-react'

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentStat, setCurrentStat] = useState(0)

    const stats = [
        { number: "50+", label: "Countries Served", icon: Globe },
        { number: "99.9%", label: "Safety Rating", icon: Shield },
        { number: "100%", label: "Eco-Friendly", icon: Leaf },
        { number: "25+", label: "Years Experience", icon: Award }
    ]

    const features = [
        "FDA Approved Materials",
        "100% Biodegradable Options",
        "Global Distribution Network",
        "24/7 Customer Support"
    ]

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentStat((prev) => (prev + 1) % stats.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50/30 to-green-100/40 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#39b54b]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#39b54b]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#39b54b]/5 to-transparent rounded-full animate-spin-slow"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    
                    {/* Left Content */}
                    <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        
                        {/* Company Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#39b54b]/20 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            <div className="w-2 h-2 bg-[#39b54b] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-700">Global Leader Since 1999</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-gray-900">Sustainable</span>
                                <br />
                                <span className="text-[#39b54b] relative">
                                    Medical Solutions
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#39b54b] to-[#39b54b]/50 rounded-full transform scale-x-0 animate-scale-x"></div>
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Leading the world in eco-friendly medical waste liners and industrial packaging. 
                                Trusted by healthcare professionals across 50+ countries.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className={`flex items-center gap-3 transform transition-all duration-500 delay-${index * 100}`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CheckCircle className="w-5 h-5 text-[#39b54b] flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="group relative bg-[#39b54b] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started Today
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                            
                            <button className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm border-2 border-[#39b54b]/20 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-[#39b54b] hover:bg-white transition-all duration-300 hover:shadow-lg">
                                <div className="w-12 h-12 bg-[#39b54b]/10 rounded-full flex items-center justify-center group-hover:bg-[#39b54b]/20 transition-colors duration-300">
                                    <Play className="w-5 h-5 text-[#39b54b] ml-1" />
                                </div>
                                Watch Our Story
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Interactive Stats & Visual */}
                    <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        
                        {/* Main Visual Container */}
                        <div className="relative">
                            
                            {/* Central Circle with Rotating Stats */}
                            <div className="relative w-80 h-80 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-full shadow-2xl animate-pulse-slow"></div>
                                <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                                    <div className="text-center transform transition-all duration-500">
                                        <div className="text-4xl font-bold text-[#39b54b] mb-2">
                                            {stats[currentStat].number}
                                        </div>
                                        <div className="text-gray-600 font-medium">
                                            {stats[currentStat].label}
                                        </div>
                                        <div className="mt-3">
                                            {React.createElement(stats[currentStat].icon, {
                                                className: "w-8 h-8 text-[#39b54b] mx-auto animate-bounce-subtle"
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stat Cards */}
                            {stats.map((stat, index) => {
                                const positions = [
                                    'top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
                                    'top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2',
                                    'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2',
                                    'top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2'
                                ]
                                
                                return (
                                    <div
                                        key={index}
                                        className={`absolute ${positions[index]} w-24 h-24 bg-white rounded-2xl shadow-lg border border-[#39b54b]/10 flex flex-col items-center justify-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl cursor-pointer ${currentStat === index ? 'ring-2 ring-[#39b54b] scale-110' : ''}`}
                                        style={{
                                            animationDelay: `${index * 200}ms`,
                                            animation: `float 3s ease-in-out infinite ${index * 0.5}s`
                                        }}
                                    >
                                        {React.createElement(stat.icon, {
                                            className: `w-6 h-6 text-[#39b54b] mb-1 ${currentStat === index ? 'animate-pulse' : ''}`
                                        })}
                                        <span className="text-xs font-bold text-gray-700">{stat.number}</span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 grid grid-cols-3 gap-4">
                            {[
                                { icon: Shield, label: "FDA Certified" },
                                { icon: Leaf, label: "Eco-Friendly" },
                                { icon: Users, label: "Trusted Globally" }
                            ].map((item, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105 cursor-pointer"
                                >
                                    {React.createElement(item.icon, {
                                        className: "w-8 h-8 text-[#39b54b] mx-auto mb-2"
                                    })}
                                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#39b54b] transition-colors duration-300 cursor-pointer">
                        <span className="text-sm font-medium">Discover More</span>
                        <ArrowDown className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
