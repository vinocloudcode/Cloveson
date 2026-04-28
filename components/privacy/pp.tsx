"use client";
import { Shield, Mail, Phone, MapPin, Clock, Users, Lock, Globe, FileText, Eye, Download, Trash2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 15, 2024";
  const effectiveDate = "March 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-[#39b54b]" />
            <span className="text-sm font-medium text-[#39b54b] uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            At Clover Inc, we are committed to protecting your privacy and ensuring the security of your personal and business information.
          </p>
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Effective Date: {effectiveDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Cloveson. ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal and business information. This Privacy Policy explains how we collect, use, disclose, and safeguard data through our website, products, services, and communications. By interacting with Clover Inc., you agree to the terms outlined below.
            </p>
          </div>

          {/* Section 1: Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#39b54b]" />
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              We collect data directly from you, automatically through your use of our website, or from third-party sources. This includes:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">a. Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Contact Details:</strong> Name, job title, company name, email address, phone number, and mailing address (e.g., when submitting inquiries, requests, or orders).</li>
                  <li><strong>Professional Information:</strong> Industry, company size, and business needs (e.g., when requesting tailored solutions).</li>
                  <li><strong>Payment Information:</strong> Financial/billing details (processed securely by third-party payment providers, not stored by us).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">b. Technical Data</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Device and Usage Information:</strong> IP address, browser type, operating system, pages visited, and time spent on our website.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance user experience, analyze trends, and personalize content (see Section 8 for details).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">c. Sensitive Data</h3>
                <p className="text-gray-700"><strong>Healthcare-Related Information:</strong> If you operate in the medical sector, we may process limited data related to waste management requirements (e.g., types of waste handled).</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">d. Third-Party Sources</h3>
                <p className="text-gray-700"><strong>Business Partners/Service Providers:</strong> Data shared by logistics partners, payment processors, or vendors for order fulfillment.</p>
              </div>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#39b54b]" />
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use your data to:</p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Provide Products/Services:</strong> Process orders, fulfill requests, and deliver autoclave liners, packaging solutions, and textiles.</li>
              <li><strong>Customer Support:</strong> Respond to inquiries, resolve issues, and manage accounts.</li>
              <li><strong>Marketing:</strong> Share updates about products, promotions, or quality initiatives (opt-out available).</li>
              <li><strong>Operational Improvements:</strong> Analyze website traffic, optimize user experience, and improve product design.</li>
              <li><strong>Compliance:</strong> Meet legal obligations, enforce terms of service, and protect our rights.</li>
            </ul>
          </section>

          {/* Section 3: Data Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#39b54b]" />
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">We do not sell or rent your data. However, we may share information with:</p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Service Providers:</strong> Third parties handling payments, shipping, IT services, or marketing (under strict confidentiality agreements).</li>
              <li><strong>Legal Authorities:</strong> If required by law, regulation, or court order.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, data may be transferred (with notice to affected users).</li>
            </ul>
          </section>

          {/* Section 4: International Data Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#39b54b]" />
              4. International Data Transfers
            </h2>
            <p className="text-gray-700">
              Cloveson. operates globally. Your data may be transferred to countries where we have offices (e.g., India, U.S., Australia) or where our service providers operate. We ensure such transfers comply with applicable laws (e.g., standard contractual clauses).
            </p>
          </section>

          {/* Section 5: Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#39b54b]" />
              5. Data Security
            </h2>
            <p className="text-gray-700 mb-4">We implement robust safeguards to protect your data:</p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Encryption:</strong> SSL/TLS for secure website browsing and payments.</li>
              <li><strong>Access Controls:</strong> Role-based access to internal systems.</li>
              <li><strong>Employee Training:</strong> Regular cybersecurity awareness programs.</li>
              <li><strong>Third-Party Audits:</strong> Periodic reviews of our security practices.</li>
            </ul>
            <p className="text-gray-700 mt-4 italic">
              Despite our efforts, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          {/* Section 6: Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#39b54b]" />
              6. Your Rights
            </h2>
            <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may have rights including:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-[#39b54b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Access:</strong> Request copies of your data.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#39b54b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Correction:</strong> Update inaccurate or incomplete information.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trash2 className="w-5 h-5 text-[#39b54b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Deletion:</strong> Ask us to erase your data (subject to legal retention requirements).
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#39b54b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Objection:</strong> Opt out of marketing or automated decision-making.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Download className="w-5 h-5 text-[#39b54b] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Portability:</strong> Receive your data in a structured format.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              For questions, complaints, or requests regarding your data, please contact:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Clover Inc.</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#39b54b]" />
                  <span className="text-gray-700">harsha.soundararajan@hotmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#39b54b]" />
                  <span className="text-gray-700">+91 7339555309</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#39b54b]" />
                  <span className="text-gray-700">Tamil Nadu - India</span>
                </div>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="bg-[#39b54b]/5 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Commitment to Quality and Trust</h2>
            <p className="text-gray-700">
              At Cloveson, our dedication to quality extends to data privacy. We strive to protect both the environment and your information through ethical, transparent practices. This policy aligns with Cloveson's mission to innovate responsibly while prioritizing customer trust and global compliance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}