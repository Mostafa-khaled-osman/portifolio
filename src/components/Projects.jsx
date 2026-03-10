import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    title: 'eldab3',
    subtitle: 'eldab3 Portifolio',
    desc: 'A responsive bilingual (Arabic & English) corporate portfolio for Al-Dabaa, an Egyptian heavy transport spare parts importer, built with React, TypeScript, and Tailwind CSS. Deployed on Vercel as part of supporting the company\'s digital presence and financial operations.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'CSS3'],
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
    path: '/images/eldab3.png',
    github: 'https://github.com/Mostafa-khaled-osman/eldab3',
    live: 'https://eldab3.vercel.app/',
  },
  {
    id: 2,
    title: 'E-Shop',
    subtitle: 'E-Commerce',
    desc: 'A fully functional e-commerce web app built with vanilla HTML, CSS, and JavaScript — no frameworks, just clean fundamentals. Features a product listing page powered by a local JSON data file and a dedicated checkout page for a complete shopping flow. Deployed on Vercel as a demonstration of core front-end skills and DOM manipulation.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0d1640 100%)',
    path: '/images/ecommerce.png',
    github: 'https://github.com/Mostafa-khaled-osman/E-commerce-js',
    live: 'https://e-commerce-js-coral.vercel.app/',
  },
  {
    id: 3,
    title: 'English Teacher',
    subtitle: 'English Teacher Portifolio',
    desc: 'A clean personal portfolio website built for an English teacher using vanilla HTML, CSS, and JavaScript. Showcases the teacher\'s profile, skills, and services in a structured, responsive single-page layout. Hosted on GitHub Pages as a real-world client-style project demonstrating front-end fundamentals.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    path: '/images/teacher portifolio.png',
    github: 'https://github.com/Mostafa-khaled-osman/English-teacher-portifolio',
    live: 'https://mostafa-khaled-osman.github.io/English-teacher-portifolio/',
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-tag">My Work</div>
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              A showcase of my recent work — each project represents a unique challenge
              tackled with clean code and creative thinking.
            </p>
          </div>
          <a href="#" className={styles.viewAll}>
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.id} className={`${styles.card} glass-card`}>
              <div className={styles.cardHeader} style={{ background: p.gradient }}>
                <img src={p.path} alt={p.title} className={styles.cardImage} />
                <div className={styles.cardHeaderLinks}>
                  <a href={p.github} className={styles.iconLink} aria-label="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href={p.live} className={styles.iconLink} aria-label="Live Preview">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{p.subtitle}</p>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <a href={p.live} className={styles.viewBtn}>
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
