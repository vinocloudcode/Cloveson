'use client';

import { motion } from 'framer-motion';

const MeetTheFounderSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-xl border-4 border-[#39b54b]/20"
        >
          <img
            src="/ceo.jpg"
            alt="Founder - Harsha Soundararajan"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="inline-block bg-[#39b54b]/10 text-[#39b54b] px-4 py-2 rounded-full font-semibold text-sm tracking-wider uppercase">
            Meet the Founder
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Harsha Soundararajan
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Harsha is a packaging and waste management expert with over a decade of industry experience across organizations like McCain Foods and Cleanaway. As the founder of Cloveson., he brings passion, quality, and innovation to the forefront of every solution.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            His mission is to build eco-conscious alternatives that drive global change — while supporting clients with reliable, cutting-edge packaging systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheFounderSection;
