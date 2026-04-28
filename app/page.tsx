'use client';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ClovesAdModal from '@/components/sections/popup';
import HeroBanner from '@/components/sections/HeroBanner';
import HeroBanner2 from '@/components/sections/HeroBanner2';
import HeroBanner3 from '@/components/sections/HeroBanner3';
import HeroBanner4 from '@/components/sections/HeroBanner4';
import Script from 'next/script';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      
      
      {/* <ClovesAdModal /> */}
      <HeroBanner3 />
      <HeroBanner2 />
      {/* <HeroBanner /> */}
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}