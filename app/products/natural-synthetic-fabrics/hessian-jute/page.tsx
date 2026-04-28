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
      title="Hessian (Jute)"
      description="A biodegradable and heavy-duty natural fabric used widely in industrial packaging and protection applications. Allows higher steam penetration and enables lower cook time and energy cost."
      image="/Product/nfs/nfs2.jpg" // Replace with real image
      features={[
        'Biodegradable and eco-friendly',
        'Allows higher steam penetration',
        'Enables lower cook time and lower energy cost',
        'Cost effective in purchase and cooking',
        'Available in various sizes',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Natural & Synthetic Fabrics',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Jute (Natural Fiber)',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Moderate (not for high heat)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (100% biodegradable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Industrial and agricultural packaging',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various weights and sizes',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Tough and rugged',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Absorption',
          value: 'Absorbs moisture',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Popular in eco-conscious markets',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
        {
          label: 'Steam Penetration',
          value: 'Allows higher steam penetration',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Energy Efficiency',
          value: 'Lower cook time and energy cost',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Cost Effectiveness',
          value: 'Cost effective in purchase and cooking',
          icon: <FaHammer size={32} className="text-white" />,
        },
      ]}
    />
  );
}
