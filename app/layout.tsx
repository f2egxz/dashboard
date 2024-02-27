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
