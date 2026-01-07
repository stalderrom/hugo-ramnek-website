import { notFound } from 'next/navigation';
import { getBookById, getAllBookIds } from '@/data/books';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import AccessibilityControls from '@/components/AccessibilityControls';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const book = getBookById(resolvedParams.id);

  if (!book) {
    return {
      title: 'Buch nicht gefunden',
    };
  }

  return {
    title: `${book.title} – Hugo Ramnek`,
    description: book.description,
    openGraph: {
      title: `${book.title} – Hugo Ramnek`,
      description: book.description,
      images: [book.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const ids = getAllBookIds();
  return ids.map((id) => ({
    id: id,
  }));
}

export default async function BookPage({ params }: PageProps) {
  const resolvedParams = await params;
  const book = getBookById(resolvedParams.id);

  if (!book) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: 'Hugo Ramnek',
    },
    description: book.longDescription || book.description,
    isbn: book.isbn,
    numberOfPages: book.pages,
    inLanguage: book.format.includes('Slowenisch') ? ['de', 'sl'] : 'de',
    publisher: {
      '@type': 'Organization',
      name: 'Verlag',
    },
    datePublished: book.year?.toString(),
    image: book.coverImage,
    ...(book.awards && book.awards.length > 0 && {
      awards: book.awards,
    }),
    ...(book.reviews && book.reviews.length > 0 && {
      review: book.reviews.map((review) => ({
        '@type': 'Review',
        author: {
          '@type': review.author === 'Redaktion' ? 'Organization' : 'Person',
          name: review.source,
        },
        reviewBody: review.text,
      })),
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <AccessibilityControls />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Link
            href="/#buecher"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors mb-12 text-lg font-semibold"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Zurück zu allen Büchern
          </Link>

          {/* Book Content */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
            {/* Book Cover */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={book.coverImage}
                  alt={`Buchcover: ${book.title}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Book Details */}
            <div>
              <h1 className="mb-6">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="text-2xl text-accent mb-10 italic leading-relaxed">{book.subtitle}</p>
              )}

              {/* Awards */}
              {book.awards && book.awards.length > 0 && (
                <div className="mb-10 p-6 bg-accent/10 border-l-4 border-accent rounded">
                  <h3 className="mb-3">
                    Auszeichnungen
                  </h3>
                  <ul className="space-y-2">
                    {book.awards.map((award, index) => (
                      <li key={index} className="leading-relaxed">
                        ★ {award}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description */}
              <div className="mb-10">
                <p className="text-lead leading-relaxed">
                  {book.longDescription || book.description}
                </p>
              </div>

              {/* Excerpt / Gedichtauszug */}
              {book.excerpt && (
                <div className="mb-10 bg-accent/5 border-l-4 border-accent p-8 rounded">
                  <h3 className="mb-4 text-lg">Leseprobe</h3>
                  <div className="font-serif italic whitespace-pre-line leading-relaxed text-lg">
                    {book.excerpt}
                  </div>
                </div>
              )}

              {/* Special Notes */}
              {book.specialNotes && (
                <div className="mb-10 p-6 bg-accent/10 border-l-4 border-accent rounded">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="leading-relaxed">{book.specialNotes}</p>
                  </div>
                </div>
              )}

              {/* Book Info */}
              <div className="space-y-4 mb-10 bg-white/50 p-6 rounded-lg">
                <div className="flex gap-6">
                  <span className="font-semibold min-w-28">Format:</span>
                  <span>{book.format}</span>
                </div>
                <div className="flex gap-6">
                  <span className="font-semibold min-w-28">Seiten:</span>
                  <span>{book.pages}</span>
                </div>
                <div className="flex gap-6">
                  <span className="font-semibold min-w-28">ISBN:</span>
                  <span>{book.isbn}</span>
                </div>
                {book.year && (
                  <div className="flex gap-6">
                    <span className="font-semibold min-w-28">Jahr:</span>
                    <span>{book.year}</span>
                  </div>
                )}
                {book.ebook && (
                  <div className="flex gap-6">
                    <span className="font-semibold min-w-28">E-Book:</span>
                    <span>Auch als E-Book erhältlich</span>
                  </div>
                )}
              </div>

              {/* Purchase Link */}
              <a
                href={book.purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-12 py-5 rounded font-bold text-xl transition-all hover:shadow-xl"
              >
                Beim Verlag bestellen
              </a>
            </div>
          </div>

          {/* Pressestimmen */}
          {book.reviews && book.reviews.length > 0 && (
            <div className="mt-24 border-t-2 border-accent/20 pt-16">
              <h2 className="mb-10">Was die Presse schreibt</h2>
              <div className="space-y-8">
                {book.reviews.map((review, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg border-l-4 border-accent/30 hover:border-accent transition-all">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                          <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <p className="text-2xl font-bold text-accent mb-1">{review.source}</p>
                          {review.author !== 'Redaktion' && (
                            <p className="text-sm text-gray-600">{review.author}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed mb-4 italic">
                      »{review.text}«
                    </p>
                    {review.link && (
                      <div className="mt-4 pt-4 border-t border-accent/20">
                        <a
                          href={review.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold hover:underline transition-colors"
                        >
                          <span>Vollständigen Artikel lesen</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Media Links */}
          {book.mediaLinks && book.mediaLinks.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-6">Interviews & Lesungen</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {book.mediaLinks.map((media, index) => (
                  <a
                    key={index}
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/70 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group border-l-4 border-accent/30 hover:border-accent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        {media.type === 'video' && (
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {media.type === 'audio' && (
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        )}
                        {media.type === 'article' && (
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold group-hover:text-accent transition-colors leading-relaxed">
                          {media.title}
                        </p>
                        <p className="text-sm text-accent mt-2 group-hover:underline">
                          {media.type === 'video' ? 'Video ansehen' : media.type === 'audio' ? 'Anhören' : 'Artikel lesen'} →
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Additional Content Section */}
          <div className="mt-24 border-t-2 border-accent/20 pt-16">
            <h2 className="mb-10 text-center">
              Weitere Bücher von Hugo Ramnek
            </h2>
            <div className="text-center">
              <Link
                href="/#buecher"
                className="inline-block bg-accent/10 hover:bg-accent/20 text-accent px-12 py-5 rounded font-bold text-xl transition-all"
              >
                Alle Bücher ansehen
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
          <p className="text-base">
            © {new Date().getFullYear()} Hugo Ramnek. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="https://tellgrafik.ch/leistungen"
              target="_blank"
              rel="noopener"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Webdesign und Webentwicklung
            </a>
            {' '}aus Zürich
          </p>
        </div>
      </footer>
    </>
  );
}
