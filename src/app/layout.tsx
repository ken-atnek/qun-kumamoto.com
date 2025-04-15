/* =======================================
 * 九州運輸 Layout
 * URL: music-fes/
 * Created: 2025-04-14
 * Last updated: 2025-04-14
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE || 'https://qun-kumamoto.com/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: '九州運輸',
      description:
        '九州と全国の都市を物流で結ぶ。株式会社九州運輸は昭和51年の創業以来、地域密着と地域貢献をコンセプトに高品質輸送を展開しています。',
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: './images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '九州運輸のOGP画像',
        },
      ],
    },
  }),
  title: '九州運輸',
  description: isRealProduction
    ? '九州と全国の都市を物流で結ぶ。株式会社九州運輸は昭和51年の創業以来、地域密着と地域貢献をコンセプトに高品質輸送を展開しています。。'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp" className={notoSans.className}>
      <head>
        <meta
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
