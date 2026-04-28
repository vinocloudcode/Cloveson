'use client';
import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  Send,
  Clock,
  Award,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Globe,
  Building,
  Users,
  Zap,
  Star,
  ArrowRight,
  Play,
} from 'lucide-react';

const ContactPage = () => {
  const createInitialFormData = (): ContactFormData => ({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: '',
    subject: '',
    message: '',
  });

  const [formData, setFormData] = useState<ContactFormData>(
    createInitialFormData,
  );

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null,
  );
  const [submitMessage, setSubmitMessage] = useState('');

  const industries = [
    'Healthcare & Pharmaceuticals',
    'Food & Beverage Packaging',
    'Cosmetics & Personal Care',
    'Agriculture & Spices',
    'Manufacturing & Industrial',
    'Retail & E-commerce',
    'Other',
  ];

  const subjects = [
    'Product Inquiry',
    'Quote Request',
    'Technical Support',
    'Partnership Opportunity',
    'Sample Request',
    'Bulk Order',
    'Custom Solution',
  ];

  interface ContactFormData {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    industry: string;
    subject: string;
    message: string;
  }

  interface Errors {
    [key: string]: string | undefined;
  }

  interface HandleInputChangeEvent
    extends React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > {}

  const handleInputChange = (e: HandleInputChangeEvent) => {
    const { name, value } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    setFormData((prev: ContactFormData) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev: Errors) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Errors> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim())
      newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const payload = {
        access_key: '4288d52f-76f4-427e-a527-f4e9899c8c81',
        name: formData.fullName,
        email: formData.email,
        company: formData.companyName,
        phone: formData.phone,
        industry: formData.industry,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setSubmitMessage(
          'Thanks for reaching out! Our team will get back to you shortly.',
        );
        setErrors({});
        setFormData(createInitialFormData());
      } else {
        throw new Error(result.message || 'Request failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Unable to send your message right now. Please try again or contact us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  interface AnimatedCounterProps {
    end: number;
    duration?: number;
  }

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2000,
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number | undefined;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  interface FloatingElementProps {
    children: React.ReactNode;
    delay?: number;
  }

  const FloatingElement: React.FC<FloatingElementProps> = ({
    children,
    delay = 0,
  }) => (
    <div
      className="animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        animationIterationCount: 'infinite',
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white">
        {/* Background image with low opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/contact/con2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />
        <div className="absolute inset-0 bg-black/10 z-10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24 z-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium">
                Connect with Global Spice Leaders
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Let&#39;s Grow Your Business
              <span className="block text-green-200">Together</span>
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-8 animate-slide-up delay-200">
              From premium spices to custom packaging solutions - we&#39;re here
              to elevate your business
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4 animate-slide-up delay-300">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Globe className="w-5 h-5" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5" />
                <span>ISO Certified</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-30"></div>
      </div>

      {/* Stats Section */}
      {/* <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#39b54b] mb-2">
                <AnimatedCounter end={25} />+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#39b54b] mb-2">
                <AnimatedCounter end={500} />+
              </div>
              <p className="text-gray-600">Global Clients</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#39b54b] mb-2">
                <AnimatedCounter end={50} />+
              </div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-[#39b54b] mb-2">
                <AnimatedCounter end={99} />%
              </div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-[#39b54b]/10 rounded-xl">
                <MessageCircle className="w-6 h-6 text-[#39b54b]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Get In Touch
                </h2>
                <p className="text-gray-600">We&#39;d love to hear from you</p>
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 text-sm font-medium">
                  {submitMessage}
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 text-sm font-medium">
                  {submitMessage}
                </p>
              </div>
            )}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="4288d52f-76f4-427e-a527-f4e9899c8c81"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 ${
                      errors.companyName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your Company"
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.companyName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50"
                    placeholder="+91 12345 67890"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry Type *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 ${
                      errors.industry ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.industry}
                    </p>
                  )}
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message/Requirements *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 border bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-300 group-hover:border-[#39b54b]/50 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Tell us about your requirements, quantities, specifications, or any questions..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#39b54b] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#2d8f3a] transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formData.industry === 'Healthcare & Pharmaceuticals' && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <p className="text-blue-800 font-medium">
                      Healthcare Priority Service
                    </p>
                  </div>
                  <p className="text-blue-600 text-sm mt-1">
                    Healthcare clients receive quotes within 12 hours!
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-[#39b54b]/10 rounded-xl group-hover:bg-[#39b54b]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[#39b54b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91 73395 55309</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-[#39b54b]/10 rounded-xl group-hover:bg-[#39b54b]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[#39b54b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@clovesinc.org</p>
                    <p className="text-gray-600">harsha@clovesinc.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                  <div className="p-3 bg-[#39b54b]/10 rounded-xl group-hover:bg-[#39b54b]/20 transition-colors">
                    <MapPin className="w-6 h-6 text-[#39b54b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Offices Adress
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <strong>India:</strong> Coimbatore,Tamilnadu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Quality Assurance & Trust
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our quality assurance and manufacturing processes
              </p>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                &quot;Cloveson has been our trusted spice supplier for over 3
                years. Their quality consistency and timely delivery have helped
                us maintain our product standards across 50+ locations.&quot;
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#39b54b]/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#39b54b]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">
                    Procurement Manager, FoodChain Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <FloatingElement>
              <div className="w-16 h-16 bg-[#39b54b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#39b54b]" />
              </div>
            </FloatingElement>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-600">
              Round-the-clock assistance for urgent requirements
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <FloatingElement delay={1}>
              <div className="w-16 h-16 bg-[#39b54b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#39b54b]" />
              </div>
            </FloatingElement>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Quick Response
            </h3>
            <p className="text-gray-600">Average response time under 2 hours</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
            <FloatingElement delay={2}>
              <div className="w-16 h-16 bg-[#39b54b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-[#39b54b]" />
              </div>
            </FloatingElement>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Serving clients across 50+ countries worldwide
            </p>
          </div>
        </div>

        {/* Resource Hub */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Resource Hub
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our products and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-[#39b54b]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#39b54b]/20 transition-colors">
                <FileText className="w-6 h-6 text-[#39b54b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Product Catalog
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete range of spices and packaging solutions
              </p>
              <div className="flex items-center text-[#39b54b] text-sm font-medium">
                <span>Download PDF</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-[#39b54b]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#39b54b]/20 transition-colors">
                <Award className="w-6 h-6 text-[#39b54b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Quality Standards
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our quality assurance and manufacturing processes
              </p>
              <div className="flex items-center text-[#39b54b] text-sm font-medium">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-[#39b54b]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#39b54b]/20 transition-colors">
                <Building className="w-6 h-6 text-[#39b54b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Success stories from our global clients
              </p>
              <div className="flex items-center text-[#39b54b] text-sm font-medium">
                <span>Read Stories</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <div className="w-12 h-12 bg-[#39b54b]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#39b54b]/20 transition-colors">
                <Play className="w-6 h-6 text-[#39b54b]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Virtual Tour
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Take a virtual tour of our processing facilities
              </p>
              <div className="flex items-center text-[#39b54b] text-sm font-medium">
                <span>Watch Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest updates on new products, industry insights, and
              special offers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button className="bg-white text-[#39b54b] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </div>

            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      {/* <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <button className="w-14 h-14 bg-[#39b54b] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <PhoneCall className="w-6 h-6" />
        </button>
      </div> */}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
