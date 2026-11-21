import SectionLabel from './SectionLabel'

function ContactSection() {
  return (
    <section className="contact section-wrap" id="contact">
      <SectionLabel number="07">CONTACT</SectionLabel>
      <div className="contact-content">
        <h2>Let’s connect<span>.</span></h2>
        <a className="contact-email" href="mailto:shivaprasad.bhat@zohomail.in">shivaprasad.bhat@zohomail.in <span aria-hidden="true">↗</span></a>
        <div className="social-links">
          <a href="https://github.com/shivaprasad-bhat/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://gitlab.com/shivaprasad-bhat/" target="_blank" rel="noreferrer">GitLab ↗</a>
          <a href="https://linkedin.com/in/svbneelmane" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
