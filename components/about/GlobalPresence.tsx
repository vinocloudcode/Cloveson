'use client';
import { motion } from 'framer-motion';

const GlobalPresenceSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border-4 border-[#39b54b]/20 shadow-xl"
        >
          <img
            src='/adi/glob.jpg'
            alt="Global Presence"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="inline-block bg-[#39b54b]/10 text-[#39b54b] px-4 py-2 rounded-full font-semibold text-sm tracking-wider uppercase">
            Global Presence
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Delivering Worldwide, Supporting Locally
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            Cloveson serves clients across North America, Europe, Asia, and Australia. Our global network of manufacturing and distribution centers ensures timely delivery and localized support.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Through agile logistics and strong regional partnerships, we tailor our packaging solutions to meet diverse regulatory and environmental requirements across borders.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Our vision is to lead not just in scale, but in trust and impact — becoming the go-to provider for quality packaging around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
