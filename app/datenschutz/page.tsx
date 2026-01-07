import Navigation from '@/components/Navigation';
import AccessibilityControls from '@/components/AccessibilityControls';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Hugo Ramnek',
  description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung',
};

export default function DatenschutzPage() {
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

          <h1 className="mb-12">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2>1. Datenschutz auf einen Blick</h2>

              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2>2. Datenerfassung auf dieser Website</h2>

              <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3>Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>

              <h3>Wofür nutzen wir Ihre Daten?</h3>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2>3. Hosting</h2>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
                erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a.
                um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten,
                Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
                werden, handeln.
              </p>
            </section>

            <section>
              <h2>4. Kontaktformular</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2>5. Newsletter</h2>
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von
                Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten,
                dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
                Newsletters einverstanden sind.
              </p>
              <p>
                Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren
                Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den
                "Austragen"-Link im Newsletter.
              </p>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                Diese Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies
                sind kleine Textdateien, die auf Ihrem Computer gespeichert werden. Wir verwenden
                Cookies ausschließlich zur Speicherung Ihrer Präferenzen (z.B. Schriftgröße,
                Kontrastmodus).
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
                Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim
                Schließen des Browsers aktivieren.
              </p>
            </section>

            <section>
              <h2>7. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul>
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Die Berichtigung unrichtiger Daten zu verlangen</li>
                <li>Die Löschung Ihrer Daten zu verlangen</li>
                <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Der Datenverarbeitung zu widersprechen</li>
                <li>Ihre Daten in einem strukturierten, gängigen Format zu erhalten (Datenportabilität)</li>
              </ul>
              <p>
                Für Auskünfte und Anfragen wenden Sie sich bitte an die im Impressum angegebene
                Kontaktadresse.
              </p>
            </section>

            <section>
              <h2>8. Externe Links</h2>
              <p>
                Diese Website enthält Links zu externen Websites Dritter. Auf die Inhalte dieser
                verlinkten Websites haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten
                ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Für die Datenschutz-Praktiken
                dieser Websites übernehmen wir keine Verantwortung.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-sm text-gray-600">
                Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
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
