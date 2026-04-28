import ProductSubPageTemplate from '@/components/Products/pstemp';
import {
  FaTag, // For Category
  FaRulerCombined, // For Material
  FaThermometerHalf, // For Temperature Resistance
  FaLeaf, // For Steam Penetration
  FaSyncAlt, // For Energy Efficiency
  FaBriefcase, // For Use Case
  FaTools, // For Customization
  FaHammer, // For Cost Effectiveness
  FaGlobeAmericas, // For Region Popularity
} from 'react-icons/fa';

export default function Page() {
  return (
    <ProductSubPageTemplate
      title="Atactic PP autoclave Liners"
      description="High-temperature atactic polypropylene liners designed to withstand the intense heat of medical autoclaves. The only manufacturer with global supply capability for medical waste autoclave facilities."
      image="/adi/14.jpg"
      features={[
        'Heat resistant up to 150°C',
        'Allows higher steam penetration',
        'Enables lower cook time and lower energy cost',
        'Cost effective in purchase price and cooking cost',
        'Available in any size (100"x80", 75"x90", 75"x110", 100"x120", 130"x150")',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Autoclave Liners',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'High-temperature atactic polypropylene',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Up to 140°C',
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
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Global medical waste facilities',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
