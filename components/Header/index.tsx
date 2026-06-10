import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 既存のレイアウトを崩さないよう、必要に応じてクラスを調整してください */}
      <div className="flex items-center justify-between h-16 px-4">
        
        {/* 左側：ロゴ */}
        <Link href="/">
          <Image
            src="/LOGO.jpg"
            alt="LLA株式会社"
            className={styles.logo}
            width={150}
            height={57}
            priority
          />
        </Link>

        {/* 右側：リンク */}
        <nav className="flex items-center space-x-6">
          <a
            href="https://lla-corp.com"
            className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
          >
            HPはこちら
          </a>
        </nav>
      </div>
    </header>
  );
}