/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/blog',
  // images: {
  //   unoptimized: true,
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.microcms-assets.io',
  //     },
  //   ],
  // },
  async headers() {
    return [
      {
        source: '/(.*)',
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
