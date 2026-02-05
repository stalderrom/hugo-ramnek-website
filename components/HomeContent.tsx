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

// Events werden bald bekannt gegeben
const upcomingEvents: Array<{
  id: number;
  date: string;
  time: string;
  title: string;
  subtitle: string;
  shortLocation: string;
  description: string;
  price: string;
  location: {
    name: string;
    contact?: string;
    address: string;
    city: string;
    phone: string;
  };
}> = [];

export default function HomeContent() {
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);

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
                  Verbindung und Verlust, Alltägliches und Phantasiertes – Hugo Ramnek schreibt über das, was uns berührt.
                  <br />
                  Mit Humor und Poesie.
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
                className="grid grid-cols-3 gap-2 lg:gap-4 max-w-md text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex flex-col items-center gap-1.5">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-accent/70" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs lg:text-sm">Mehrfach ausgezeichnet</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-xs lg:text-sm">10 Bücher</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-accent/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  <span className="text-xs lg:text-sm">Literatur & Performance</span>
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

      {/* Next Event Teaser */}
      <section className="py-24 px-6 bg-accent/5">
        <motion.div
          className="max-w-7xl mx-auto"
          {...fadeInUp}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
        >
          <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <p className="text-sm uppercase tracking-wider font-semibold mb-4 opacity-90">Lesungen & Termine</p>
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Neue Termine folgen in Kürze</h2>
                  <p className="text-xl mb-4 opacity-95 leading-relaxed">
                    Die Termine für die kommenden Lesungen und Leseperformances werden in den nächsten Wochen hier veröffentlicht.
                  </p>
                  <p className="text-lg opacity-90 leading-relaxed">
                    Für Buchungsanfragen und Informationen zu privaten Lesungen nutzen Sie gerne die Kontaktmöglichkeiten weiter unten.
                  </p>
                </div>
                <a
                  href="#kontakt"
                  className="inline-block bg-white text-accent px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all shadow-lg self-start"
                >
                  Kontakt aufnehmen →
                </a>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/hugo-ramnek.jpg"
                  alt="Hugo Ramnek Performance"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
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
              <div className="mb-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Manfred Papst, NZZ am Sonntag</p>
              </div>
              <p className="italic leading-relaxed">
                »Ramnek verbindet die Kunst des Fabulierens mit formaler Disziplin, Leichtigkeit mit Tiefgang, Musikalität mit Witz.«
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
            >
              <div className="mb-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Alexander Peer, Poesiegalerie</p>
              </div>
              <p className="italic leading-relaxed">
                »Seine Gedichte sind wie Gefäße, die ein Stück Leben in sich tragen.«
              </p>
            </motion.div>

            <motion.div
              className="bg-white/70 backdrop-blur p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              variants={fadeInUp}
            >
              <div className="mb-3">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-accent mb-2">Delia Dahinden, Theaterschaffende</p>
              </div>
              <p className="italic leading-relaxed">
                »Ramnek auf der Bühne: Er zieht das Publikum in seinen Bann mit seiner präzisen Sprache, seinem Humor, seinem Rhythmus und seiner Präsenz.«
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
              Grenze in Bleiburg/Pliberk, studierte Deutsch und Englisch in Wien und Dublin. 
              Von 2001 bis 2005 besuchte er die Schauspiel Schule Zürich. 
              Der Autor und Leseperformer lebt in Zürich und Wien.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent p-8 rounded max-w-3xl mx-auto mb-12">
              <p className="text-xl italic leading-relaxed">
                »Ich schreibe und spiele. Nie würde ich es für mich allein tun. Das Schönste ist:
                Ich teile es, teile es mit, teile es mit Lesenden, Zuhörenden und Zuschauenden.«
              </p>
            </div>

            {/* Bildergalerie */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="grid grid-cols-3 gap-6">
                {[
                  '/gallery/Bildschirmfoto 2022-11-05 um 19.03.07.png',
                  '/gallery/HR im Tonstudio.jpg',
                  '/gallery/HR Voodoozeh Michael Solscher:Zürich liest.jpeg',
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="max-w-3xl mx-auto leading-relaxed">
              Hugo Ramnek tritt regelmäßig bei den Theater-Performances der Improvisationsgruppe
              <em> und jetzt</em> (Leitung: Peter Honegger) auf und unterrichtet am Liceo Artistico.
              Seine Lesungen sind oft Performances mit Musikern wie Balts Nill & Urs Sibi Sibold (fÖn&tÖn),
              Michael Jaeger, Arthur Ottowitz, Martin Schumacher und der Puppenspielerin Delia Dahinden.
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
              <p>Nomination Tage der deutschsprachigen Literatur 2012 in Klagenfurt</p>
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
                      <p className="text-base leading-relaxed mb-4 flex-1">
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
            className="mb-20"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="bg-white/70 backdrop-blur p-12 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Performance-Formate</h3>
              <div className="max-w-3xl mx-auto space-y-4 text-left">
                <p className="leading-relaxed">
                  Hugo Ramnek tritt in verschiedenen Performance-Formaten auf:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ramnek & Dahinden:</strong> Leseperformance mit Puppen von Delia Dahinden</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ramnek & fÖn&tÖn:</strong> Mit dem Musikduo Balts Nill & Urs Sibi Sibold</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ramnek & Schumacher:</strong> Mit Musiker Martin Schumacher</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>Ramnek & Jaeger:</strong> Literatur trifft Pop mit Michael Jaeger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong>und jetzt:</strong> Theater-Performances mit der Improvisationsgruppe (Leitung: Peter Honegger)</span>
                  </li>
                </ul>
                <p className="leading-relaxed pt-4">
                  Konkrete Termine für diese Formate werden in Kürze bekannt gegeben.
                </p>
              </div>
            </div>
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
              Neue Termine werden in Kürze bekannt gegeben
            </p>
          </motion.div>

          <motion.div
            className="mb-12"
            {...fadeInUp}
            viewport={{ once: true }}
            whileInView="animate"
            initial="initial"
          >
            <div className="bg-white/70 backdrop-blur p-12 rounded-lg shadow-lg text-center border-l-4 border-accent">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Neue Lesungstermine folgen</h3>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Die Termine für die kommenden Lesungen und Leseperformances werden in den nächsten Wochen hier veröffentlicht.
                Schauen Sie bald wieder vorbei oder kontaktieren Sie uns direkt für aktuelle Informationen.
              </p>
              <a
                href="#kontakt"
                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded font-bold transition-all shadow-lg"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
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

          <div className="max-w-2xl mx-auto">
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
                    <p className="text-accent">
                      ramnek (at) sunrise (punkt) ch
                    </p>
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
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-accent text-white p-6 rounded-t-lg">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-bold">{selectedEvent.date} um {selectedEvent.time}</p>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-lg opacity-95">{selectedEvent.subtitle}</p>
            </div>

            <div className="p-6 lg:p-8">
              <div className="prose prose-lg max-w-none mb-6">
                {selectedEvent.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="bg-accent/5 p-6 rounded-lg space-y-4 border-l-4 border-accent">
                <div>
                  <p className="font-semibold text-accent mb-1">Eintritt</p>
                  <p>{selectedEvent.price}</p>
                </div>

                <div>
                  <p className="font-semibold text-accent mb-1">Ort</p>
                  <p>{selectedEvent.location.name}</p>
                  {selectedEvent.location.contact && <p>{selectedEvent.location.contact}</p>}
                  <p>{selectedEvent.location.address}</p>
                  <p>{selectedEvent.location.city}</p>
                  {selectedEvent.location.phone && (
                    <p className="mt-2">
                      <a href={`tel:${selectedEvent.location.phone}`} className="text-accent hover:underline">
                        {selectedEvent.location.phone}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
