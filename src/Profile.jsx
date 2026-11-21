import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import EducationSection from './components/EducationSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function Profile() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default Profile
