import { profile } from '../data/profileData'

function Footer() {
  return (
    <footer className="footer">
      <span>{profile.name.toUpperCase()}</span>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  )
}

export default Footer
