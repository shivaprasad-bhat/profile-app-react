import { useEffect, useRef, useState } from 'react'
import { navigation, profile } from '../data/profileData'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>{profile.monogram}</a>
      <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} id="main-navigation" aria-label="Main navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
      </nav>
      <button
        className={menuOpen ? 'menu-toggle menu-toggle-open' : 'menu-toggle'}
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
    </header>
  )
}

export default Header
