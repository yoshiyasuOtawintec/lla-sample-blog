import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const contentId = searchParams.get('contentId');
  const draftKey = searchParams.get('draftKey');

  if (!contentId) {
    return new Response('無効なパラメータです', { status: 400 });
  }

//   // プレビューモードを有効化
//   draftMode().enable();

  // 記事詳細ページへリダイレクト（パスはご自身の環境に合わせて調整してください）
  redirect(`/articles/${contentId}?draftKey=${draftKey}`);
}