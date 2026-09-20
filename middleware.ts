import { NextRequest, NextResponse } from 'next/server';

type Locale = 'zh' | 'en' | 'de' | 'ja' | 'es';
const locales: Locale[] = ['zh', 'en', 'de', 'ja', 'es'];

const localeSet = new Set<string>(locales);

function detectLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get('site-locale')?.value;
  if (cookieLocale && localeSet.has(cookieLocale))
    return cookieLocale as Locale;

  const accepted = request.headers.get('accept-language')?.toLowerCase() ?? '';
  const match = locales.find((locale) =>
    accepted.split(',').some((part) => part.trim().startsWith(locale)),
  );
  return match ?? 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split('/')[1];

  // A rewritten request keeps this marker so it is not prefixed a second time.
  if (request.headers.get('x-locale')) return NextResponse.next();

  if (localeSet.has(segment)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(segment.length + 1) || '/';
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', segment);
    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    response.cookies.set('site-locale', segment, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)',
  ],
};
