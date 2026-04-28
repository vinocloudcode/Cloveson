import { FileText, Shield, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-[#39b54b]" />
            <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          </div>
          <p className="text-gray-600">Last Updated: December 15, 2024</p>
          <p className="text-sm text-gray-500 mt-2">
            By accessing or using Clover Inc.'s website, products, or services, you agree to comply with and be bound by these terms and conditions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          
          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#39b54b]" />
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clover Inc. ("we," "us," or "our") provides access to our website, products, and services subject to these Terms of Service. By using our Services, you confirm you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Are at least 18 years old or have parental/legal guardian consent</li>
              <li>Are authorized to enter into legally binding agreements</li>
              <li>Agree to comply with applicable laws and regulations</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#39b54b]" />
              2. Scope of Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">Clover Inc. offers:</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Products</h3>
              <p className="text-gray-700 mb-3">
                Autoclave liners, industrial packaging solutions (bulk bags, poly woven bags, mesh bags, multiwall paper sacks), natural/synthetic fabrics (hessian, calico, poly-woven), and commercial textiles (bedding, towels, laundry bags, shower curtains).
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-700 mb-3">
                Tailored products for healthcare, industrial, and commercial sectors (e.g., high-temperature autoclave liners for medical waste management).
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Global Operations</h3>
              <p className="text-gray-700">
                Services available in North America, Europe, Asia, Australia, and other regions.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you create an account or place an order, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate, complete, and up-to-date information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Notify us immediately of unauthorized access or breaches</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We reserve the right to suspend or terminate accounts violating these Terms or engaging in fraudulent activity.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Product Descriptions and Warranties</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Accuracy of Information</h3>
                <p className="text-gray-700">
                  We strive to ensure product descriptions, specifications, and pricing are accurate. However, we do not guarantee the completeness or error-free nature of product listings.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Customization</h3>
                <p className="text-gray-700">
                  Products may be customized to meet regional or client-specific requirements (e.g., Jute/Hessian Liners preferred in Australia).
                </p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Warranty Disclaimer</h3>
                <p className="text-gray-700">
                  Products are provided "as is" without warranties of any kind, express or implied. We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Orders and Payment</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Order Acceptance</h3>
                <p className="text-gray-700 text-sm">
                  All orders are subject to our acceptance and availability. We reserve the right to refuse or cancel orders at any time.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pricing and Taxes</h3>
                <p className="text-gray-700 text-sm">
                  Prices are listed in USD unless otherwise specified. You are responsible for applicable taxes, duties, or fees.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Shipping and Delivery</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Global Shipments:</strong> Orders are fulfilled via logistics partners; delivery times vary by region</li>
              <li><strong>Risk of Loss:</strong> Title and risk transfer to you upon delivery</li>
              <li><strong>International Compliance:</strong> You agree to comply with all export/import laws, including customs documentation</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Returns and Refunds</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Return Policy</h3>
                  <p className="text-gray-700 text-sm">
                    Returns require prior authorization within 30 days of delivery. Products must be unused and in original packaging.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Refunds</h3>
                  <p className="text-gray-700 text-sm">
                    Approved refunds are processed within 5-7 business days to the original payment method.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Defective Items</h3>
                  <p className="text-gray-700 text-sm">
                    Contact us immediately with photos and details for replacements or refunds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on our website (text, graphics, logos, product designs) is owned by Clover Inc. or its licensors and protected by copyright, trademark, and trade secret laws.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-gray-700 font-medium">You may not:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                <li>Reproduce, distribute, or modify our content without written permission</li>
                <li>Use our trademarks (e.g., "Clover Inc.") without prior consent</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, Clover Inc. shall not be liable for indirect, incidental, or consequential damages (e.g., lost profits, business interruption) or claims arising from your use of or reliance on our Services.
            </p>
            <p className="text-gray-700 font-medium">
              Our total liability for any claim shall not exceed the amount paid by you for the product/service in question.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India. Disputes shall be resolved in the courts of Chennai, India.
            </p>
          </section>

          {/* Updates Notice */}
          <div className="bg-[#39b54b] bg-opacity-10 border border-[#39b54b] border-opacity-30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms periodically. Notice of material changes will be posted on our website or sent to registered users. Continued use of our Services after updates constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Contact Section */}
          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-6">For questions about these Terms, contact:</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#39b54b] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-700 text-sm">harsha.soundararajan@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#39b54b] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone/WhatsApp</p>
                  <p className="text-gray-700 text-sm">+91 7339555309</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#39b54b] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-700 text-sm">Tamil Nadu - India</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Commitment to Quality and Ethics</h3>
              <p className="text-gray-700 text-sm">
                Clover Inc. is dedicated to ethical business practices and environmental stewardship. These Terms reflect our commitment to transparency, quality, and global compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}