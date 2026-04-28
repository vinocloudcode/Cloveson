'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const Timeline = ({milestones }: {milestones: Milestone[] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative max-w-5xl mx-auto py-24 px-4">
      {/* heading block goes here (use your green box heading) */}

      <div className="relative pl-6 border-l-4 border-transparent">
        {/* Animate the vertical line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-0 top-0 w-1 bg-green-600 origin-top"
        />

        {/* Timeline Items */}
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-12 pl-6"
          >
            <div className="absolute -left-[0.8125rem] top-1 w-5 h-5 bg-green-600 rounded-full border-4 border-white shadow-md" />
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-green-800">{item.year} — {item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Timeline;
