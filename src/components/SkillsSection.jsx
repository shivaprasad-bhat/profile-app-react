import { FaArrowsRotate, FaComments, FaDatabase, FaGear, FaJava, FaLightbulb, FaPeopleGroup } from 'react-icons/fa6'
import { SiAndroid, SiApple, SiDart, SiDocker, SiExpress, SiFigma, SiFirebase, SiGit, SiHtml5, SiJavascript, SiJenkins, SiKotlin, SiMongodb, SiNodedotjs, SiPostgresql, SiReact, SiSwift } from 'react-icons/si'
import SectionLabel from './SectionLabel'

const technicalGroups = [
  { name: 'Languages', skills: [{ name: 'Kotlin', icon: SiKotlin }, { name: 'Java', icon: FaJava }, { name: 'Swift', icon: SiSwift }, { name: 'JavaScript', icon: SiJavascript }, { name: 'Dart', icon: SiDart }, { name: 'HTML/CSS', icon: SiHtml5 }] },
  { name: 'Platforms & frameworks', skills: [{ name: 'Android', icon: SiAndroid }, { name: 'iOS', icon: SiApple }, { name: 'React.js', icon: SiReact }, { name: 'Node.js', icon: SiNodedotjs }, { name: 'Express.js', icon: SiExpress }] },
  { name: 'Data', skills: [{ name: 'Realm', icon: FaDatabase }, { name: 'MongoDB', icon: SiMongodb }, { name: 'PostgreSQL', icon: SiPostgresql }] },
  { name: 'Tools & operations', skills: [{ name: 'Git', icon: SiGit }, { name: 'Docker', icon: SiDocker }, { name: 'CI/CD', icon: FaGear }, { name: 'Firebase', icon: SiFirebase }, { name: 'Jenkins', icon: SiJenkins }, { name: 'Figma', icon: SiFigma }] },
]

const professionalSkills = [
  { name: 'Communication', icon: FaComments },
  { name: 'Team Collaboration', icon: FaPeopleGroup },
  { name: 'Problem Solving', icon: FaLightbulb },
  { name: 'Adaptability', icon: FaArrowsRotate },
]

function SkillsSection() {
  return (
    <section className="skills section-wrap" id="skills">
      <SectionLabel number="02">SKILLS</SectionLabel>
      <div className="skills-content">
        <h2>Tools of the craft<span>.</span></h2>
        <div className="technical-skills">
          {technicalGroups.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3>{group.name}</h3>
              <div className="skill-list">
                {group.skills.map(({ name, icon: Icon }) => <span className="technical-skill" key={name}><Icon aria-hidden="true" /><b>{name}</b></span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="professional-heading"><span>BEYOND THE CODE</span><h3>Professional skills</h3></div>
        <div className="professional-skills">
          {professionalSkills.map(({ name, icon: Icon }) => (
            <article className="professional-skill" key={name}><Icon className="professional-icon" aria-hidden="true" /><h3>{name}</h3><span className="skill-arrow" aria-hidden="true">↗</span></article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
