import styles from './TrustBanner.module.css';

const TrustBanner = () => {
  const certifications = [
    { name: 'FDA', label: 'FDA Registered' },
    { name: 'USDA', label: 'USDA Organic' },
    { name: 'ISO', label: 'ISO 9001 Certified' },
    { name: 'GMP', label: 'GMP Compliant' },
  ];

  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <span className={styles.status}>Manufacturing Excellence:</span>
        <div className={styles.logos}>
          {certifications.map((cert) => (
            <div key={cert.name} className={styles.logoItem}>
              <div className={styles.placeholderIcon}>{cert.name}</div>
              <span className={styles.label}>{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
