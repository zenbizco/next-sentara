import Link from 'next/link';
import { heroContent, manufacturingManifesto } from '@/lib/mockData';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`${styles.homeContainer} animate-fade-in`}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`${styles.heroContent} animate-fade-up`}>
          <h1 className={styles.heroTitle}>{heroContent.title}</h1>
          <p className={styles.heroSubtitle}>{heroContent.subtitle}</p>
          <div className={styles.heroActions}>
            <Link href="/products" className={styles.buttonPrimary}>
              {heroContent.ctaPrimary}
            </Link>
            <Link href="/quality" className={styles.buttonSecondary}>
              {heroContent.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto / Manufacturing Narrative Section */}
      <section className={styles.manifesto}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} animate-fade-up`}>
            <div className="tech-data" style={{ marginBottom: '16px' }}>System Diagnostic // Status: Optimal</div>
            <h2 className={styles.sectionTitle}>Engineered for the Uncompromising</h2>
          </div>
          <div className={styles.manifestoGrid}>
            {manufacturingManifesto.map((item, index) => (
              <div
                key={index}
                className={`${styles.manifestoItem} data-frame animate-fade-up`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <span className={`${styles.index} tech-data`}>SPEC CODE: 0{index + 1}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats Section */}
      <section className={`${styles.trustSection} animate-fade-in`}>
        <div className={styles.container}>
          <div className="data-frame" style={{ padding: '80px 40px', borderLeft: 'none' }}>
            <blockquote className={`${styles.quote} animate-fade-up`}>
              "Sentara Labs sets the global benchmark for precision manufacturing in clinical environments."
            </blockquote>
            <div className={styles.stats}>
              {['100%', 'ISO 9001', '24/7'].map((value, index) => (
                <div
                  key={index}
                  className={`${styles.statItem} animate-fade-up`}
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <span className={`${styles.statValue} tech-data`} style={{ fontSize: '1.25rem', opacity: 1, color: 'var(--clinical-blue)' }}>{value}</span>
                  <span className={styles.statLabel}>
                    {index === 0 ? 'Compliance' : index === 1 ? 'Quality Standard' : 'Real-time Monitoring'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
