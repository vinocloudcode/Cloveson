import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners' },
    // { name: 'Commercial Textiles', href: '/products/commercial-textiles' },
    // {
    //   name: 'Natural & Synthetic Fabrics',
    //   href: '/products/natural-synthetic-fabrics',
    // },
    { name: 'Packaging Solutions', href: '/products/packaging-solutions' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Founder', href: '/about#founder' },
    { name: 'Quality Focus', href: '/about#quality' },
    { name: 'Why us', href: '/whyus' },
  ];

  const supportLinks = [
    { name: 'Contact Support', href: '/contact' },
    // { name: 'Request Quote', href: '/contact/request-quote' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <Link href="/" className="relative">
                <Image
                  src="/icon.png"
                  alt="Cloveson Logo"
                  width={50}
                  height={50}
                  className="w-auto h-12 rounded-2xl transition-all duration-300 group-hover:scale-105"
                />
              </Link>
              <div>
                <div className="font-bold text-2xl bg-white bg-clip-text text-transparent">
                  Cloveson
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of high-quality, innovative products for
              healthcare and industrial sectors worldwide. We
              continuously innovate to meet the evolving needs of our customers
              while protecting our planet.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+91 73395 55309</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@clovesinc.org</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-1" />
                <span className="text-gray-300">
                  Coimbatore
                  <br />
                  Tamilnadu
                  <br />
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup 
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest industry insights, product updates, and quality news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Cloveson. All rights reserved.</span>
              <div className="flex space-x-6">
                <Link
                  href="/legal/privacy-policy"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms-of-service"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/* Developer Credit Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-center items-center">
            <span className="text-xs text-gray-500">
              Developed with ❤️ by{' '}
              <Link
                href="https://abi-portfoilio.vercel.app/"
                className="text-primary-400 font-medium hover:underline"
              >
                Vinothini Sivaprakasam
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
