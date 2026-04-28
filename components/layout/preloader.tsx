'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const rotationDuration = 1.5;
  const minRotations = 1;

  useEffect(() => {
    if (pathname !== '/') return;
    const timer = setTimeout(() => {
      setLoading(true);
    }, rotationDuration * 500 * minRotations);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Only show preloader on "/"
  if (pathname !== '/') return null;

  return (
    <div
      className={`preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center 
        bg-gradient-to-br from-[#39b54b] to-[#2ecc71] transition-all duration-1000 transform-gpu origin-center
        ${
          loading
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-full pointer-events-none'
        }
      `}
    >
      {/* Thin circles */}
      <div className="relative flex items-center justify-center">
        {/* Thin Circle 1 */}
        <span className="absolute w-40 h-40 rounded-full border border-white/50 animate-pulse"></span>
        {/* Thin Circle 2 */}
        <span className="absolute w-44 h-44 rounded-full border border-white/40"></span>
        {/* Thin Circle 3 */}
        <span className="absolute w-48 h-48 rounded-full border border-white/30"></span>

        {/* Main Loader */}
        <div
          className="
            w-32 aspect-square rounded-full relative flex justify-center items-center 
            bg-[conic-gradient(transparent_0deg,transparent_135deg,white_90deg,white_0deg)] animate-[dynamicSpin_6s_ease-in-out_infinite] z-40
            before:absolute
            before:w-[84%]
            before:aspect-square
            before:rounded-full
            before:translate-x-3.5
            before:z-[80]
            before:bg-[conic-gradient(transparent_45deg,white_0deg,white_135deg,transparent_70deg)]
                        [animation-iteration-count:1]

          "
          onAnimationEnd={() => setLoading(false)}
        >
          {/* Third spinning inner circle (green) */}
          <span
            className="
              absolute w-[50%] aspect-square rounded-full z-[60]
              bg-[conic-gradient(#3CBC4C_0deg,#3CBC4C_180deg)]
            "
          ></span>
          <span
            className="
              w-32 aspect-square rounded-full relative flex justify-center items-center
              bg-[conic-gradient(white_0deg,white_45deg,transparent_45deg)]
            "
          ></span>
        </div>
      </div>
      
    </div>
  );
};

export default Preloader;
