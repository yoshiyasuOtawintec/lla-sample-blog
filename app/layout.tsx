import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'https://lla-sample-blog.vercel.app'),
  title: {
    // 記事ページなどのタイトルテンプレート
    template: '%s | LLA株式会社公式ブログ',
    // トップページのデフォルトタイトル
    default: 'LLA株式会社公式ブログ',
  },
  description: 'LLA株式会社の施工事例や最新情報をお届けするブログです。',
  openGraph: {
    title: {
      template: '%s | LLA株式会社公式ブログ',
      default: 'LLA株式会社公式ブログ',
    },
    description: 'LLA株式会社の施工事例や最新情報をお届けするブログです。',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
