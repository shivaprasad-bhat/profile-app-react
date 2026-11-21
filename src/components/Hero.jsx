import { FaFacebookF, FaGithub, FaGitlab, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { profile } from '../data/profileData'

const socialProfiles = [
  { name: 'GitHub', url: 'https://github.com/shivaprasad-bhat/', icon: FaGithub },
  { name: 'GitLab', url: 'https://gitlab.com/shivaprasad-bhat/', icon: FaGitlab },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/svbneelmane', icon: FaLinkedinIn },
  { name: 'Facebook', url: 'https://fb.com/svbneelmane', icon: FaFacebookF },
  { name: 'Twitter', url: 'https://twitter.com/svbneelmane', icon: FaTwitter },
]

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="profile-name">
      <img className="hero-photo" src={profile.portrait} alt={`Portrait of ${profile.name}`} />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="eyebrow"><span /> PERSONAL PROFILE</p>
        <h1 id="profile-name">Shivaprasad<br />Bhat<span>.</span></h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-description">{profile.previousRole} <span> / </span> {profile.alumni}</p>
        <div className="hero-actions">
          <a className="primary-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
          <a className="text-link" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="profile-links" aria-label="Social profiles">
          {socialProfiles.map(({ name, url, icon: Icon }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}><Icon aria-hidden="true" /></a>
          ))}
        </nav>
      </div>
      <div className="hero-caption"><span>{profile.location.toUpperCase()}</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  )
}

export default Hero
