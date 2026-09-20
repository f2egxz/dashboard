import Link from 'next/link';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { copy, getLocale, locales, Locale } from '@/app/lib/i18n';
import BrandLogo from './brand-logo';

const localeNames: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
  de: 'Deutsch',
  ja: '日本語',
  es: 'Español',
};

export default function SiteChrome() {
  const locale = getLocale();
  const text = copy[locale];
  return (
    <header className="site-header">
      <div className="site-header-inner page-grid">
        <Link href="/" className="brand" aria-label={text.brandAria}>
          <BrandLogo />
          <span>GXZ / WORKFLOW STUDIO</span>
        </Link>
        <nav className="site-nav" aria-label={text.navSolutions}>
          <Link href="/solutions">{text.navSolutions}</Link>
          <Link href="/cases">{text.navCases}</Link>
          <details className="locale-picker">
            <summary aria-label={localeNames[locale]}>
              <span>{localeNames[locale]}</span>
              <ChevronDownIcon aria-hidden="true" />
            </summary>
            <div className="locale-menu">
              {locales.map((item) => (
                <a href={`/${item}`} key={item} hrefLang={item}>
                  {localeNames[item]}
                </a>
              ))}
            </div>
          </details>
          <a className="nav-contact" href="/#contact">
            {text.navContact} <ArrowUpRightIcon aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
