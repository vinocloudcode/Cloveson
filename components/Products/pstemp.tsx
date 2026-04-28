"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from 'next/link';
import {
  Phone
} from 'lucide-react';

interface ProductSubPageTemplateProps {
  title: string;
  description: string;
  image: string;
  features: React.ReactNode[];
  specifications: { label: string; value: string; icon?: React.ReactNode }[];
  iconSize?: number;
}

export default function ProductSubPageTemplate({
  title,
  description,
  image,
  features,
  specifications,
  iconSize = 26,
}: ProductSubPageTemplateProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add a function to handle download with confirmation
  const handleDownloadPDF = useCallback(() => {
    // Show popup and auto-download PDF
    setShowPopup(true);
    // Start download
    const link = document.createElement('a');
    link.href = '/documents/specification.pdf';
    link.download = 'specification.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
       {showPopup && (
        <div className="fixed top-6 left-1/2 z-50 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-slide-in">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
          </svg>
          <span>Specification PDF is downloading...</span>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <a href="/products" className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-green-600 transition-colors duration-200 group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Products</span>
          </a>
        </div>

        {/* Product Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full"></div>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 hover:shadow-3xl transition-shadow duration-500 border border-gray-100">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            
            {/* Left - Image Section */}
            <div className="relative bg-gradient-to-br from-green-50 to-green-100 p-8 flex items-center justify-center group">
              {/* Static Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200/30 rounded-full"></div>
                <div className="absolute top-1/2 -right-8 w-32 h-32 bg-green-300/20 rounded-full"></div>
                <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-green-400/25 rounded-full"></div>
              </div>
              
              {/* Product Image */}
              <div className="relative z-10 max-w-md w-full">
                <div className="relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Image Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Static Quality Badge */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Description & Features */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-100 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Premium Quality
                  </div>
                  
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                    {description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Key Features
                  </h3>
                  
                  <div className="space-y-3">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center group">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-4 transform group-hover:scale-125 transition-transform duration-200"></div>
                        <p className="text-gray-700 group-hover:text-green-700 transition-colors duration-200 font-medium">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/contact" className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
                    <Phone className="w-4 h-4 m-2" />
                    Contact for Quote
                  </Link>
                  
                  <button
                    type="button"
                    onClick={handleDownloadPDF}
                    className="flex-1 px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-200"
                  >
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Specs
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        {specifications.length > 0 && (
          <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full opacity-50"></div>
              <div className="absolute top-1/4 -right-16 w-48 h-48 bg-white/5 rounded-full opacity-70"></div>
              <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-white/15 rounded-full opacity-40"></div>
              <div className="absolute -bottom-6 right-1/3 w-24 h-24 bg-white/20 rounded-full opacity-60"></div>
              
              {/* Floating Elements with CSS Animations */}
              <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-10 w-3 h-3 bg-white/40 rounded-full animate-bounce"></div>
            </div>
            
            {/* Header */}
            <div className="px-8 py-8 relative z-10">
              <div className="flex items-center justify-center mb-2">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-white">Technical Specifications</h2>
              </div>
              <div className="w-32 h-1 bg-white/40 mx-auto rounded-full"></div>
            </div>
            
            {/* Specifications Grid */}
            <div className="p-8 lg:p-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specifications.slice(0, 9).map((spec, i) => {
                  return (
                    <div key={i} className="group">
                      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
                              <div className="text-white">
                                {spec.icon && React.isValidElement(spec.icon)
                                  ? React.cloneElement(spec.icon as any, { size: iconSize })
                                  : spec.icon}
                              </div>
                            </div>
                            <dt className="text-sm font-bold text-gray-600 uppercase tracking-wider group-hover:text-green-700 transition-colors">
                              {spec.label}
                            </dt>
                          </div>
                          <dd className="text-lg font-semibold text-gray-900 mt-auto group-hover:text-green-800 transition-colors leading-tight">
                            {spec.value}
                          </dd>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-3xl p-12 relative overflow-hidden">
            {/* Static Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-green-100 text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our specialists to discuss your specific requirements and discover how our solutions can benefit your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link href="/contact" className="px-8 py-4 bg-white text-green-700 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Us
                </Link>
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-green-700 transition-all duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}