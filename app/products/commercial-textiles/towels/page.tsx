import ProductSubPageTemplate from '@/components/Products/pstemp';
import {
  FaTag,
  FaRulerCombined,
  FaThermometerHalf,
  FaLeaf,
  FaSyncAlt,
  FaBriefcase,
  FaTools,
  FaHammer,
  FaTint,
  FaGlobeAmericas,
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Towels"
      description="Industrial-grade towels built for high absorbency and repeated washing. Ideal for healthcare, hospitality, and industrial environments."
      image="/Product/ct/ct2.jpg" // Replace with real image
      features={[
        'High absorbency',
        'Available in various sizes',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Commercial Textiles',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'High-Quality Cotton Blend',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'High-temperature washable',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Industrial-grade materials',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Healthcare and hospitality facilities',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various sizes and weights',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Highly absorbent',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Absorption',
          value: 'High absorbency',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in hospitality globally',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
