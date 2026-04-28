'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const products = [
  {
    title: 'Autoclave Liners',
    id: 'autoclave',
    description:
      'High-temperature atactic polypropylene liners - the only manufacturer with global supply capability for medical waste autoclave facilities.',
    types: [
      'Atactic PP autoclave Liners',
      'Textile Liners',
      'Jute/Hessian',
      'Woven Plastic',
    ],
    image: '/public/adi/14.jpg',
  },
  {
    title: 'Industrial Packaging',
    id: 'packaging',
    description:
      'Durable packaging for transporting and storing bulk materials.',
    types: ['Bulk Bags', 'Woven Poly', 'Mesh Sacks', 'Multiwall Papers'],
    image: '/public/Product/ps/og12.jpg',
  },
  // {
  //   title: 'Natural & Synthetic Fabrics',
  //   id: 'fabrics',
  //   description: 'Textiles designed for industrial strength and resistance.',
  //   types: ['Polywoven', 'Calico', 'Thermal Weave', 'Chemical Resistant'],
  //   image: '/public/Product/nfs/nfs5.jpg',
  // },
  // {
  //   title: 'Commercial Textiles',
  //   id: 'textiles',
  //   description: 'Aesthetic and durable fabrics for commercial use.',
  //   types: ['Curtains', 'Bedding', 'Towels', 'Laundry Bags'],
  //   image: '/public/Product/ct/ct5.webp',
  // },
];

export default function ProductsPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(
    Array(products.length).fill(false),
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    products.forEach((_, i) => {
      if (!cardRefs.current[i]) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible((prev) => {
                const updated = [...prev];
                updated[i] = true;
                return updated;
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(cardRefs.current[i]!);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div>
      <style>{`
      .slide-in {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1);
      }
      .before-slide-in {
        opacity: 0;
        transform: translateX(60px);
      }
      `}</style>
      <div className="min-h-screen bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#00B14F] mb-4">
        Featured Products
        </h1>
        <p className="text-gray-800 text-base md:text-lg font-medium mb-16">
        Explore premium-grade solutions tailored for design and performance
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
        {products.map((product, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`group rounded-2xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-500 hover:scale-[1.03] bg-white hover:bg-[#00B14F] hover:shadow-2xl ${
          visible[index] ? 'slide-in' : 'before-slide-in'
          }`}
          style={{
          width: '100%',
          transitionDelay: visible[index] ? `${index * 120}ms` : '0ms',
          }}
        >
          {/* Image Section */}
          <div className="h-48 sm:h-52 md:h-56 w-full relative overflow-hidden">
          <Image
            src={product.image.replace('/public', '')}
            alt={product.title}
            fill
            className="object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[400px] transition-colors duration-500">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#00B14F] mb-2 group-hover:text-white transition-colors duration-300">
            {product.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium mb-3 group-hover:text-white transition-colors duration-300">
            {product.description}
            </p>

            {/* Product Types */}
            <ul className="text-sm space-y-1 mb-4">
            {product.types.map((type, i) => (
              <li
              key={i}
              className="before:content-['•'] before:mr-2 before:text-[#00B14F] font-medium text-gray-700 group-hover:text-white group-hover:before:text-white transition-all duration-300"
              >
              {type}
              </li>
            ))}
            </ul>
          </div>

          {/* Learn More Button */}
          <Link href={`/products#${product.id}`} passHref legacyBehavior>
            <a className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 shadow-md bg-[#00B14F] text-white group-hover:bg-white group-hover:text-[#00B14F]">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Link>
          </div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}
