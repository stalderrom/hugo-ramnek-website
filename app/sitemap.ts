import { MetadataRoute } from 'next';
import { getAllBookIds } from '@/data/books';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hugoramnek.at'; // TODO: Replace with actual domain

  // Get all book IDs
  const bookIds = getAllBookIds();

  // Create book entries
  const bookEntries: MetadataRoute.Sitemap = bookIds.map((id) => ({
    url: `${baseUrl}/buch/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...bookEntries,
  ];
}
