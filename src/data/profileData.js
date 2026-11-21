import portrait from '../assets/pictures/shivaprasad.jpeg'
import aspireCertificate from '../assets/certificates/certificate_aspire.png'
import digitalUArchitectureCertificate from '../assets/certificates/certificate_digital_u_architecture.png'
import digitalUEngineeringCertificate from '../assets/certificates/certificate_digtal_u_engineering.png'
import vantusProjectImage from '../assets/projects/vantus.png'
import orderExpressProjectImage from '../assets/projects/order_express.png'

export const profile = {
  name: 'Shivaprasad Bhat',
  monogram: 'SB.',
  role: 'Tech Lead at Cardinal Health',
  previousRole: 'Ex-Yodlee',
  alumni: 'MIT Alumni',
  location: 'Kumata, Karnataka',
  email: 'shivaprasad.bhat@zohomail.in',
  portrait,
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const projects = [
  {
    name: 'Vantus HQ',
    organization: 'Cardinal Health',
    period: '2023 — Present',
    image: vantusProjectImage,
    url: 'https://play.google.com/store/apps/details?id=com.cardinalhealth.vantus&hl=en_IN&pli=1',
    description: 'A mobile app built for Cardinal Health to support efficient, connected operations through a focused and intuitive experience.',
  },
  {
    name: 'Order Express',
    organization: 'Cardinal Health',
    period: '2021 — 2023',
    image: orderExpressProjectImage,
    url: 'https://play.google.com/store/apps/details?id=com.cardinalhealth.orderexpress.two&hl=en_IN',
    description: 'An ecommerce app created for Cardinal Health, designed to make ordering products straightforward, fast, and accessible on mobile.',
  },
  {
    name: 'CryptoTracker',
    organization: 'Personal Android Project',
    period: '2024',
    url: 'https://github.com/shivaprasad-bhat/CryptoTracker',
    platform: 'GitHub',
    description: 'An Android app for tracking cryptocurrency prices and market activity with a focused, real-time dashboard experience.',
  },
]

export const certificates = [
  {
    title: 'Aspire Leadership',
    category: 'Leadership Program',
    image: aspireCertificate,
    alt: 'Aspire Leadership certificate',
    description: 'An aspiring-leader certification focused on building the mindset, influence, and capabilities needed to grow from individual contribution into meaningful leadership.',
  },
  {
    title: 'Architect — Digital U',
    category: 'Technology Architecture Course',
    image: digitalUArchitectureCertificate,
    alt: 'Digital U Architect certificate',
    description: 'A technology architecture course focused on designing scalable systems, making sound architectural decisions, and aligning technical strategy with product and business needs.',
  },
  {
    title: 'Engineering — Digital U',
    category: 'Engineering Principles Course',
    image: digitalUEngineeringCertificate,
    alt: 'Digital U Engineering certificate',
    description: 'A course designed to build strong engineering principles across sound technical judgment, disciplined implementation, quality practices, and scalable software delivery.',
  },
]
