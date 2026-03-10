import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.imgFrame}>
              <div className={styles.imgInner}>
                <img src="/images/profile_photo.png" alt="Mostafa - Profile" className={styles.imgContent} />
                <div className={styles.imgGlow} />
              </div>
              <div className={styles.expBadge}>
                <span className={styles.expNum}>1</span>
                <span className={styles.expLabel}>Year of<br />Experience</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Passionate Developer</h2>
            <p className={styles.bio}>
              I&apos;m a passionate junior web developer with 1 year of experience, dedicated to
              creating sleek, high-performance web applications using the latest frameworks.
              My journey began with a fascination for user interfaces which evolved into a career
              building robust front-end solutions.
            </p>
            <p className={styles.bio}>
              Based in Gharbia, Egypt. I focus on delivering clean code and exceptional user experiences,
              always striving to bridge the gap between design and functionality.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <div>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Gharbia, Egypt</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>💼</span>
                <div>
                  <span className={styles.infoLabel}>Status</span>
                  <span className={styles.infoValue}>Open to Work</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🎓</span>
                <div>
                  <span className={styles.infoLabel}>Education</span>
                  <span className={styles.infoValue}>BIS</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>🌐</span>
                <div>
                  <span className={styles.infoLabel}>Languages</span>
                  <span className={styles.infoValue}>English, Arabic</span>
                </div>
              </div>
            </div>

            <a href='https://drive.google.com/file/d/1sAhdAOkkVU5QmoKIITQRgLm6rnR-3e2d/view?usp=sharing' target='_blank' className={styles.downloadBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
