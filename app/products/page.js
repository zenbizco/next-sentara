import Image from 'next/image';
import Link from 'next/link';
import { mockProducts } from '@/lib/mockData';
import styles from './page.module.css';

const ProductsPage = () => {
    return (
        <div className={styles.productsContainer}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span className={styles.eyebrow}>Catalog</span>
                    <h1 className={styles.title}>Precision Manufacturing Output.</h1>
                    <p className={styles.subtitle}>
                        Explore our range of clinical-grade compounds and industrial solvents,
                        engineered for absolute purity and performance.
                    </p>
                </div>
            </header>

            <section className={styles.gridSection}>
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
