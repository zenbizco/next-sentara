import Link from 'next/link';
import { navigationLinks } from '@/lib/mockData';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    SENTARA<span>LABS</span>
                </Link>
                <nav className={styles.nav}>
                    {navigationLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className={styles.actions}>
                    <Link href="/contact" className={styles.cta}>
                        Contact Sales
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
