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
      title="Poly-Woven Fabrics"
      description="Highly tear-resistant, poly-woven fabrics are ideal for industrial packaging and storage, offering a lightweight yet tough solution for demanding applications."
      image="/Product/nfs/nfs3.jpg" // Replace with real image
      features={[
        'Tear-resistant and long-lasting',
        'Ideal for industrial packaging',
        'Lightweight and easy to handle',
        'Allows higher steam penetration',
        'Enables lower cook time and lower energy cost',
        'Cost effective both in purchase price and cooking cost',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Natural & Synthetic Fabrics',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Polypropylene Woven',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Moderate (not for high heat)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Quality materials',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Heavy-duty packaging and protection',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various weights and sizes',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Tear-resistant and long-lasting',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Protection',
          value: 'Tear resistant',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in industrial sectors',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
