import styles from './page.module.css';

const ContactPage = () => {
    return (
        <div className={`${styles.contactContainer} animate-fade-in`}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Global Reach</span>
                    <h1 className={styles.title}>Partner with Sentara Labs.</h1>
                    <p className={styles.subtitle}>
                        Inquire about our manufacturing capabilities, technical specifications,
                        or high-purity compound availability. Our engineering team responds within 24 hours.
                    </p>
                </div>
            </header>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {/* Contact Form */}
                        <div className={`${styles.formWrapper} animate-fade-up`}>
                            <h2 className={styles.sectionTitle}>Inquiry Form</h2>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Work Email</label>
                                    <input type="email" id="email" placeholder="john@company.com" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject">
                                        <option>Manufacturing Inquiry</option>
                                        <option>Product Specifications</option>
                                        <option>Quality & Compliance</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="How can we assist your operations?"></textarea>
                                </div>
                                <button type="submit" className={styles.submitBtn}>Submit Inquiry</button>
                            </form>
                        </div>

                        {/* Support Info */}
                        <div className={`${styles.infoWrapper} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
                            <h2 className={styles.sectionTitle}>Corporate HQ</h2>
                            <div className={styles.infoItem}>
                                <strong>Sentara Labs Global</strong>
                                <p>1221 Avenue of the Americas</p>
                                <p>New York, NY 10020</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Technical Support</strong>
                                <p>tech-support@sentara-labs.com</p>
                            </div>
                            <div className={styles.infoItem}>
                                <strong>Quality Assurance</strong>
                                <p>qc@sentara-labs.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
