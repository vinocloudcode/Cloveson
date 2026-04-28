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
      title="Poly Woven Bags"
      description="Poly woven bags are tear-resistant packaging solutions, ideal for transporting heavy materials such as cement, grains, and chemicals."
      image="/Product/ps/ps2.jpg" // Replace with real image
      features={[
        'Tear-resistant construction',
        'Available in custom sizes and designs',
        'Excellent for transporting heavy materials',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Polypropylene Woven Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Normal range (not heat-rated)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Quality materials',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Packaging and transporting grains, cement, chemicals',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom sizes and printing available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Tear and puncture resistant',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Coating',
          value: 'Protective coating',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in agriculture and construction sectors',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
        {
          label: 'Environmental Impact',
          value: 'Low',
        },
      ]}
    />
  );
}
