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
      title="Jute/Hessian Liners"
      description="Biodegradable and heavy-duty liners popular in Australia for medical waste autoclave facilities. Allows higher steam penetration and lower energy costs while maintaining eco-friendly properties."
      image="/Product/al/p8.jpg"
      features={[
        'Biodegradable and environmentally friendly',
        'Allows higher steam penetration',
        'Enables lower cook time and lower energy cost',
        'Cost effective in purchase price and cooking cost',
        'Available in any size',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Autoclave Liners',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Natural Jute/Hessian',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Suitable for autoclaving',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Steam Penetration',
          value: 'Enhanced steam penetration',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Energy Efficiency',
          value: 'Lower cook time and energy cost',
          icon: <FaSyncAlt size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Medical waste autoclave facilities',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in any size',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Cost Effectiveness',
          value: 'Cost effective in purchase and cooking',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Manufacturing',
          value: 'Only manufacturer with global supply capability',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Popular in Australia and global markets',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
