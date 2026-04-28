'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FlaskConical,
  Package,
  Shirt,
  Bed,
  Thermometer,
  Recycle,
  Shield,
  Truck,
  Award,
  Leaf,
  ChevronRight,
  Globe,
  Star,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const productCategories = [
    {
      id: 'autoclave',
      title: 'Autoclave Liners',
      icon: FlaskConical,
      color: 'from-emerald-400 to-teal-600',
      description:
        'High-temperature atactic polypropylene liners for medical waste autoclave facilities - the only manufacturer with global supply capability',
      products: [
        {
          name: 'Atactic PP autoclave Liners',
          features: [
            'Withstand up to 150°C',
            'Allows higher steam penetration',
            'Enables lower cook time and lower energy cost',
            'Cost effective in purchase price and cooking cost',
            'Available in any size (100"x80", 75"x90", 75"x110", 100"x120", 130"x150")',
          ],
          icon: Thermometer,
          image: '/adi/13.jpg',
          route: '/products/autoclave-liners/hightemp-plastic-liners',
        },
        {
          name: 'Textile Liners',
          features: [
            'Atactic polypropylene & cotton blends',
            'Heat-resistant and easy to handle',
            'Allows higher steam penetration',
            'Enables lower cook time and lower energy cost',
          ],
          icon: Shirt,
          image: '/Product/al/al2.jpg',
          route: '/products/autoclave-liners/textile-liners',
        },
        {
          name: 'Jute/Hessian Liners',
          features: [
            'Popular in Australia',
            'Biodegradable & heavy-duty',
            'Suitable for unshredded medical waste',
            'Allows higher steam penetration',
            'Enables lower cook time and lower energy cost',
          ],
          icon: Leaf,
          image: '/Product/al/al3.jpg',
          route: '/products/autoclave-liners/jute-hessian-liners',
        },
        {
          name: 'Woven Plastic Liners',
          features: [
            'Allows higher steam penetration',
            'Enables lower cook time and lower energy cost',
            'Cost effective in purchase price and cooking cost',
            'Lightweight yet strong',
            'Available in various sizes',
          ],
          icon: Shield,
          image: '/Product/al/al4.jpg',
          route: '/products/autoclave-liners/woven-plastic-liners',
        },
      ],
    },
    {
      id: 'packaging',
      title: 'Industrial Packaging',
      icon: Package,
      color: 'from-blue-400 to-cyan-600',
      description:
        'Robust packaging options for bulk materials across industries',
      products: [
        {
          name: 'Bulk Bags',
          features: [
            'Carry loads up to 1 metric ton',
            'Used for chemicals, grains, minerals',
            'Heavy-duty construction',
          ],
          icon: Package,
          image: '/Product/ps/ps1.jpg',
          route: '/products/packaging-solutions/bulk-bags',
        },
        {
          name: 'Poly-Woven Bags',
          features: [
            'Tear-resistant construction',
            'Custom sizes & designs',
            'Versatile for cement, fertilizers',
          ],
          icon: Shield,
          image: '/Product/ps/ps2.jpg',
          route: '/products/packaging-solutions/polywoven-bags',
        },
        {
          name: 'Mesh Bags',
          features: [
            'Breathable & lightweight',
            'Perfect for fruits, vegetables',
            'Eco-friendly design',
          ],
          icon: Globe,
          image: '/Product/ps/ps3.jpeg',
          route: '/products/packaging-solutions/mesh-bags',
        },
        {
          name: 'Multiwall Paper Sacks',
          features: [
            'Multi-layered for strength',
            'Environmentally friendly',
            'Protective packaging',
          ],
          icon: Leaf,
          image: '/Product/ps/ps4.png',
          route: '/products/packaging-solutions/multiwall-paper-sacks',
        },
      ],
    },
    // {
    //   id: 'fabrics',
    //   title: 'Natural & Synthetic Fabrics',
    //   icon: Shirt,
    //   color: 'from-purple-400 to-pink-600',
    //   description:
    //     'Durable fabrics for packaging, protection, and reinforcement',
    //   products: [
    //     {
    //       name: 'Hessian (Jute)',
    //       features: [
    //         'Eco-friendly and biodegradable',
    //         'High tensile strength',
    //         'Industrial packaging use',
    //       ],
    //       icon: Leaf,
    //       image: '/Product/nfs/nfs1.jpg',
    //       route: '/products/natural-synthetic-fabrics/hessian-jute',
    //     },
    //     {
    //       name: 'Calico',
    //       features: [
    //         'Soft, breathable fabric',
    //         'Medical and commercial applications',
    //         'Customizable for different needs',
    //       ],
    //       icon: Shirt,
    //       image: '/Product/nfs/nfs2.jpg',
    //       route: '/products/natural-synthetic-fabrics/calico',
    //     },
    //     {
    //       name: 'Poly-Woven Fabrics',
    //       features: [
    //         'Tear-resistant and long-lasting',
    //         'Heavy-duty packaging',
    //         'Industrial grade',
    //       ],
    //       icon: Shield,
    //       image: '/Product/nfs/nfs3.jpg',
    //       route: '/products/natural-synthetic-fabrics/poly-woven-fabrics',
    //     },
    //     {
    //       name: 'Woven & Knitted Fabrics',
    //       features: [
    //         'Reinforced for industrial use',
    //         'Custom sizes & designs',
    //         'Versatile applications',
    //       ],
    //       icon: Globe,
    //       image: '/Product/nfs/nfs4.jpg',
    //       route: '/products/natural-synthetic-fabrics/woven-knitted-fabrics',
    //     },
    //   ],
    // },
    // {
    //   id: 'textiles',
    //   title: 'Commercial Textiles',
    //   icon: Bed,
    //   color: 'from-orange-400 to-red-600',
    //   description:
    //     'Designed for demanding healthcare and hospitality environments',
    //   products: [
    //     {
    //       name: 'Bedding',
    //       features: [
    //         'Hospital-grade comfort',
    //         'High-temperature washable',
    //         'Durable construction',
    //       ],
    //       icon: Bed,
    //       image: '/Product/ct/ct1.jpeg',
    //       route: '/products/commercial-textiles/bedding',
    //     },
    //     {
    //       name: 'Towels',
    //       features: [
    //         'Highly absorbent',
    //         'Industrial-grade quality',
    //         'Long-lasting performance',
    //       ],
    //       icon: Shirt,
    //       image: '/Product/ct/ct2.jpg',
    //       route: '/products/commercial-textiles/towels',
    //     },
    //     {
    //       name: 'Laundry Bags',
    //       features: [
    //         'Tear-resistant material',
    //         'Customizable for volume',
    //         'Commercial grade',
    //       ],
    //       icon: Package,
    //       image: '/Product/ct/ct3.jpg',
    //       route: '/products/commercial-textiles/laundry-bags',
    //     },
    //     {
    //       name: 'Shower Curtains',
    //       features: [
    //         'Hygiene-focused design',
    //         'Easy maintenance',
    //         'Customizable options',
    //       ],
    //       icon: Shield,
    //       image: '/Product/ct/ct4.jpg',
    //       route: '/products/commercial-textiles/shower-curtains',
    //     },
    //   ],
    // },
  ];

  const keyFeatures = [
    {
      icon: Leaf,
      title: 'Quality Materials',
      description: 'Eco-friendly & biodegradable options',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description:
        'Advanced manufacturing technology and strict quality control processes.',
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Tailored for worldwide distribution',
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Supporting quality practices',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-[url('/images/hero/b1.jpg')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Premium
              </span>
              <span className="bg-gradient-to-r from-[#39b54b] to-emerald-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              High-quality, innovative solutions for healthcare, industrial and
              packaging sectors worldwide
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white transform transition-all duration-500 hover:bg-[#39b54b]/20 hover:scale-105 ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {productCategories.map((category, categoryIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`mb-24 transition-all duration-1000 ease-out
            ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }
          `}
            style={{ transitionDelay: `${categoryIndex * 150}ms` }}
          >
            {/* Category Header */}
            <div className="text-center mb-16">
              <div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${category.color} mb-6 transform transition-all duration-500 hover:scale-110 hover:rotate-12`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.products.map((product, productIndex) => (
                <Link
                  key={productIndex}
                  href={product.route}
                  className={`
        group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl
        transition duration-700 transform hover:-translate-y-2 hover:scale-[1.03]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
                  style={{
                    transitionDelay: `${
                      categoryIndex * 150 + productIndex * 80
                    }ms`,
                  }}
                  onMouseEnter={() =>
                    setHoveredProduct(`${categoryIndex}-${productIndex}`)
                  }
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                      src={product.image || '/images/hero/b1.jpg'}
                      alt={product.name}
                      className="object-cover w-full h-full"
                      fill
                      sizes="100vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`
              w-12 h-12 rounded-xl bg-gradient-to-r ${
                category.color
              } flex items-center justify-center
              transition duration-300 ease-in-out
              group-hover:rotate-12 group-hover:scale-110 group-hover:brightness-110
              ${
                hoveredProduct === `${categoryIndex}-${productIndex}`
                  ? 'shadow-lg shadow-emerald-400/40'
                  : ''
              }
            `}
                      >
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#39b54b] transition-colors duration-300">
                        {product.name}
                      </h3>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className={`
                flex items-start gap-3 transition duration-300
                ${
                  hoveredProduct === `${categoryIndex}-${productIndex}`
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-2 opacity-60'
                }
              `}
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#39b54b] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div
                      className={`
            mt-6 flex items-center gap-2 font-semibold text-sm
            transition duration-300 ease-in-out
            ${
              hoveredProduct === `${categoryIndex}-${productIndex}`
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-4 pointer-events-none'
            }
          `}
                    >
                      <button
                        className={`
                          flex items-center gap-2 px-4 py-2 rounded-md
                          bg-gradient-to-r from-[#39b54b] to-emerald-500
                          text-white font-bold tracking-wide shadow-md border-2 border-[#39b54b]
                          transition-all duration-300
                          group-hover:scale-105 group-hover:shadow-emerald-300/40
                          focus:outline-none focus:ring-2 focus:ring-[#39b54b] focus:ring-offset-2
                          active:scale-95
                        `}
                        tabIndex={0}
                        aria-label="Learn more about this product"
                      >
                        <span>Learn More </span>
                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      
                    </div>
                  </div>

                  {/* Border Accent */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#39b54b]/30 transition-all duration-500"></div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#39b54b] to-emerald-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Discover how our innovative, high-quality products can meet your
            specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-quote" passHref legacyBehavior>
              <a className="px-8 py-4 bg-white text-[#39b54b] font-bold rounded-full hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
                Get Quote
              </a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#39b54b] transform transition-all duration-300 hover:scale-105 text-center">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
