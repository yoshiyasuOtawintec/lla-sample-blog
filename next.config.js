/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/((?!favicon.ico|_next/static|_next/image|assets|images).*)',
        headers: [
          {
            key: 'CDN-Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
