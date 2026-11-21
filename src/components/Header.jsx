import { navigation, profile } from '../data/profileData'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${profile.name}, home`}>{profile.monogram}</a>
      <nav className="navigation" aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-link" href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
    </header>
  )
}

export default Header
