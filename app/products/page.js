import Image from 'next/image';
import Link from 'next/link';
import { mockProducts } from '@/lib/mockData';
import styles from './page.module.css';

const ProductsPage = () => {
    return (
        <div className={`${styles.productsContainer} animate-fade-in`}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Inventory & Capabilities</span>
                    <h1 className={styles.title}>Precision Manufacturing Output.</h1>
                    <p className={styles.subtitle}>
                        Explore our ready-to-ship compounds and custom synthesis capabilities.
                        All products are certified by our internal Quality Control laboratory.
                    </p>
                </div>
            </header>

            <section className={`${styles.productSection} animate-fade-up`}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {mockProducts.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <div className={styles.imagePlaceholder}>
                                    <span>{product.category}</span>
                                </div>
                                <div className={styles.productInfo}>
                                    <div className={styles.meta}>
                                        <span className={styles.category}>{product.category}</span>
                                    </div>
                                    <h3 className={styles.productName}>{product.name}</h3>
                                    <p className={styles.productDesc}>{product.description}</p>
                                    <Link href={`/products/${product.id}`} className={styles.viewBtn}>
                                        View Specifications
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bulk Inquiry Section */}
            <section className={styles.inquiry}>
                <div className={styles.container}>
                    <div className={styles.inquiryCard}>
                        <h2 className={styles.inquiryTitle}>Custom Manufacturing Inquiries</h2>
                        <p className={styles.inquiryText}>
                            Need a specialized compound or bulk industrial supply? Consult with our
                            technical engineering team for custom production runs.
                        </p>
                        <button className={styles.contactBtn}>Contact Engineering</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
