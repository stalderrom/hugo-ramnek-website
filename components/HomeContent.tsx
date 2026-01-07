'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/data/books';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomeContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('sending');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterStatus('sent');
      setNewsletterEmail('');
      setTimeout(() => setNewsletterStatus('idle'), 5000);
    } catch (error) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
    }
  };

  return (
    <>
      {/* Hero - Der Leser als Held */}
      <section id="top" className="min-h-0 lg:min-h-screen flex items-start lg:items-center px-6 pt-12 lg:pt-32 pb-4 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-background"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="hidden lg:block text-accent font-semibold tracking-wider lg:mb-6 uppercase lg:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Literatur, die bewegt
              </motion.p>

              <h1 className="text-4xl lg:text-6xl leading-tight mb-2 lg:mb-8">
                Geschichten,<br/>
                die das Leben<br/>
                erzählen
              </h1>

              <div className="mb-3 lg:mb-10 border-l-4 border-accent pl-4 lg:pl-8">
                <p className="text-sm lg:text-xl leading-snug lg:leading-relaxed">
                  Zwischen Verlust und Verbindung, zwischen Alltag und Poesie –
                  Hugo Ramnek schreibt über das, was uns alle berührt.
                </p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-2 lg:gap-4 mb-3 lg:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="#buecher"
                  className="inline-block bg-accent hover:bg-accent-dark text-white px-6 lg:px-10 py-2 lg:py-4 text-center font-semibold transition-all hover:shadow-xl rounded text-sm lg:text-base"
                >
                  Bücher entdecken
                </a>
                <a
                  href="#live"
                  className="inline-block bg-transparent hover:bg-accent/10 border-2 border-accent text-accent px-6 lg:px-10 py-2 lg:py-4 text-center font-semibold transition-all rounded text-sm lg:text-base"
                >
                  Lesungen erleben
                </a>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-3 lg:gap-6 text-xs lg:text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">Mehrfach ausgezeichnet</span>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="font-semibold">9 Bücher publiziert</span>
                </div>
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="font-semibold">Prosa, Lyrik & Performance</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-[15/16] w-[90%] max-w-md mx-auto lg:w-[90%] lg:max-w-full">
                <div className="relative w-full h-full overflow-hidden rounded shadow-2xl">
                  <img
                    src="/hugo-ramnek.jpg"
                    alt="Hugo Ramnek"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Literarischer Ausschnitt */}
      <section className="py-24 px-6 bg-accent/5">
        <motion.div
          className="max-w-4xl mx-auto"
          {...fadeInUp}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
        >
          <div className="bg-white/50 backdrop-blur p-12 rounded-lg shadow-lg border-l-4 border-accent">
            <p className="text-2xl italic leading-relaxed mb-6">
              »Die längste Nacht erzählt von alten Eltern und anderen Sterblichen.
              Von Verlust und Verbindung. Von der Gemeinschaft der Lebenden und der Toten.«
            </p>
            <p className="text-accent font-semibold">— Die längste Nacht</p>
          </div>
        </motion.div>
      </section>

      {/* Social Proof - Pressestimmen */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-4">Was die Presse schreibt</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <motion.div
              className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Literarische Welt</p>
              </div>
              <p className="italic leading-relaxed">
                »Zärtlich und witzig, melancholisch und grotesk – Ramnek beherrscht die ganze Klaviatur der Gefühle.«
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Neue Zürcher Zeitung</p>
              </div>
              <p className="italic leading-relaxed">
                »Ein Autor, der uns mit jedem Buch aufs Neue überrascht und berührt. Große Literatur!«
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Der Standard</p>
              </div>
              <p className="italic leading-relaxed">
                »Seine Leseperformances sind Ereignisse. Literatur wird hier zum Erlebnis für alle Sinne.«
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Lösung - StoryBrand */}
      <section id="ueber" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-8">Der Schriftsteller</h2>
            <p className="text-lead max-w-3xl mx-auto mb-8 leading-relaxed">
              Hugo Ramnek, geboren 1960 in Klagenfurt, aufgewachsen an der österreichisch-slowenischen
              Grenze in Bleiburg/Pliberk, studierte Deutsch und Englisch in Wien und Dublin. Seit 1989
              lebt der Schriftsteller in Zürich. Von 2001 – 2005 besuchte er die Schauspiel Schule Zürich.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded max-w-3xl mx-auto mb-12">
              <p className="text-xl italic leading-relaxed">
                »Ich schreibe und spiele. Nie würde ich es für mich allein tun. Das Schönste ist:
                Ich teile es, teile es mit, teile es mit Lesenden, Zuhörenden und Zuschauenden.«
              </p>
            </div>

            {/* Video */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/8y989jHw2Sk"
                  title="Hugo Ramnek"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <p className="max-w-3xl mx-auto leading-relaxed">
              Hugo Ramnek tritt regelmäßig bei den Theater-Performances der Improvisationsgruppe
              <em> und jetzt</em> (Leitung: Peter Honegger) auf und unterrichtet am Liceo Artistico.
              Seine Lesungen sind oft Performances mit Musikern wie Balts Nill & Urs Sibi Sibold (fÖn&tÖn),
              Michael Jaeger, Arthur Ottowitz, Martin Schumacher, Marco Todisco.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <motion.div
              className="text-center"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="mb-3">Mehrfach ausgezeichnet</h3>
              <p>Premio Merano-Europa 2019, Literarische Auszeichnung Zürich 2020, Erster Zürcher Lyrik-Preis</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-3">Vielseitig</h3>
              <p>Prosa, Lyrik, Theater-Performances und Leseperformances</p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-3">Bachmann-Preis</h3>
              <p>Teilnahme an den Tagen der deutschsprachigen Literatur 2012 in Klagenfurt</p>
            </motion.div>
          </div>

          {/* Wichtige Auszeichnungen */}
          <motion.div
            className="bg-white/50 backdrop-blur p-10 rounded-lg shadow-lg mb-12"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Auszeichnungen & Preise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2020</p>
                  <p>Literarische Auszeichnung der Stadt Zürich für <em>Die Schneekugel</em></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2019</p>
                  <p>Premio letterario internazionale Merano-Europa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2013</p>
                  <p>Heinz-Weder-Anerkennungspreis für Lyrik, Bern</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2012</p>
                  <p>Erster Zürcher Lyrik-Preis, 3. Preis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2012</p>
                  <p>Teilnahme Ingeborg-Bachmann-Preis, Klagenfurt</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent text-xl">★</span>
                <div>
                  <p className="font-semibold">2010</p>
                  <p>Anerkennungsgabe der Stadt Zürich für <em>Der letzte Badegast</em></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Der Plan: Bücher */}
      <section id="buecher" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-6">Die Bücher</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Neun Bücher, jedes eine eigene Welt. Von der längsten Nacht bis zur Schneekugel –
              Geschichten, die nachklingen.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            {books.map((book) => (
              <motion.div
                key={book.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="flex flex-col"
              >
                <div className="group h-full flex flex-col bg-white/70 backdrop-blur rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                  <Link href={`/buch/${book.id}`} className="flex-1 flex flex-col">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="mb-2 group-hover:text-accent transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 italic mb-3 text-base">
                        {book.subtitle}
                      </p>
                      {book.awards && book.awards.length > 0 && (
                        <span className="inline-block bg-accent/10 text-accent-dark px-3 py-1 rounded text-sm font-semibold mb-3 self-start">
                          ★ Ausgezeichnet
                        </span>
                      )}
                      <p className="text-base leading-relaxed line-clamp-3 mb-4 flex-1">
                        {book.description}
                      </p>
                      <div className="flex items-center justify-end mt-auto pt-4 border-t border-gray-200">
                        <span className="text-accent font-semibold group-hover:underline">
                          Mehr erfahren →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA - Lead Generation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-accent to-accent-dark text-white p-12 md:p-16 rounded-lg shadow-2xl"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="text-center mb-8">
              <h2 className="mb-4 text-white">Literarische Neuigkeiten</h2>
              <p className="text-xl opacity-95 leading-relaxed">
                Gelegentliche Informationen zu neuen Büchern, Lesungen und Veranstaltungen.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ihre.email@beispiel.com"
                  required
                  disabled={newsletterStatus === 'sent'}
                  className="flex-1 px-6 py-4 rounded bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending' || newsletterStatus === 'sent'}
                  className="px-8 py-4 bg-white text-accent font-bold rounded hover:bg-gray-100 transition-all disabled:opacity-50 whitespace-nowrap"
                >
                  {newsletterStatus === 'sending' ? 'Wird gesendet...' : newsletterStatus === 'sent' ? '✓ Angemeldet!' : 'Anmelden'}
                </button>
              </div>
              <p className="text-sm opacity-80 mt-4 text-center">
                Kostenlos und jederzeit abbestellbar. Keine Weitergabe an Dritte.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Literarischer Ausschnitt 3 */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          {...fadeInUp}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
        >
          <div className="bg-white/50 backdrop-blur p-12 rounded-lg shadow-lg border-l-4 border-accent">
            <p className="text-2xl italic leading-relaxed mb-6">
              »Zärtlich und witzig, melancholisch und grotesk sind die preisgekrönten Texte
              des österreichischen Autors, der in Zürich lebt.«
            </p>
          </div>
        </motion.div>
      </section>

      {/* Der Plan: Live Erleben */}
      <section id="live" className="py-32 px-6 bg-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-6">Live erleben</h2>
            <p className="text-lead max-w-3xl mx-auto">
              Hugo Ramnek liest nicht nur – er inszeniert. Mit Puppenspielern, Musikern und
              Improvisationskünstlern entstehen einzigartige Abende.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-10 mb-20"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            {[
              {
                title: 'Ramnek & Dahinden',
                subtitle: 'Die längste Nacht',
                description: 'Hugo Ramnek liest, begleitet von Puppen, gebaut und geführt von Delia Dahinden.',
                image: '/covers/die-laengste-nacht.jpg',
              },
              {
                title: 'Ramnek und fÖn&tÖn',
                subtitle: 'Seeliebe und andere Fallen',
                description: 'Leseperformance mit dem Duo fÖn&tÖn – zärtlich, witzig, melancholisch.',
                image: '/covers/der-letzte-badegast.jpg',
              },
              {
                title: 'Ramnek & Schumacher',
                subtitle: 'Das Letzte von Leopold',
                description: 'Die Fabelei über einen Zierkarpfen, erzählt und zum Klingen gebracht.',
                image: '/covers/das-letzte-von-leopold.jpg',
              },
              {
                title: 'Ramnek & Jaeger',
                subtitle: 'Ramneks Jukebox',
                description: 'Literatur trifft Pop – Michael Jaeger verwandelt Worte in Improvisation.',
                image: '/covers/meine-ge-ge-generation.jpg',
              },
            ].map((performance, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
                variants={fadeInUp}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-[3/4] md:aspect-auto">
                    <Image
                      src={performance.image}
                      alt={performance.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="mb-2 group-hover:text-accent transition-colors">
                      {performance.title}
                    </h3>
                    <p className="text-xl italic text-accent/80 mb-4">
                      {performance.subtitle}
                    </p>
                    <p className="leading-relaxed">
                      {performance.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA - Call to Action */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="bg-accent text-white p-16 text-center">
              <h2 className="mb-6 text-white">
                »Hugo Ramnek kann man meiden – oder mieten.«
              </h2>
              <p className="text-xl mb-10 opacity-95">
                Für Leseperformances im Solo, im Duo, im Trio.<br/>
                Für Ihre Veranstaltung, Ihr Festival, Ihre Bühne.
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-white text-accent px-12 py-5 rounded font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
              >
                Kontaktinformationen
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency - Kommende Events & Verfügbarkeit */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-4">Kommende Lesungen</h2>
            <p className="text-lead">
              Erleben Sie Hugo Ramnek live – Termine 2025
            </p>
          </motion.div>

          <motion.div
            className="space-y-6 mb-12"
            variants={staggerContainer}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            {[
              {
                date: '15. März 2025',
                time: '19:30 Uhr',
                title: 'Die längste Nacht',
                location: 'Literaturhaus Zürich',
              },
              {
                date: '22. April 2025',
                time: '20:00 Uhr',
                title: 'Ramnek & fÖn&tÖn',
                location: 'Theater am Gleis, Winterthur',
              },
              {
                date: '10. Mai 2025',
                time: '19:00 Uhr',
                title: 'Lesungen aus der Schneekugel',
                location: 'Buchhandlung Beer, St. Gallen',
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-accent"
                variants={fadeInUp}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-accent font-bold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <h3 className="mb-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center bg-accent/10 p-8 rounded-lg"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <p className="text-lg mb-4">
              <strong>Sie planen eine Veranstaltung?</strong>
            </p>
            <p className="leading-relaxed">
              Hugo Ramnek ist für Lesungen, Leseperformances und literarische Veranstaltungen buchbar.
              Für Anfragen nutzen Sie gerne die Kontaktmöglichkeiten weiter unten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success & Failure - Kontakt */}
      <section id="kontakt" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <h2 className="mb-6">Kontakt</h2>
            <p className="text-lead">
              Für Buchungen, Lesungen und alle Fragen rund um das literarische Werk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/70 backdrop-blur p-10 rounded-lg shadow-xl"
              {...fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <h3 className="mb-8 pb-4 border-b-2 border-accent/20">Kontaktdaten</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-600 mb-1">Name</p>
                    <p>Hugo Ramnek</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-600 mb-1">Adresse</p>
                    <p>Münchsteig 1<br/>8008 Zürich<br/>Schweiz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-600 mb-1">Telefon</p>
                    <a href="tel:+41444226084" className="hover:text-accent transition-colors">+41 44 422 60 84</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-600 mb-1">E-Mail</p>
                    <a href="mailto:ramnek@sunrise.ch" className="text-accent hover:underline">
                      ramnek@sunrise.ch
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t-2 border-accent/20">
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  Twitter-Account hat Hugo Ramnek keinen. Auch nicht Facebook.<br/>
                  Buchen kann man ihn trotzdem. Dann hat man Gesicht und Buch analog. Und live.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur p-10 rounded-lg shadow-xl"
              {...fadeInUp}
              viewport={{ once: true }}
              whileInView="animate"
              initial="initial"
            >
              <h3 className="mb-8 pb-4 border-b-2 border-accent/20">Nachricht senden</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-white"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-all bg-white"
                    placeholder="ihre.email@beispiel.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-semibold mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none bg-white"
                    placeholder="Ihre Nachricht..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded font-bold transition-all disabled:opacity-50 hover:shadow-lg"
                >
                  {formStatus === 'sending' ? 'Wird gesendet...' : formStatus === 'sent' ? '✓ Gesendet!' : formStatus === 'error' ? 'Fehler! Bitte erneut versuchen' : 'Absenden'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
