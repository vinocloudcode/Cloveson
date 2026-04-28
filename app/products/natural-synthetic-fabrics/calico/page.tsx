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
      title="Calico"
      description="Unbleached cotton fabric ideal for eco-conscious applications. Allows higher steam penetration and enables lower cook time and energy cost."
      image="/Product/nfs/nfs2.jpg" // Replace with real image
      features={[
        'Natural cotton material',
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
          value: 'Cotton (Natural Fiber)',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Moderate (not for high heat)',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Yes (Natural and biodegradable)',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Medical, commercial, and industrial applications',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Available in various weights and finishes',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Soft but strong',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Breathability',
          value: 'Highly breathable',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used globally',
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
