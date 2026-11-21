import { useEffect, useRef, useState } from 'react'
import { certificates } from '../data/profileData'
import SectionLabel from './SectionLabel'

function CertificatesSection() {
  const scrollerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const scrollToCertificate = (index) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const nextIndex = ((index % certificates.length) + certificates.length) % certificates.length
    scroller.scrollTo({ left: nextIndex * scroller.clientWidth, behavior: 'smooth' })
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    if (paused) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % certificates.length
        const scroller = scrollerRef.current
        if (scroller) scroller.scrollTo({ left: nextIndex * scroller.clientWidth, behavior: 'smooth' })
        return nextIndex
      })
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [paused])

  const handleScroll = (event) => {
    const scroller = event.currentTarget
    const nearestIndex = Math.round(scroller.scrollLeft / scroller.clientWidth)
    setActiveIndex(Math.max(0, Math.min(certificates.length - 1, nearestIndex)))
  }

  return (
    <section className="certificates section-wrap" id="certificates">
      <SectionLabel number="05">CERTIFICATES</SectionLabel>
      <div className="certificates-content">
        <div className="certificates-heading">
          <h2>Proof of continuous growth<span>.</span></h2>
          <p>Learning beyond the role, with a focus on leadership and impact.</p>
        </div>

        <div className="certificate-carousel-controls">
          <div className="certificate-dots" aria-label="Choose certificate">
            {certificates.map((certificate, index) => (
              <button
                className={activeIndex === index ? 'certificate-dot active' : 'certificate-dot'}
                key={certificate.title}
                type="button"
                onClick={() => scrollToCertificate(index)}
                aria-label={`Show certificate ${index + 1}: ${certificate.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
          <div className="certificate-arrows">
            <button type="button" onClick={() => scrollToCertificate(activeIndex - 1)} aria-label="Previous certificate">←</button>
            <button type="button" onClick={() => scrollToCertificate(activeIndex + 1)} aria-label="Next certificate">→</button>
          </div>
        </div>

        <div
          className="certificate-scroller"
          ref={scrollerRef}
          role="region"
          aria-label="Certificate gallery"
          tabIndex="0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onScroll={handleScroll}
        >
          {certificates.map((certificate, index) => (
            <article className="certificate-card" key={certificate.title}>
              <div className="certificate-image-wrap"><img className="certificate-image" src={certificate.image} alt={certificate.alt} /></div>
              <div className="certificate-info">
                <span className="certificate-index">{String(index + 1).padStart(2, '0')}</span>
                <div><p>{certificate.category.toUpperCase()}</p><h3>{certificate.title}</h3></div>
                <p className="certificate-description">{certificate.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
