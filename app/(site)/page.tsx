import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import AccessibilityControls from '@/components/AccessibilityControls';
import { getPayload } from 'payload';
import config from '@payload-config';
import type { Event } from '@/types/event';
import type { Book } from '@/data/books';
import { books as staticBooks } from '@/data/books';

export const revalidate = 60;

export default async function Home() {
  const payload = await getPayload({ config });
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [{ docs: eventDocs }, { docs: bookDocs }] = await Promise.all([
    payload.find({
      collection: 'events',
      sort: 'date',
      depth: 1,
      draft: false,
      where: {
        and: [
          { date: { greater_than_equal: today.toISOString() } },
          { _status: { equals: 'published' } },
        ],
      },
    }),
    payload.find({
      collection: 'books',
      sort: 'sortOrder',
      depth: 1,
      limit: 100,
    }),
  ]);

  const events = eventDocs as unknown as Event[];

  const books: Book[] = bookDocs.length > 0
    ? bookDocs.map((doc) => {
        const cover = doc.coverImage as { url?: string } | null;
        return {
          id: (doc.slug as string) || String(doc.id),
          title: doc.title as string,
          subtitle: (doc.subtitle as string) || '',
          description: (doc.description as string) || '',
          longDescription: doc.longDescription as string | undefined,
          excerpt: doc.excerpt as string | undefined,
          format: (doc.format as string) || '',
          pages: (doc.pages as number) || 0,
          price: {
            eur: ((doc.price as { eur?: string })?.eur) || '',
            chf: ((doc.price as { chf?: string })?.chf) || '',
          },
          isbn: (doc.isbn as string) || '',
          ebook: (doc.ebook as boolean) || false,
          coverImage: cover?.url || `/covers/${doc.slug}.jpg`,
          additionalImages: ((doc.additionalImages as Array<{ image?: { url?: string } }>) || [])
            .map((ai) => ai.image?.url || '')
            .filter(Boolean),
          purchaseLink: (doc.purchaseLink as string) || '#',
          year: doc.year as number | undefined,
          awards: ((doc.awards as Array<{ award: string }>) || []).map((a) => a.award),
          specialNotes: doc.specialNotes as string | undefined,
          reviews: ((doc.reviews as Array<{ author: string; source: string; text: string; link?: string }>) || []).map((r) => ({
            author: r.author,
            source: r.source,
            text: r.text,
            link: r.link,
          })),
          mediaLinks: ((doc.mediaLinks as Array<{ title: string; url: string; mediaType: string }>) || []).map((m) => ({
            title: m.title,
            url: m.url,
            type: m.mediaType as 'video' | 'audio' | 'article',
          })),
        };
      })
    : staticBooks;

  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeContent events={events} books={books} />
      <AccessibilityControls />

      <footer className="py-12 px-6 bg-gray-900 text-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 text-sm">
            <a href="/impressum" className="text-gray-300 hover:text-white transition-colors">
              Impressum
            </a>
            <span className="text-gray-600">|</span>
            <a href="/datenschutz" className="text-gray-300 hover:text-white transition-colors">
              Datenschutz
            </a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Hugo Ramnek. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="https://tellgrafik.ch"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Grafikdesign & Web, Tell Grafik
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
