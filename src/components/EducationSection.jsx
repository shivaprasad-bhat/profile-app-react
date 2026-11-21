import { FaGraduationCap, FaStar, FaTrophy } from 'react-icons/fa'
import SectionLabel from './SectionLabel'

function EducationSection() {
  return (
    <section className="education section-wrap" id="education">
      <SectionLabel number="04">EDUCATION</SectionLabel>
      <div className="education-content">
        <div className="education-heading">
          <h2>Learning shaped the craft<span>.</span></h2>
          <p>Academic milestones that built a strong foundation in computing and problem solving.</p>
        </div>
        <div className="education-list">
          <article className="education-card education-featured">
            <div className="education-year">2019 — 2021</div>
            <div className="education-body"><FaGraduationCap className="education-icon" aria-hidden="true" /><p>MASTER’S DEGREE</p><h3>Master of Computer Applications</h3><span>Manipal Institute of Technology, Manipal</span></div>
            <div className="education-badges"><span><FaTrophy aria-hidden="true" /> Gold Medal</span><span><FaStar aria-hidden="true" /> 9.83 CGPA</span></div>
          </article>
          <article className="education-card">
            <div className="education-year">2014 — 2017</div>
            <div className="education-body"><FaGraduationCap className="education-icon" aria-hidden="true" /><p>BACHELOR’S DEGREE</p><h3>Bachelor of Computer Applications</h3><span>SDM College, Mangalore University</span></div>
            <div className="education-badges"><span><FaStar aria-hidden="true" /> 8.8 CGPA</span></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
