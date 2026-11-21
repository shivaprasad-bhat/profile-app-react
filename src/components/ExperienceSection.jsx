import SectionLabel from './SectionLabel'

function ExperienceSection() {
  return (
    <section className="experience section-wrap" id="experience">
      <SectionLabel number="03">EXPERIENCE</SectionLabel>
      <div className="experience-content">
        <div className="experience-heading">
          <h2>Where I’ve made an impact<span>.</span></h2>
          <p>Two chapters, one continuing commitment to better products and stronger engineering teams.</p>
        </div>
        <div className="career-canvas">
          <article className="career-card career-current">
            <div className="career-card-top"><span className="career-number">01</span><span className="career-status"><i /> CURRENT</span></div>
            <div className="career-card-main"><time>FEB 2021 — PRESENT</time><h3>Tech Lead</h3><p className="career-company">Cardinal Health</p></div>
            <div className="career-card-footer"><span>LEADERSHIP</span><span>MOBILE</span><span>ARCHITECTURE</span></div>
          </article>
          <article className="career-card career-past">
            <div className="career-card-top"><span className="career-number">02</span><span className="career-status">2017 — 2019</span></div>
            <div className="career-card-main"><time>JUL 2017 — JUL 2019</time><h3>Software Engineer</h3><p className="career-company">Envestnet Yodlee</p></div>
            <div className="career-card-footer"><span>ENGINEERING</span><span>SOFTWARE</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
