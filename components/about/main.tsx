'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, PackageCheck, Users, TimerReset } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/ui/Herosection';

const AboutPage = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clients' },
    { icon: Globe, number: '40+', label: 'Countries Served' },
    { icon: PackageCheck, number: '50M+', label: 'Products Delivered' },
    { icon: TimerReset, number: '25+', label: 'Years of Experience' },
  ];

  return (
    <>
      <main className="bg-[url('/wavesgren.jpg')] bg-cover bg-center bg-no-repeat">
        <section className="relative 0 py-20 overflow-hidden">
          <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-green-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>

          <div className="max-w-6xl mx-auto px-6 text-center space-y-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
                Our Impact at a Glance
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                Driving quality growth and global solutions, one milestone at a
                time.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform transition-all hover:scale-[1.03] border border-green-100"
                >
                  <div className="flex justify-center items-center mb-4">
                    <stat.icon className="w-10 h-10 text-green-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-green-900 group-hover:text-green-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-2 group-hover:text-gray-800">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
