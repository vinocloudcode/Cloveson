import AboutPage from '@/components/about/main';
import PlayfulHeroSection from '@/components/about/play';
import MeetTheFounderSection from '@/components/about/MeetTheFounderSection';
import MissionSection from '@/components/about/MissionSection';
import GlobalPresenceSection from '@/components/about/GlobalPresence';
import SustainabilityFocusSection from '@/components/about/Sustain';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About Us - Cloveson',
  description: 'Learn more about Cloveson, our mission, global presence, and commitment to sustainability.',
};

const About = () => {
  return (
    <>
      <PlayfulHeroSection />
      <MeetTheFounderSection />
      <MissionSection />
      <GlobalPresenceSection />
      <SustainabilityFocusSection />
      {/* <AboutPage /> */}
    </>
  );
};

export default About;
