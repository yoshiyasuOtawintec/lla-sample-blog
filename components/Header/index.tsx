import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 確実に横並びにするためのコンテナクラスに変更 */}
      <div className={styles.container}>
        
        {/* 左側：ロゴ */}
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

        {/* 右側：リンク */}
        <nav className={styles.nav}>
          <a
            href="https://lla-corp.com"
            className={styles.hpLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            LLA 公式サイト
          </a>
          <a
            href="https://www.instagram.com/lla_benriya/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaLink}
          >
            <Image
              src="/instagram_logo.png"
              alt="Instagram"
              width={24}  // SVGのサイズに合わせて調整してください
              height={24}
              className={styles.icon}
            />
          </a>
        </nav>
      </div>
    </header>
  );
}