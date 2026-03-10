import styles from './Skills.module.css'

const skills = [
  { name: 'HTML5', icon: '🌐', level: 90, color: '#e34f26', label: 'Expert' },
  { name: 'CSS3', icon: '🎨', level: 85, color: '#1572b6', label: 'Advanced' },
  { name: 'JavaScript', icon: '🟨', level: 80, color: '#f7df1e', label: 'Advanced' },
  { name: 'React', icon: '⚛️', level: 75, color: '#61dafb', label: 'Proficient' },
  { name: 'Git', icon: '🔧', level: 78, color: '#f05032', label: 'Proficient' },
  { name: 'Responsive Design', icon: '📱', level: 88, color: '#a78bfa', label: 'Advanced' },
]

const tools = [
  { name: 'VS Code', icon: '💻' },
  { name: 'Figma', icon: '🎭' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Chrome DevTools', icon: '🔍' },
  { name: 'Postman', icon: '📮' },
  { name: 'npm / yarn', icon: '📦' },
]

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">My Skills</div>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-subtitle">
            4 years of dedicated learning has given me a solid foundation across
            the core web development stack.
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <div key={skill.name} className={`${styles.card} glass-card`}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{skill.icon}</span>
                <div className={styles.nameWrap}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLabel} style={{ color: skill.color }}>
                    {skill.label}
                  </span>
                </div>
                <span className={styles.percent}>{skill.level}%</span>
              </div>
              <div className={styles.barTrack}>
                <div
                  className={styles.barFill}
                  style={{
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                    boxShadow: `0 0 10px ${skill.color}55`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>Tools &amp; Environment</h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div key={tool.name} className={styles.toolChip}>
                <span>{tool.icon}</span>
                {tool.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
