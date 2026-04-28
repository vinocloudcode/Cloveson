// app/request-quote/page.tsx
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Check,
  Download,
  Mail,
  Upload,
  Leaf,
  Shield,
  Award,
  Building2,
  Phone,
  MapPin,
  Calendar,
  User,
  FileText,
  Package,
  Recycle,
  Heart,
  Star,
  AlertCircle,
  Info,
  Zap,
  Clock,
  Truck,
  Globe,
  Filter,
  X,
  Plus,
  Minus,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { generateQuotePDF } from './pdfGenerator';

const productCategories = {
  'Autoclave Liners': [
    { id: 'al-1', name: 'High-Temperature Sterilization Bags', price: '$89' },
    { id: 'al-2', name: 'Medical Waste Disposal Liners', price: '$156' },
    { id: 'al-3', name: 'Steam Sterilization Pouches', price: '$234' },
    { id: 'al-4', name: 'Indicator Strip Bags', price: '$67' },
  ],
  'Packaging Solutions': [
    { id: 'ps-1', name: 'Biodegradable Food Containers', price: '$45' },
    { id: 'ps-2', name: 'Compostable Packaging Films', price: '$78' },
    { id: 'ps-3', name: 'Premium Clamshell Boxes', price: '$92' },
    { id: 'ps-4', name: 'Eco-Friendly Wrap Materials', price: '$123' },
  ],
  'Industrial Solutions': [
    { id: 'is-1', name: 'Heavy-Duty Containment Bags', price: '$189' },
    { id: 'is-2', name: 'Chemical-Resistant Liners', price: '$267' },
    { id: 'is-3', name: 'Anti-Static Packaging', price: '$134' },
    { id: 'is-4', name: 'Temperature-Controlled Bags', price: '$198' },
  ],
  'Specialty Products': [
    { id: 'sp-1', name: 'Custom Printed Solutions', price: '$345' },
    { id: 'sp-2', name: 'Barrier Protection Films', price: '$456' },
    { id: 'sp-3', name: 'Vacuum Seal Pouches', price: '$167' },
    { id: 'sp-4', name: 'Multi-Layer Composites', price: '$289' },
  ],
};

const RequestQuotePage = () => {
  const [openAccordions, setOpenAccordions] = useState<{
    [category: string]: boolean;
  }>({});
  const [selectedProducts, setSelectedProducts] = useState<{
    [productId: string]: boolean;
  }>({});
  const [quantities, setQuantities] = useState<{ [productId: string]: number }>(
    {},
  );
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStatus, setGenerationStatus] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [estimatedTotal, setEstimatedTotal] = useState(0);
  const [formData, setFormData] = useState({
    industry: '',
    hospitalName: '',
    facilityType: '',
    sustainability: false,
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    deliveryTimeline: '',
    customDate: '',
    gdprConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const calculateEstimatedTotal = useCallback(() => {
    let total = 0;
    Object.entries(selectedProducts).forEach(([productId, isSelected]) => {
      if (isSelected) {
        const category = Object.keys(productCategories).find((cat) =>
          productCategories[cat as keyof typeof productCategories].some(
            (p: any) => p.id === productId,
          ),
        );
        if (category) {
          const product = productCategories[
            category as keyof typeof productCategories
          ].find((p: any) => p.id === productId);
          if (product) {
            const price = parseFloat(product.price.replace('$', ''));
            const quantity = quantities[productId] || 1;
            total += price * quantity;
          }
        }
      }
    });
    setEstimatedTotal(total);
  }, [selectedProducts, quantities]);

  useEffect(() => {
    calculateEstimatedTotal();
  }, [calculateEstimatedTotal]);

  // Auto-advance steps based on form completion
  useEffect(() => {
    const selectedCount =
      Object.values(selectedProducts).filter(Boolean).length;

    if (selectedCount > 0 && currentStep === 1) {
      setCurrentStep(2);
    } else if (formData.industry && currentStep === 2) {
      setCurrentStep(3);
    } else if (
      formData.name &&
      formData.email &&
      formData.company &&
      currentStep === 3
    ) {
      setCurrentStep(4);
    }
  }, [selectedProducts, formData, currentStep]);

  const validateForm = useCallback(() => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.industry) errors.industry = 'Industry is required';
    if (!formData.gdprConsent) errors.gdprConsent = 'GDPR consent is required';

    const selectedCount =
      Object.values(selectedProducts).filter(Boolean).length;
    if (selectedCount === 0)
      errors.products = 'Please select at least one product';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData, selectedProducts]);

  const steps = [
    {
      id: 1,
      title: 'Filter & Select',
      icon: Filter,
      description: 'Choose your products',
    },
    {
      id: 2,
      title: 'Industry Info',
      icon: Building2,
      description: 'Tell us about your business',
    },
    {
      id: 3,
      title: 'Contact Details',
      icon: User,
      description: 'Your information',
    },
    {
      id: 4,
      title: 'Review & Submit',
      icon: CheckCircle,
      description: 'Finalize your quote',
    },
  ];

  const filters = [
    'Medical Waste Sterilization',
    'Biodegradable',
    'High Temperature',
    'Chemical Resistant',
    'Food Grade',
    'Anti-Static',
  ];

  const industries = [
    'Healthcare',
    'Agriculture',
    'Hospitality',
    'Manufacturing',
    'Food Service',
    'Laboratory',
    'Pharmaceutical',
    'Veterinary',
  ];

  interface Product {
    id: string;
    name: string;
    price: string;
  }

  interface ProductCategories {
    [category: string]: Product[];
  }

  interface AccordionState {
    [category: string]: boolean;
  }

  interface SelectedProductsState {
    [productId: string]: boolean;
  }

  interface QuantitiesState {
    [productId: string]: number;
  }

  interface FormData {
    industry: string;
    hospitalName: string;
    facilityType: string;
    sustainability: boolean;
    name: string;
    company: string;
    email: string;
    phone: string;
    region: string;
    deliveryTimeline: string;
    customDate: string;
    gdprConsent: boolean;
  }

  const toggleAccordion = (category: string) => {
    setOpenAccordions((prev: AccordionState) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  interface ToggleProductFn {
    (productId: string): void;
  }

  const toggleProduct: ToggleProductFn = (productId) => {
    setSelectedProducts((prev: SelectedProductsState) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  interface UpdateQuantityFn {
    (productId: string, quantity: number): void;
  }

  const updateQuantity: UpdateQuantityFn = (productId, quantity) => {
    setQuantities((prev: QuantitiesState) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  interface ToggleFilterFn {
    (filter: string): void;
  }

  const toggleFilter: ToggleFilterFn = (filter) => {
    setActiveFilters((prev: string[]) =>
      prev.includes(filter)
        ? prev.filter((f: string) => f !== filter)
        : [...prev, filter],
    );
  };

  interface HandleInputChangeFn {
    (field: keyof FormData, value: string | boolean): void;
  }

  const handleInputChange: HandleInputChangeFn = (field, value) => {
    setFormData((prev: FormData) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateQuote = async () => {
    // Clear previous errors
    setFormErrors({});

    // Validate form
    if (!validateForm()) {
      // Show error message
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    setIsGenerating(true);
    setGenerationStatus('Validating information...');

    try {
      // Simulate validation delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      setGenerationStatus('Generating PDF quote...');

      const pdfResult = generateQuotePDF(
        formData,
        selectedProducts,
        quantities,
        productCategories,
      );

      if (!pdfResult.success) {
        throw new Error(pdfResult.error);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setGenerationStatus('Preparing email...');

      await new Promise((resolve) => setTimeout(resolve, 500));
      setGenerationStatus('Opening email client...');

      // Show success popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

      // Small delay for UX
      setTimeout(() => {
        setIsSubmitted(true);
        setGenerationStatus('Complete!');
        setIsGenerating(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating quote:', error);
      alert('There was an error generating your quote. Please try again.');
      setIsGenerating(false);
    }
  };

  const selectedCount = Object.values(selectedProducts).filter(Boolean).length;

  return (
    <div className="mt-7 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Success Popup */}
      {showPopup && (
        <div className="fixed top-6 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300 ease-out max-w-xs sm:max-w-sm w-full px-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-slide-in border border-green-400">
            <div className="bg-white bg-opacity-20 rounded-full p-2 flex-shrink-0">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm sm:text-lg">Success!</p>
              <p className="text-green-100 text-xs sm:text-sm">
                Your quote is being generated...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Progress Indicator */}
      {isGenerating && (
        <div className="fixed top-4 right-4 left-4 sm:top-6 sm:right-6 sm:left-auto z-50 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-4 sm:p-6 border border-gray-200 animate-slide-in max-w-full sm:max-w-sm">
          <div className="flex items-center gap-3 sm:gap-4 mb-3">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-2 sm:border-3 border-[#39b54b] border-t-transparent"></div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm sm:text-base">
                Generating Quote
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                {generationStatus}
              </p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 sm:h-2">
            <div
              className="bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] h-1 sm:h-2 rounded-full animate-pulse"
              style={{ width: '70%' }}
            ></div>
          </div>
        </div>
      )}

      {/* Step Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-16 sm:top-20 z-40 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Step indicator */}
        <div className="flex items-center space-x-2 md:space-x-8 overflow-x-auto">
          {steps.map((step, index) => {
        const StepIcon = step.icon;
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div
        key={step.id}
        className="flex items-center flex-shrink-0"
          >
        <div
          className={`flex items-center space-x-2 md:space-x-3 ${
        isActive
          ? 'text-[#39b54b]'
          : isCompleted
          ? 'text-green-600'
          : 'text-gray-400'
          }`}
        >
          <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
          isActive
            ? 'bg-[#39b54b] border-[#39b54b] text-white'
            : isCompleted
            ? 'bg-green-600 border-green-600 text-white'
            : 'border-gray-300 text-gray-400'
        }`}
          >
        {isCompleted ? (
          <Check className="w-3 h-3 md:w-5 md:h-5" />
        ) : (
          <StepIcon className="w-3 h-3 md:w-5 md:h-5" />
        )}
          </div>
          <div className="hidden sm:block">
        <p
          className={`font-medium text-xs md:text-sm ${
            isActive
          ? 'text-[#39b54b]'
          : isCompleted
          ? 'text-green-600'
          : 'text-gray-500'
          }`}
        >
          {step.title}
        </p>
        <p className="text-xs text-gray-400 hidden md:block">
          {step.description}
        </p>
          </div>
        </div>

        {/* Connection line between steps */}
        {index < steps.length - 1 && (
          <div
        className={`h-0.5 w-4 md:w-8 mx-1 md:mx-3 transition-all duration-300 ${
          currentStep > step.id ? 'bg-green-600' : 'bg-gray-300'
        }`}
          />
        )}
          </div>
        );
          })}
        </div>
          </div>

          {/* Mobile step indicator with current step info */}
          <div className="sm:hidden mt-2 text-center">
        <p className="text-xs text-gray-600">
          Step {currentStep} of {steps.length}:{' '}
          {steps[currentStep - 1]?.title}
        </p>
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Filter Section */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-lg md:rounded-xl flex items-center justify-center">
                      <Filter className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        Product Filters
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Narrow down your search
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowFilterPanel(!showFilterPanel)}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors md:hidden"
                  >
                    {showFilterPanel ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  {/* Show filter count on mobile when collapsed */}
                  {!showFilterPanel && activeFilters.length > 0 && (
                    <div className="bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white px-3 py-1 rounded-full text-xs font-medium md:hidden">
                      {activeFilters.length} active
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  showFilterPanel
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
                }`}
              >
                <div className="p-4 md:p-6">
                  {/* Mobile: Stack filters vertically in a scrollable container */}
                  <div className="md:hidden">
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {filters.map((filter) => (
                        <button
                          key={filter}
                          onClick={() => toggleFilter(filter)}
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            activeFilters.includes(filter)
                              ? 'bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <span>{filter}</span>
                          {activeFilters.includes(filter) && (
                            <Check className="h-4 w-4 animate-scale-in" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: Horizontal flex wrap */}
                  <div className="hidden md:flex flex-wrap gap-3">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => toggleFilter(filter)}
                        className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                          activeFilters.includes(filter)
                            ? 'bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white shadow-lg shadow-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                        }`}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{filter}</span>
                          {activeFilters.includes(filter) && (
                            <Check className="h-4 w-4 animate-scale-in" />
                          )}
                        </span>
                        {activeFilters.includes(filter) && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Active filters summary */}
                  {activeFilters.length > 0 && (
                    <div className="mt-4 p-3 md:p-4 bg-green-50 rounded-xl border border-green-200 animate-slide-in">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center space-x-2 text-green-700">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5" />
                          <span className="font-medium text-sm md:text-base">
                            {activeFilters.length} filter
                            {activeFilters.length > 1 ? 's' : ''} applied
                          </span>
                        </div>
                        <button
                          onClick={() => setActiveFilters([])}
                          className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center space-x-1 self-start sm:self-auto"
                        >
                          <X className="h-4 w-4" />
                          <span>Clear all</span>
                        </button>
                      </div>

                      {/* Show active filters on mobile */}
                      <div className="mt-2 md:hidden">
                        <div className="flex flex-wrap gap-2">
                          {activeFilters.map((filter) => (
                            <span
                              key={filter}
                              className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-lg"
                            >
                              {filter}
                              <button
                                onClick={() => toggleFilter(filter)}
                                className="ml-1 hover:text-green-900"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Product Selection */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white p-4 md:p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Package className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        Product Selection
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Choose the products you need for your quote
                      </p>
                    </div>
                  </div>
                  {selectedCount > 0 && (
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                      <div className="bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                        <span className="flex items-center space-x-1 md:space-x-2">
                          <Package className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{selectedCount} selected</span>
                        </span>
                      </div>
                      {estimatedTotal > 0 && (
                        <div className="bg-gray-800 text-white px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                          Est. ${estimatedTotal.toFixed(2)}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {formErrors.products && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-700">
                    <AlertCircle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span className="text-xs md:text-sm">
                      {formErrors.products}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                  {Object.entries(productCategories).map(
                    ([category, products]) => (
                      <div
                        key={category}
                        className="border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-r from-gray-50 to-white"
                      >
                        <button
                          onClick={() => toggleAccordion(category)}
                          className="w-full px-4 py-4 md:px-6 md:py-5 hover:bg-gray-100 transition-all duration-200 flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3 md:space-x-4 min-w-0 flex-1">
                            <div
                              className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                openAccordions[category]
                                  ? 'bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] text-white'
                                  : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                              }`}
                            >
                              <Package className="h-4 w-4 md:h-5 md:w-5" />
                            </div>
                            <div className="text-left min-w-0 flex-1">
                              <h4 className="font-semibold text-base md:text-lg text-gray-800 truncate">
                                {category}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-500">
                                {products.length} products available
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
                            {products.filter((p) => selectedProducts[p.id])
                              .length > 0 && (
                              <div className="bg-green-100 text-green-700 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                                {
                                  products.filter((p) => selectedProducts[p.id])
                                    .length
                                }{' '}
                                <span className="hidden sm:inline">
                                  selected
                                </span>
                              </div>
                            )}
                            {openAccordions[category] ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 transform transition-transform duration-200" />
                            )}
                          </div>
                        </button>

                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            openAccordions[category]
                              ? 'max-h-[1000px] opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-4 pb-4 md:px-6 md:pb-6 bg-white">
                            <div className="grid gap-3 md:gap-4">
                              {products.map((product) => (
                                <div
                                  key={product.id}
                                  className={`p-4 md:p-5 rounded-lg md:rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                                    selectedProducts[product.id]
                                      ? 'border-[#39b54b] bg-green-50 shadow-lg shadow-green-100'
                                      : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                                  }`}
                                  onClick={() => toggleProduct(product.id)}
                                >
                                  <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-center space-x-3 md:space-x-4">
                                      <div
                                        className={`w-5 h-5 md:w-6 md:h-6 rounded-md md:rounded-lg border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                                          selectedProducts[product.id]
                                            ? 'bg-[#39b54b] border-[#39b54b] text-white'
                                            : 'border-gray-300 group-hover:border-gray-400'
                                        }`}
                                      >
                                        {selectedProducts[product.id] && (
                                          <Check className="h-3 w-3 md:h-4 md:w-4" />
                                        )}
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <h5 className="font-semibold text-sm md:text-base text-gray-800 group-hover:text-[#39b54b] transition-colors leading-tight">
                                          {product.name}
                                        </h5>
                                        <p className="text-[#39b54b] font-bold text-base md:text-lg">
                                          {product.price}
                                        </p>
                                      </div>
                                    </div>

                                    {selectedProducts[product.id] && (
                                      <div
                                        className="flex items-center justify-between md:justify-end space-x-3 animate-slide-in pt-2 md:pt-0 border-t md:border-t-0 border-gray-200"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        <label className="text-xs md:text-sm font-medium text-gray-700">
                                          Quantity:
                                        </label>
                                        <div className="flex items-center space-x-1 md:space-x-2">
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              const newQty = Math.max(
                                                1,
                                                (quantities[product.id] || 1) -
                                                  1,
                                              );
                                              updateQuantity(
                                                product.id,
                                                newQty,
                                              );
                                            }}
                                            className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors touch-manipulation"
                                          >
                                            <Minus className="h-3 w-3 md:h-4 md:w-4" />
                                          </button>
                                          <input
                                            type="number"
                                            inputMode="numeric"
                                            min="1"
                                            value={quantities[product.id] || 1}
                                            onChange={(e) => {
                                              e.stopPropagation();
                                              updateQuantity(
                                                product.id,
                                                Number(e.target.value),
                                              );
                                            }}
                                            className="w-12 md:w-16 px-2 py-1 md:px-3 md:py-2 border bg-white border-gray-300 rounded-lg text-center text-sm md:text-base focus:ring-2 focus:ring-[#39b54b] focus:border-transparent"
                                          />
                                          <button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              const newQty =
                                                (quantities[product.id] || 1) +
                                                1;
                                              updateQuantity(
                                                product.id,
                                                newQty,
                                              );
                                            }}
                                            className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors touch-manipulation"
                                          >
                                            <Plus className="h-3 w-3 md:h-4 md:w-4" />
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Industry & Custom Fields */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-xl flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Industry Information
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tell us about your business needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) =>
                        handleInputChange('industry', e.target.value)
                      }
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200 ${
                        formErrors.industry
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                    {formErrors.industry && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.industry}</span>
                      </p>
                    )}
                  </div>

                  {formData.industry === 'Healthcare' && (
                    <div className="animate-slide-in">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hospital/Facility Name
                      </label>
                      <input
                        type="text"
                        value={formData.hospitalName}
                        onChange={(e) =>
                          handleInputChange('hospitalName', e.target.value)
                        }
                        className="w-full px-4 py-3 border bg-white  border-gray-300 rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                        placeholder="Enter facility name"
                      />
                    </div>
                  )}

                  {formData.industry && formData.industry !== 'Healthcare' && (
                    <div className="animate-slide-in">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Facility Type
                      </label>
                      <input
                        type="text"
                        value={formData.facilityType}
                        onChange={(e) =>
                          handleInputChange('facilityType', e.target.value)
                        }
                        className="w-full px-4 py-3 border bg-white border-gray-300 rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                        placeholder="e.g., Manufacturing plant, Restaurant, Lab"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.sustainability}
                      onChange={(e) =>
                        handleInputChange('sustainability', e.target.checked)
                      }
                      className="h-5 w-5 bg-white text-white border-gray-300 rounded focus:ring-[#39b54b] transition-all duration-200"
                    />
                    <span className="text-gray-700 flex items-center space-x-2 group-hover:text-[#39b54b] transition-colors">
                      <Leaf className="h-5 w-5 text-[#39b54b]" />
                      <span className="font-medium">
                        I prioritize eco-friendly and sustainable materials
                      </span>
                    </span>
                  </label>
                  {formData.sustainability && (
                    <div className="mt-2 ml-8 text-sm text-green-700 bg-green-100 p-2 rounded-lg animate-slide-in">
                      <p className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>
                          Great choice! We&apos;ll prioritize our eco-friendly
                          product lines for your quote.
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#39b54b] to-[#2d8f3a] rounded-xl flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Contact Information
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We&apos;ll use this information to send your quote
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200 ${
                          formErrors.name
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Enter your full name"
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange('company', e.target.value)
                        }
                        className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200 ${
                          formErrors.company
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Enter company name"
                      />
                      <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {formErrors.company && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.company}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        className={`w-full px-4 py-3 pl-12 border rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200 ${
                          formErrors.email
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 bg-white'
                        }`}
                        placeholder="Enter email address"
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        className="w-full px-4 py-3 pl-12 border border-gray-300 bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                        placeholder="Enter phone number"
                      />
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Region/Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.region}
                        onChange={(e) =>
                          handleInputChange('region', e.target.value)
                        }
                        className="w-full px-4 py-3 pl-12 border border-gray-300 bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                        placeholder="Enter your region/location"
                      />
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Timeline
                    </label>
                    <div className="relative">
                      <select
                        value={formData.deliveryTimeline}
                        onChange={(e) =>
                          handleInputChange('deliveryTimeline', e.target.value)
                        }
                        className="w-full px-4 py-3 pl-12 border border-gray-300 bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 weeks">1-2 weeks</option>
                        <option value="1 month">1 month</option>
                        <option value="custom">Custom date</option>
                      </select>
                      <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                {formData.deliveryTimeline === 'custom' && (
                  <div className="mt-6 animate-slide-in">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Delivery Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={formData.customDate}
                        onChange={(e) =>
                          handleInputChange('customDate', e.target.value)
                        }
                        className="w-full px-4 py-3 pl-12 border border-gray-300 bg-white rounded-xl focus:ring-2 focus:ring-[#39b54b] focus:border-transparent transition-all duration-200"
                      />
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced GDPR Compliance */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-200 p-6">
              <label className="flex items-start space-x-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={(e) =>
                    handleInputChange('gdprConsent', e.target.checked)
                  }
                  className={`h-6 w-6 text-[#39b54b] rounded focus:ring-[#39b54b] mt-1 transition-all duration-200 ${
                    formErrors.gdprConsent ? 'border-red-300' : ''
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <p className="font-semibold text-gray-800">
                      GDPR Compliance & Privacy{' '}
                      <span className="text-red-500">*</span>
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I consent to Cloveson. processing my personal data for the
                    purpose of providing a quote. I understand I can withdraw
                    consent at any time by contacting{' '}
                    <a
                      href="mailto:privacy@clovesinc.com"
                      className="text-[#39b54b] hover:underline font-medium"
                    >
                      privacy@clovesinc.com
                    </a>
                  </p>
                  {formErrors.gdprConsent && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{formErrors.gdprConsent}</span>
                    </p>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* Enhanced Submit Button */}
          <div className="text-center">
            <button
              onClick={generateQuote}
              disabled={isGenerating}
              className={`group relative px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#39b54b] focus:ring-opacity-50 ${
              isGenerating
                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white hover:from-[#2d8f3a] hover:to-[#1e6b29] shadow-xl hover:shadow-2xl'
              }`}
            >
              {isGenerating ? (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                <span>Generating Your Quote...</span>
              </div>
              ) : isSubmitted ? (
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6" />
                <span>Quote Generated Successfully!</span>
              </div>
              ) : (
              <div className="flex items-center space-x-3">
                <Download className="h-6 w-6 group-hover:animate-bounce" />
                <span>Generate Quote & Email Me</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </div>
              )}

              {!isGenerating && (
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>

            {/* Estimated delivery info */}
            {selectedCount > 0 && !isSubmitted && (
              <div className="mt-4 flex justify-center">
                <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2 text-sm text-gray-600">
                  <Truck className="h-4 w-4" />
                  <span>
                    Estimated delivery: 3-5 business days after quote approval
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Success Message */}
          {isSubmitted && (
            <div className="mt-12 relative">
              <div className="bg-gradient-to-r from-green-50 via-white to-green-50 border-2 border-green-200 rounded-3xl p-8 animate-bounce-in shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    🎉 Quote Request Submitted Successfully!
                  </h4>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed max-w-2xl mx-auto">
                    Your PDF quote has been generated and downloaded.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Quote Generated
                      </h5>
                      <p className="text-sm text-gray-600">
                        Your PDF quote has been created and downloaded
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Next Steps
                      </h5>
                      <p className="text-sm text-gray-600">
                        Send it to company decision-makers for review
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-3 bg-gradient-to-r from-[#39b54b] to-[#2d8f3a] text-white rounded-xl hover:from-[#2d8f3a] hover:to-[#1e6b29] transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Request Another Quote
                    </button>
                    <a
                      href="/products"
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                    >
                      Browse Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        /* Custom hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        /* Enhanced focus styles */
        .focus-ring {
          transition: all 0.2s ease;
        }

        .focus-ring:focus {
          outline: none;
          ring: 2px solid #39b54b;
          ring-opacity: 50%;
          border-color: #39b54b;
        }

        /* Loading animation */
        @keyframes pulse-green {
          0%,
          100% {
            opacity: 1;
            background-color: #39b54b;
          }
          50% {
            opacity: 0.8;
            background-color: #2d8f3a;
          }
        }

        .animate-pulse-green {
          animation: pulse-green 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RequestQuotePage;
