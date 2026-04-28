"use client";
import { useState, useEffect } from 'react';
import { X, User, Phone, Building, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ClovesAdModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsOpen(true), 10000);
    }, []);

    // Success notification state
    const [showNotification, setShowNotification] = useState(false);

    // Handle form submit
    const handleRequestSample = () => {
        setShowSuccess(true);
        setIsOpen(false);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
    };

    return (
        <>
            {/* Modal */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-500 ease-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black bg-opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>

                {/* Modal Content */}
                <div
                    className={`relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto transition-all duration-500 ease-out transform ${
                        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none z-10"
                        aria-label="Close modal"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Banner Image */}
                    <Image
                        src="/images/banner1.jpg"
                        alt="Cloveson. - Latest Update"
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover rounded-t-xl"
                        style={{
                            width: '100%',
                            height: '160px',
                            objectFit: 'cover',
                            borderTopLeftRadius: '0.75rem',
                            borderTopRightRadius: '0.75rem',
                        }}
                        priority
                    />

                    {/* Modal Body */}
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-[#39b54b]">
                                📦 Request a Sample Kit
                            </h2>
                            <p className="text-gray-600 mt-1 text-sm">
                                Get free samples of our premium autoclave liners & packaging solutions.
                            </p>
                        </div>

                        {/* Form */}
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39b54b]"
                                        placeholder="Enter your name"
                                    />
                                    <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="company" className="block text-gray-700 text-sm font-medium mb-1">
                                    Company Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39b54b]"
                                        placeholder="Your organization"
                                    />
                                    <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39b54b]"
                                        placeholder="you@example.com"
                                    />
                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-[#39b54b] hover:bg-[#2f8d3d] text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#39b54b] focus:ring-opacity-50"
                                onClick={handleRequestSample}
                            >
                                Request Sample
                            </button>
                        </form>

                        <p className="mt-4 text-xs text-gray-500 text-center">
                            We respect your privacy. Your information will not be shared.
                        </p>
                    </div>
                </div>
            </div>

            {/* Success Notification */}
            {showNotification && (
                <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white border border-[#39b54b] shadow-lg rounded-lg px-6 py-4 flex items-center space-x-3 animate-fade-in">
                    <span className="text-2xl">🎉</span>
                    <div>
                        <h3 className="text-lg font-bold text-[#39b54b] mb-1">Request Sent!</h3>
                        <p className="text-gray-600 text-sm">Thank you for requesting a sample kit. We&apos;ll contact you soon.</p>
                    </div>
                </div>
            )}
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in {
                    animation: fade-in 0.5s;
                }
            `}</style>
        </>
    );
}
