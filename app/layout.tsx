import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import '@/app/ui/global.css';
import { copy, getLocale } from '@/app/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  const text = copy[locale];
  const titleByLocale = {
    zh: '把麻烦流程做成能用的工具',
    en: 'Turn overlooked work into useful tools',
    de: 'Übersehene Arbeit in nützliche Werkzeuge verwandeln',
    ja: '見過ごされがちな仕事を、使えるツールに',
    es: 'Convierte el trabajo olvidado en herramientas útiles',
  } as const;
  const title = titleByLocale[locale];
  return {
    title: { template: '%s | GXZ Workflow Studio', default: `GXZ Workflow Studio | ${title}` },
    description: text.heroLede,
    metadataBase: new URL('https://www.guoxuzhi.email'),
    alternates: { canonical: `/${locale}` },
    openGraph: { title: `GXZ Workflow Studio | ${title}`, description: text.heroLede, url: `https://www.guoxuzhi.email/${locale}`, siteName: 'GXZ Workflow Studio', locale: locale === 'zh' ? 'zh_CN' : locale, type: 'website' },
    other: { 'baidu-site-verification': 'codeva-AiMezyF9lp', 'google-site-verification': 'oquRVvyHJ0hVK6K0p4GA4I3LeULL5t4pKdXNUOaRa3A', 'msvalidate.01': '1F06938746E76495FEBFF491F1E86C02' },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  return <html lang={locale === 'zh' ? 'zh-CN' : locale}><body className={`${inter.className} antialiased`}>{children}</body></html>;
}
