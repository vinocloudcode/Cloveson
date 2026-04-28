import ContactPage from '@/components/contact/mainpage';
import { Metadata } from 'next';


export const metadata = {
  title: 'Contact | Get in Touch with Our Team',
  description: 'Have questions or need assistance? Contact Cloveson today via phone, WhatsApp, or email for expert support in autoclave liners, packaging, and commercial textiles.',
};

export default function Home() {
  return (
    <>
      <ContactPage />
    </>
  );
}
