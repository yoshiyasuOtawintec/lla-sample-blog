import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/LOGO.jpg"
          alt="LLA株式会社"
          className={styles.logo}
          width={696}
          height={266}
          priority
        />
      </Link>
    </header>
  );
}
