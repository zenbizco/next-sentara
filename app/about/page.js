import styles from './page.module.css';

const AboutPage = () => {
    return (
        <div className={styles.aboutContainer}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Our Mission</span>
                    <h1 className={styles.title}>The Authority in Clinical Manufacturing.</h1>
                    <p className={styles.subtitle}>
                        Sentara Labs was founded on the principle that precision is not negotiable.
                        We provide the backbone for industries that require absolute consistency and purity.
                    </p>
                </div>
            </header>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <h2 className={styles.sectionTitle}>Precision at Scale</h2>
                            <p className={styles.text}>
                                Our facilities are designed to handle complex chemical and clinical manufacturing
                                with the same level of care, whether it's a small lab-scale run or a massive
                                industrial production.
                            </p>
                        </div>
                        <div className={styles.gridItem}>
                            <h2 className={styles.sectionTitle}>Regulatory Leadership</h2>
                            <p className={styles.text}>
                                We don't just follow standards; we help define them. Our collaboration with
                                regulatory bodies ensures that Sentara Labs remains at the forefront of
                                manufacturing safety and efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
