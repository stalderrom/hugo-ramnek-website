import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import AccessibilityControls from '@/components/AccessibilityControls';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HomeContent />
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
            Design & Programmierung:{' '}
            <a
              href="https://www.tellgrafik.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Tell Grafik
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
