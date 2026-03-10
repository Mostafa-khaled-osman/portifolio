import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>M<span className={styles.dot}>.</span></span>
          <p className={styles.tagline}>Junior Web Developer · Gharbia, Egypt</p>
        </div>

        <div className={styles.links}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
            <button
              key={link}
              className={styles.navLink}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            >
              {link}
            </button>
          ))}
        </div>

        <button className={styles.backToTop} onClick={scrollTop} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© 2026 Mostafa. All rights reserved. Built with ❤️ &amp; React.</p>
        <div className={styles.socials}>
          <a href="https://github.com/mostafa-khaled-osman" target="_blank" rel="noreferrer" className={styles.social} aria-label="GitHub">GitHub</a>
          <span className={styles.sep}>·</span>
          <a href="https://www.linkedin.com/in/mostafa-khaled-osman/" target="_blank" rel="noreferrer" className={styles.social} aria-label="LinkedIn">LinkedIn</a>
          <span className={styles.sep}>·</span>
          <a href="https://wa.me/+201551729506" target="_blank" rel="noreferrer" className={styles.social} aria-label="whatsapp">Whatsapp</a>
        </div>
      </div>
    </footer>
  )
}
