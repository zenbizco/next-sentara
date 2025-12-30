import styles from './page.module.css';

const QualityPage = () => {
    const certifications = [
        { title: 'ISO 9001:2015', detail: 'Quality Management Systems certified for chemical manufacturing and distribution.' },
        { title: 'GMP Compliance', detail: 'Adherent to Good Manufacturing Practices (GMP) for clinical-grade product consistency.' },
        { title: 'FDA Registered', detail: 'Facility registered and regularly audited by the Food and Drug Administration.' },
        { title: 'USDA Organic', detail: 'Certified organic processing lines for specialized agricultural inputs.' },
    ];

    const documentation = [
        { type: 'Technical Specs', name: 'Material Safety Data Sheets (MSDS)', date: 'Oct 2025' },
        { type: 'Analysis', name: 'Certificate of Analysis (COA) Blueprint', date: 'Sep 2025' },
        { type: 'Compliance', name: 'Standard Operating Procedures (SOP) Summary', date: 'Nov 2025' },
    ];

    return (
        <div className={styles.qualityContainer}>
            {/* Page Header */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Governance & Standards</span>
                    <h1 className={styles.title}>The Quality Standard for Modern Manufacturing.</h1>
                    <p className={styles.subtitle}>
                        At Sentara Labs, quality is not a department—it is the foundation of our existence.
                        Explore our rigorous compliance frameworks and technical documentation.
                    </p>
                </div>
            </header>

            {/* Certifications Grid */}
            <section className={styles.certifications}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {certifications.map((cert) => (
                            <div key={cert.title} className={styles.certCard}>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <p className={styles.certDetail}>{cert.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Documentation Section */}
            <section className={styles.documentation}>
                <div className={styles.container}>
                    <div className={styles.docWrapper}>
                        <div className={styles.docInfo}>
                            <h2 className={styles.sectionTitle}>Technical Resource Center</h2>
                            <p className={styles.sectionDesc}>
                                Download the latest compliance certifications and analysis blueprints for our active manufacturing lines.
                            </p>
                        </div>
                        <div className={styles.docList}>
                            {documentation.map((doc) => (
                                <div key={doc.name} className={styles.docItem}>
                                    <div className={styles.docMeta}>
                                        <span className={styles.docType}>{doc.type}</span>
                                        <span className={styles.docDate}>{doc.date}</span>
                                    </div>
                                    <h4 className={styles.docName}>{doc.name}</h4>
                                    <button className={styles.downloadBtn}>Request Access</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Philosophy Section */}
            <section className={styles.philosophy}>
                <div className={styles.container}>
                    <div className={styles.philosophyContent}>
                        <h2 className={styles.philosophyTitle}>"Unmatched Precision in Every Batch."</h2>
                        <p className={styles.philosophyText}>
                            Our commitment to quality extends beyond regulatory mandates. We employ real-time
                            monitoring systems and automated validation loops to ensure every product
                            exceeds the most stringent industrial benchmarks.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QualityPage;
