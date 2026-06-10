import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <a 
          href="https://lla-corp.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.footerHpLink}
        >
          LLA株式会社 公式サイトへ
        </a>
        <a 
          href="https://www.instagram.com/lla_benriya/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.footerIconLink}
        >
          <img src="/instagram_logo.png" alt="Instagram" className={styles.footerIcon} />
        </a>
        <a 
          href="https://lin.ee/saPAA4u" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.footerIconLink}
        >
          <img src="/line_logo.png" alt="LINE" className={styles.footerIcon} />
        </a>
      </div>
      <p className={styles.cr}>© LLA Co., Ltd. All Rights Reserved 2026</p>
    </footer>
  );
}