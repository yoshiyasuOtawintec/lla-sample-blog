'use client';

import { useRouter } from 'next/navigation';
import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date';
import styles from './index.module.css';
import TagList from '../TagList';
import Profile from '../Profile';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  const router = useRouter();

  return (
    <main className={styles.main}>
      {/* 🔽 変更：以前のupperRowを削除し、タイトルとボタンを囲む新しいエリアを定義 */}
      <div className={styles.titleArea}>
        <h1 className={styles.title}>{data.title}</h1>
        <button 
          type="button" 
          onClick={() => router.back()} 
          className={styles.backButton}
        >
          戻る
        </button>
      </div>
      {/* 🔼 ここまで */}

      <TagList tags={data.tags} />
      {/* 記述などはそのまま... */}
      <p className={styles.description}>{data.description}</p>
      
      {/* 以下の実装は変更なし */}
      <div className={styles.meta}>
        {data.writer && (
          <div className={styles.writer}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                className={styles.writerIcon}
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span className={styles.writerName}>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 640px)"
          srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
        />
        <source
          type="image/webp"
          srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
        />
        <img
          src={data.thumbnail?.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail?.width}
          height={data.thumbnail?.height}
        />
      </picture>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
      <Profile writer={data.writer} />
    </main>
  );
}