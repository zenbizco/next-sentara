import styles from './page.module.css';

const ManufacturingPage = () => {
    return (
        <div className={styles.manufacturingContainer}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Capabilities</span>
                    <h1 className={styles.title}>Industrial Growth, Clinical Precision.</h1>
                    <p className={styles.subtitle}>
                        From pilot scale to global distribution, our facilities are built for the
                        transition. We scale your manufacturing without compromising on the
                        standards that matter.
                    </p>
                </div>
            </header>

            <section className={styles.capabilities}>
                <div className={styles.container}>
                    <div className={styles.capGrid}>
                        <div className={styles.capItem}>
                            <h2 className={styles.capTitle}>Phase I - Pilot Production</h2>
                            <p className={styles.capText}>
                                Rapid prototyping and small-batch production for R&D and clinical trials.
                            </p>
                        </div>
                        <div className={styles.capItem}>
                            <h2 className={styles.capTitle}>Phase II - Specialized Synthesis</h2>
                            <p className={styles.capText}>
                                High-complexity chemical synthesis in controlled environments.
                            </p>
                        </div>
                        <div className={styles.capItem}>
                            <h2 className={styles.capTitle}>Phase III - Global Industrial</h2>
                            <p className={styles.capText}>
                                Full-scale manufacturing with global logistics and 3PL readiness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManufacturingPage;
