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
            Our Mission
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
            Quality Solutions, Global Vision
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
            At Cloveson., our mission is to revolutionize the way the world approaches waste packaging. We are committed to crafting high-performance, eco-conscious liners and containers that not only protect the environment but also elevate industry standards.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            With a relentless focus on innovation and scalability, we empower global industries to adopt quality alternatives without compromising on performance or efficiency.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Backed by years of expertise and a passionate team, Cloveson. leads with purpose — delivering smart, quality packaging systems that drive real impact.
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
            src='/adi/mis.jpg'
            alt="Mission Visual"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
