import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AccessibilityControls from '@/components/AccessibilityControls';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AccessibilityControls />

      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl mb-6">Seite nicht gefunden</h2>
            <p className="text-lead text-gray-600 mb-10">
              Die gesuchte Seite existiert leider nicht. Vielleicht wurde sie verschoben
              oder der Link ist nicht mehr aktuell.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-accent hover:bg-accent-dark text-white px-10 py-4 rounded font-semibold transition-all hover:shadow-xl"
            >
              Zur Startseite
            </Link>
            <Link
              href="/#buecher"
              className="inline-block bg-transparent hover:bg-accent/10 border-2 border-accent text-accent px-10 py-4 rounded font-semibold transition-all"
            >
              Bücher entdecken
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300">
            <p className="text-sm text-gray-500">
              Suchen Sie ein bestimmtes Buch? Alle Bücher finden Sie in der{' '}
              <Link href="/#buecher" className="text-accent hover:text-accent-dark underline">
                Übersicht
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

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
    </main>
  );
}
