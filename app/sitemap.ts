import { MetadataRoute } from 'next';
import { solutions } from '@/app/lib/solutions';
import { locales } from '@/app/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    {
      url: `https://www.guoxuzhi.email/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `https://www.guoxuzhi.email/${locale}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...solutions.map((solution) => ({
      url: `https://www.guoxuzhi.email/${locale}/solutions/${solution.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `https://www.guoxuzhi.email/${locale}/cases`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);
}
