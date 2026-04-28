'use client';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block bg-[#39b54b]/10 text-[#39b54b] px-4 py-2 rounded-full font-semibold text-sm tracking-wider uppercase">
            Quality Focus
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Quality is Our Foundation
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Quality is not a feature — it's our foundation. From premium raw
            materials to zero-waste production lines, Cloves Inc. designs every
            process to maximize performance and reliability.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            We invest heavily in R&D to continuously innovate biodegradable
            liners and quality systems that meet evolving regulations and
            expectations.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Our commitment to excellence drives every decision, from material
            selection to final product delivery, ensuring consistent performance
            across all our solutions.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border-4 border-[#39b54b]/20 shadow-xl"
        >
          <img
            src="/about/qlty.jpg"
            alt="Mission Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
