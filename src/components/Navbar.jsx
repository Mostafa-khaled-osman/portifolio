import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Update active section
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 100) {
          setActive(links[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo} onClick={() => handleNav('Home')}>
          <span className={styles.logoM}>M</span>
          <span className={styles.logoDot}>.</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(link => (
            <li key={link}>
              <button
                className={`${styles.link} ${active === link ? styles.activeLink : ''}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={styles.ctaBtn}
          onClick={() => handleNav('Contact')}
        >
          Hire Me
        </a>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>
      </div>
    </nav>
  )
}
