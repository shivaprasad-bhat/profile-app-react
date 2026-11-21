import SectionLabel from './SectionLabel'

function AboutSection() {
    return (
        <section className="about section-wrap" id="about">
            <SectionLabel number="01">ABOUT</SectionLabel>
            <div className="about-content">
                <h2>Building with purpose<span>.</span></h2>
                <p>Tech Lead, mobile architect, and problem solver passionate about building products that people love to use. At Cardinal Health, I lead the development of scalable mobile solutions, drive engineering excellence, and mentor teams to deliver impactful digital experiences. A Gold Medalist from MIT Manipal, I specialize in transforming complex challenges into intuitive, high-performance products through modern architecture, thoughtful design, and continuous innovation.</p>
                <div className="about-meta"><span>TECH LEAD</span><span>EX-YODLEE</span><span>MIT ALUMNI</span></div>
            </div>
        </section>
    )
}

export default AboutSection
