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
      title="Mesh Bags"
      description="Lightweight and breathable, mesh bags are ideal for packaging produce such as fruits and vegetables, offering freshness and air circulation."
      image="/Product/ps/ps3.jpeg" // Replace with real image
      features={[
        'Lightweight and breathable',
        'Ideal for produce and perishables',
        'Customizable sizes and colors',
      ]}
      specifications={[
        {
          label: 'Category',
          value: 'Packaging Solutions',
          icon: <FaTag size={32} className="text-white" />,
        },
        {
          label: 'Material',
          value: 'Poly Mesh Fabric',
          icon: <FaRulerCombined size={32} className="text-white" />,
        },
        {
          label: 'Temperature Resistance',
          value: 'Not heat-rated',
          icon: <FaThermometerHalf size={32} className="text-white" />,
        },
        {
          label: 'Eco-Friendly',
          value: 'Quality materials',
          icon: <FaLeaf size={32} className="text-white" />,
        },
        {
          label: 'Use Case',
          value: 'Fresh produce packaging (fruits, vegetables)',
          icon: <FaBriefcase size={32} className="text-white" />,
        },
        {
          label: 'Customization',
          value: 'Custom sizes and colors available',
          icon: <FaTools size={32} className="text-white" />,
        },
        {
          label: 'Construction',
          value: 'Breathable mesh design',
          icon: <FaHammer size={32} className="text-white" />,
        },
        {
          label: 'Air Circulation',
          value: 'Breathable design',
          icon: <FaTint size={32} className="text-white" />,
        },
        {
          label: 'Region Popularity',
          value: 'Widely used in agriculture and grocery markets',
          icon: <FaGlobeAmericas size={32} className="text-white" />,
        },
      ]}
    />
  );
}
