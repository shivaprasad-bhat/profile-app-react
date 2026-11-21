import portrait from '../assets/pictures/shivaprasad.jpeg'
import aspireCertificate from '../assets/certificates/certificate_aspire.png'
import digitalUArchitectureCertificate from '../assets/certificates/certificate_digital_u_architecture.png'
import digitalUEngineeringCertificate from '../assets/certificates/certificate_digtal_u_engineering.png'

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
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
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
