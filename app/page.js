import Link from 'next/link';
import { heroContent, manufacturingManifesto } from '@/lib/mockData';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
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
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Our Manufacturing Standard</span>
            <h2 className={styles.sectionTitle}>Engineered for the Uncompromising</h2>
          </div>
          <div className={styles.manifestoGrid}>
            {manufacturingManifesto.map((item, index) => (
              <div key={index} className={styles.manifestoItem}>
                <span className={styles.index}>0{index + 1}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Stats Section */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            "Sentara Labs sets the global benchmark for precision manufacturing in clinical environments."
          </blockquote>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Compliance Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>ISO 9001</span>
              <span className={styles.statLabel}>Certified Facilities</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>24/7</span>
              <span className={styles.statLabel}>Monitoring</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
