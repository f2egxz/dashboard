import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import '@/app/ui/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | gxz',
    default: 'guoxuzhi',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://www.guoxuzhi.email'),
  other: {
    "baidu-site-verification": 'codeva-AiMezyF9lp',
    "google-site-verification":"oquRVvyHJ0hVK6K0p4GA4I3LeULL5t4pKdXNUOaRa3A",
    "msvalidate.01": "1F06938746E76495FEBFF491F1E86C02"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
