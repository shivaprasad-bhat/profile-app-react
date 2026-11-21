import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaGooglePlay } from 'react-icons/fa6'
import { projects } from '../data/profileData'
import SectionLabel from './SectionLabel'

function ProjectMark({ project }) {
  if (project.name === 'CryptoTracker') {
    return (
      <div className="project-mark project-mark-crypto" aria-label="CryptoTracker project">
        <span>₿</span>
        <i />
      </div>
    )
  }

  if (project.image) {
    return (
      <div className="project-mark project-mark-image">
        <img src={project.image} alt={`${project.name} app icon`} />
        <i />
      </div>
    )
  }

  const initials = project.name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="project-mark" aria-hidden="true">
      <span>{initials}</span>
      <i />
    </div>
  )
}

function ProjectsSection() {
  const scrollerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const scrollToProject = (index) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const nextIndex = ((index % projects.length) + projects.length) % projects.length
    setActiveIndex(nextIndex)
    scroller.scrollTo({ left: nextIndex * scroller.clientWidth, behavior: 'auto' })
  }

  useEffect(() => {
    if (paused) return undefined

    const intervalId = window.setInterval(() => {
      const scroller = scrollerRef.current
      if (!scroller) return

      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % projects.length
        scroller.scrollTo({ left: nextIndex * scroller.clientWidth, behavior: 'smooth' })
        return nextIndex
      })
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [paused])

  const handleScroll = (event) => {
    const scroller = event.currentTarget

    const nearestIndex = Math.round(scroller.scrollLeft / scroller.clientWidth)
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, nearestIndex)))
  }

  return (
    <section className="projects section-wrap" id="projects">
      <SectionLabel number="04">PROJECTS</SectionLabel>
      <div className="projects-content">
        <div className="projects-heading">
          <h2>Work made for real life<span>.</span></h2>
          <p>A growing collection of products shaped through architecture, engineering, and practical innovation.</p>
        </div>

        <div className="project-carousel-controls">
          <div className="project-dots" aria-label="Choose project">
            {projects.map((project, index) => (
              <button
                className={activeIndex === index ? 'project-dot active' : 'project-dot'}
                key={project.name}
                type="button"
                onClick={() => scrollToProject(index)}
                aria-label={`Show project ${index + 1}: ${project.name}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
          <div className="project-arrows">
            <button type="button" onClick={() => scrollToProject(activeIndex - 1)} aria-label="Previous project">←</button>
            <button type="button" onClick={() => scrollToProject(activeIndex + 1)} aria-label="Next project">→</button>
          </div>
        </div>

        <div
          className="project-scroller"
          ref={scrollerRef}
          role="region"
          aria-label="Project gallery"
          tabIndex="0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onScroll={handleScroll}
        >
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-main">
                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                <ProjectMark project={project} />
                <div className="project-copy">
                  <p className="project-period">{project.period}</p>
                  <h3>{project.name}</h3>
                  <p className="project-company">{project.organization}</p>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                {project.platform === 'GitHub' ? <FaGithub aria-hidden="true" /> : <FaGooglePlay aria-hidden="true" />}
                <span>{project.platform === 'GitHub' ? 'View on GitHub' : 'View on Google Play'}</span>
                <b aria-hidden="true">↗</b>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
