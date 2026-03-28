import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import AccessibilityControls from '@/components/AccessibilityControls';
import { client } from '@/sanity/lib/client';
import { eventsQuery } from '@/sanity/lib/queries';
import type { SanityEvent } from '@/sanity/types';

export const revalidate = 60; // Seite alle 60 Sekunden neu laden

export default async function Home() {
  const events: SanityEvent[] = await client.fetch(eventsQuery);

  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeContent events={events} />
      <AccessibilityControls />

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
