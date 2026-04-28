'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Award,
  Package,
  Phone,
  FileText,
  Zap,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productSubmenu = [
    { name: 'Autoclave Liners', href: '/products/autoclave-liners', icon: Zap },
    {
      name: 'Commercial Textiles',
      href: '/products/commercial-textiles',
      icon: Package,
    },
    {
      name: 'Natural Synthetic Fabrics',
      href: '/products/natural-synthetic-fabrics',
      icon: Award,
    },
    {
      name: 'Packaging Solutions',
      href: '/products/packaging-solutions',
      icon: Package,
    },
  ];

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Why Us', href: '/whyus', icon: Award },
    // { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div
              className="flex-shrink-0 group"
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.classList.add('glow');
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  img.classList.remove('glow');
                }
              }}
            >
              {/* Audio Mute/Unmute Button */}

              <div className="flex items-center space-x-4 group cursor-pointer">
                <Link href="/" className="relative group">
                  <Image
                    src="/lenlogo.png" // full logo path
                    // src="/cicon.png" // icon logo path
                    alt="Cloveson Logo"
                    width={50}
                    height={50}
                    className="w-auto h-12 rounded-2xl transition-all duration-800 group-hover:scale-105 group-hover:shadow-[0_0_24px_6px_#39b54b88,0_0_8px_2px_#2d8f3a55]"
                  />
                </Link>
                <style jsx global>{`
                  .glow {
                    box-shadow: 0 0 24px 6px #39b54b88, 0 0 8px 2px #2d8f3a55;
                    transition: box-shadow 0.3s;
                  }
                `}</style>
              </div>
              {/* <div className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Cloveson
              </div> */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative px-4 py-2 transition-all duration-300 font-medium
                    ${
                      pathname === item.href
                        ? 'text-[#39b54b] font-semibold'
                        : 'text-gray-700 hover:text-[#39b54b]'
                    }
                  `}
                >
                  <span className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item.name}</span>
                  </span>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] transition-all duration-300
                    ${
                      pathname === item.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }
                  `}
                  ></div>
                </a>
              ))}

              {/* Products Dropdown */}
            </div>

            {/* Request Quote Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Request Quote Button */}
              <a
                href="/contact"
                className="hidden sm:inline-flex items-center space-x-2 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-[#2d8f3a] hover:to-[#39b54b]"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-2
                    ${
                      pathname === item.href
                        ? 'bg-gradient-to-r from-[#39b54b]/10 to-[#2d8f3a]/10 text-[#39b54b] font-semibold'
                        : 'hover:bg-gradient-to-r hover:from-[#39b54b]/10 hover:to-[#2d8f3a]/10 text-gray-700'
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-[#39b54b]" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}

              {/* Mobile Request Quote */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="/request-quote"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white p-3 rounded-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
