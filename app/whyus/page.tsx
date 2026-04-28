import WhyChooseUs  from '@/components/whyus/main';
import { Metadata } from 'next';

export const metadata = {
  title: 'Why Choose us',
  description: 'Discover why industries around the world trust Cloveson. for innovative, high-quality, and quality packaging and textile products tailored to their unique needs.',
};

export default function Home() {
  return (
    <>
        <WhyChooseUs  />
    </>
  );
}