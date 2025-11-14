import Navigation from '@/components/Navigation';
import AccessibilityControls from '@/components/AccessibilityControls';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum – Hugo Ramnek',
  description: 'Impressum und rechtliche Angaben',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AccessibilityControls />

      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
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
            Zurück zur Startseite
          </Link>

          <h1 className="mb-12">Impressum</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>
                Hugo Ramnek<br />
                [Straße und Hausnummer]<br />
                [PLZ Ort]<br />
                [Land]
              </p>
            </section>

            <section>
              <h2>Kontakt</h2>
              <p>
                E-Mail: [kontakt@hugoramnek.at]<br />
                Telefon: [Telefonnummer]
              </p>
            </section>

            <section>
              <h2>Verantwortlich für den Inhalt</h2>
              <p>
                Hugo Ramnek<br />
                [Adresse wie oben]
              </p>
            </section>

            <section>
              <h2>Gestaltung und technische Umsetzung</h2>
              <p>
                <a
                  href="https://www.tellgrafik.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark underline"
                >
                  Tell Grafik
                </a>
              </p>
            </section>

            <section>
              <h2>Haftungsausschluss</h2>

              <h3>Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3>Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>

              <h3>Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-3">
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
