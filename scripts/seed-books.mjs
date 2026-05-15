import pg from 'pg'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const { Client } = pg

// Load .env.local if present
try {
  const env = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8')
  for (const line of env.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx).trim()
    const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
    if (!process.env[key]) process.env[key] = val
  }
} catch {}

const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL
if (!connectionString) {
  console.error('No DATABASE_URL set')
  process.exit(1)
}

const client = new Client({ connectionString })
await client.connect()

const books = [
  {
    slug: 'schuhgeschichten',
    title: 'Ich erröte vom Schaft bis zur Sohle',
    subtitle: 'Schuhgeschichten',
    description: '30 Geschichten, in denen Schuhe die zentrale Rolle spielen – als Hauptdarsteller und Dreh- und Angelpunkt der Handlung.',
    longDescription: 'Eine Anthologie mit 30 Geschichten, in denen Schuhe die zentrale Rolle spielen – nicht als bloße Requisiten, sondern als Hauptdarsteller und Dreh- und Angelpunkte der Handlung. Die Sammlung erforscht Schuhe als Symbole und Metaphern, die Erinnerungen bergen und Identität reflektieren.\n\nHerausgegeben von Wolfram Schneider-Lastin und Christa Prameshuber. Mit Beiträgen von 30 Autoren aus Deutschland, Österreich und der Schweiz, darunter Katrin Seglitz, Martin Kunz, Barbara Traber, Sabine Bierich, Alice Grünfelder, Patricia Büttiker, Esther Banz und Hugo Ramnek.',
    excerpt: null,
    year: 2026, format: 'Gebundene Ausgabe', pages: 200,
    priceEur: '29.90', priceChf: '29.90',
    isbn: '978-3-907238-52-3', ebook: false,
    purchaseLink: 'https://arisverlag.ch/products/ich-errote-vom-schaft-bis-zur-sohle-schuhgeschichten',
    specialNotes: 'Erscheint im März 2026. Eine Anthologie mit einem Beitrag von Hugo Ramnek, herausgegeben von Wolfram Schneider-Lastin und Christa Prameshuber.',
    sortOrder: 1,
    awards: [], reviews: [], mediaLinks: [],
  },
  {
    slug: 'die-laengste-nacht',
    title: 'Die längste Nacht',
    subtitle: 'Elegische Flüchtigkeiten',
    description: 'Nachsinnen über alte Eltern und andere Sterbliche.',
    longDescription: 'Die längste Nacht erzählt von Augenblicken aus dem Leben der Verstorbenen und mit den Verstorbenen, von den Hinterbliebenen, auch von Fremden, Unbekannten, selbst von Tieren. Alle sind wir Ausgesetzte unter dem Stern der Vergänglichkeit. In poetischen Momentaufnahmen hält Hugo Ramnek das Flüchtige fest. Für die Dauer eines Gedichts wird sie sichtbar, die Verbindung zwischen denen, die sind, und denen, die nicht mehr sind, die Anwesenheit der Abwesenden.',
    excerpt: 'Ahnen\n\nStimmen aus den Spalten\nDes Alltags den Rissen\nDes Schlafs stillgelegt\nDoch unverstummt',
    year: 2022, format: 'Gebundene Ausgabe, ca. 100 Seiten, Lesebändchen', pages: 100,
    priceEur: '21.00', priceChf: '26.50',
    isbn: '978-3-99029-491-8', ebook: true,
    purchaseLink: '#',
    specialNotes: 'Das Gedicht „Himmel und Hölle" wurde beim Ersten Zürcher Lyrik-Preis ausgezeichnet.',
    sortOrder: 2,
    awards: ['Gedicht "Himmel und Hölle" beim Ersten Zürcher Lyrik-Preis ausgezeichnet'],
    reviews: [], mediaLinks: [],
  },
  {
    slug: 'die-schneekugel',
    title: 'Die Schneekugel',
    subtitle: 'Ein Roman in Erzählungen',
    description: 'Eine Familie, ein Ort an der Grenze, zwei Sprachen, verwehte Spuren, verborgene Geschichten, ein Stück Europa.',
    longDescription: 'Unter der Kuppel der Schneekugel liegen das Grenzstädtchen, der Slowenenhügel, der Eisenpass. Immer wieder schüttelt der Erzähler die Kugel; Schnee fällt auf Unterkärnten und die Obersteiermark. Der Roman wirbelt die ergreifenden Geschichten einer kleinen Familie im zweisprachigen Gebiet auf, die durchkreuzt werden von der großen Historie: Krieg, Verfolgung, Sprachenkampf.',
    excerpt: 'Und sein Taufpate? Immer wieder pries Mutter seine Sanftheit. War er denn nicht von «unten»? Nie sprach man von seiner Herkunft, auch er selbst nicht. Und die Tante war doch die Tochter von einer über der Grenze. Seine Familie hörte an der Grenze nicht auf. Oder doch? Der Bruder seines Paten und Mutters Cousin hatten im Krieg vielleicht gegeneinander gekämpft. Sie hätten sich aber auch verbrüdern können bei einem Familienfest. Wo fing Familie an? Wo hörte sie auf?',
    year: 2020, format: 'Gebundene Ausgabe, 127 Seiten, Lesebändchen', pages: 127,
    priceEur: '21.00', priceChf: '26.50',
    isbn: '978-3-99029-379-9', ebook: true,
    purchaseLink: 'https://www.wieser-verlag.com/buecher/die-schneekugel-978-3-99029-379-9/',
    specialNotes: 'Die titelgebende Erzählung erhielt den Premio letterario internazionale Merano-Europa 2019 und die Literarische Auszeichnung der Stadt Zürich 2020.',
    sortOrder: 3,
    awards: [
      'Premio letterario internazionale Merano-Europa 2019',
      'Literarische Auszeichnung der Stadt Zürich 2020',
    ],
    reviews: [
      { author: 'Manfred Papst', source: 'NZZ am Sonntag', text: 'Sensibel und präzis beschreibt [Ramnek] das Leben und Sterben in der Provinz inmitten der Verwerfungen der Zeitgeschichte. Als Leitmotiv dient ihm dabei eine Schneekugel, die der Erzähler immer wieder schüttelt. Der fallende Schnee, andernorts eine Metapher für das Zudecken und Vergessen, wirbelt hier die Vergangenheit nochmals auf. Die bewegenden Schicksale im zweisprachigen Grenzland bleiben auf diese Weise lebendig. Ein großes kleines Buch, lakonisch, tiefgründig, anmutig.', link: null },
      { author: 'Patrick Rina', source: 'ORF (Meraner Laudatio)', text: 'Uns allen täte ein Schütteln – in diesem Fall ein Lesen – der «Schneekugel» gut. Dieser Text fesselt den Leser einerseits mit dem dosierten (niemals schulmeisterlichen!) Rückgriff auf Kärntens verminte Zeitgeschichte, mit dem Erläutern der Nachkriegsdemenz, mit der Vorwegnahme einer Bodenprobe des Haider-Humus. Andererseits besticht der Text durch die weißen Zwischenräume. Er lebt auch vom Nicht-Geschriebenen, vom bloßen Anstupsen eines Gedankendominos, von den «verhauchenden Atemwölkchen» der Gefühle. Eine große kleine Erzählung mit poetischer Kraft!', link: null },
      { author: 'Literaturkommission der Stadt Zürich', source: 'Jurybegründung', text: 'Hugo Ramneks Roman „Die Schneekugel" führt uns in ein Städtchen direkt an der österreichisch-slowenischen Grenze – in eine Region mit einer dunklen Vergangenheit und einer ebenso schwierigen Gegenwart. Atmosphärisch dicht beschreibt Ramnek bewegende Schicksale hüben und drüben. Subtil nähert er sich grossen Themen wie Krieg und Sprachenkampf, erzählt von Brüdern, die gegen Brüder kämpften, oder von zweisprachigen Ortsschildern, die beschmiert wurden.', link: null },
      { author: 'Beat Mazenauer', source: 'Viceversa Literatur', text: 'Die Schneekugel plaudert nichts aus, sie gibt nur zu bedenken, dass bei genauem Hinhören unter der weissen Decke des Verdrängens die schlurfenden Spuren der Vergessenen zu vernehmen sind – auch dann noch, wenn die Mutter nicht mehr erzählen kann.', link: 'https://www.viceversaliteratur.ch/book/21306' },
      { author: 'Barbara Hoppe', source: 'Feuilletonscout', text: 'Mit wenigen Worten gelingt es Hugo Ramnek, Stimmung und Gefühle, Unwissen und Verwirrung, Unbehagen und das Wissen um die geistige Enge und dem Wunsch, dieser zu entkommen, zu umreißen. Zurecht ausgezeichnet mit dem Premio letterario internazionale Merano-Europa ist der kleine Roman mehr als nur ein Schlaglicht auf die Geschichte Kärntens. Er ist ein glitzernder Kristall im Schnee, dem man mehr als einen Augenblick schenken sollte.', link: 'https://www.feuilletonscout.com/die-macht-des-ungesagten-hugo-ramnek-die-schneekugel/' },
      { author: 'Janko Ferk', source: 'Literaturhaus Wien', text: 'Es gelingt Ramnek mit seiner Sprachkompetenz und reduzierten Erzählweise, die Seele Unterkärntens so zu erfassen, dass auch ein Nichtkärntner Leser spüren wird, wie dieses Land geatmet und getickt hat. Der Bogen reicht auf der einen Seite weit zurück und auf der anderen bis in die Gegenwart.', link: 'https://www.literaturhaus.at/index.php?id=12830' },
      { author: 'Marianne Fischer', source: 'Kleine Zeitung', text: 'Ein eindringliches Panorama der schwierigen Unterkärntner Zeitgeschichte. Ein Roman, der nachhallt.', link: null },
    ],
    mediaLinks: [
      { title: 'Ausnahmegespräch mit Katja Gasser (ORF)', url: 'https://www.youtube.com/watch?v=xunz7rdcRfc', type: 'video' },
      { title: 'Radiointerview mit Asja Boja (Radio AGORA)', url: 'https://cba.fro.at/466958', type: 'audio' },
      { title: 'Audio-CD "Koronar" - Die Schneekugel gelesen von Michael Kristof-Kranzelbinder', url: 'http://www.literaturundkunst.net/lyrik-preis-1-platz-fur-jacqueline-crevoisier/', type: 'audio' },
    ],
  },
  {
    slug: 'das-letzte-von-leopold',
    title: 'Das Letzte von Leopold',
    subtitle: 'Eine Fabelei',
    description: 'Eine abenteuerliche und amouröse Fabelei über einen Zierkarpfen und eine Bachforelle.',
    longDescription: 'Eine abenteuerliche und amouröse Fabelei über einen Zierkarpfen und eine Bachforelle, samt aquatischen Zwischenspielen, amphibischen Auswüchsen und nützlichen Reimzuflüssen, aus dem Wasser gezogen und noch feucht aufs Papier gebracht von Hugo Ramnek.\n\nKann man einen Aristokarpfen zum Helden einer Geschichte machen? Hugo Ramnek kann. Sein Leopold ist ein Fisch, der keinen Leser und erst recht keine Leserin kalt lässt. Und auch nicht Milka Bistritz, die lebenspralle Bachforelle, die das adelsstarre Herz des Zierfisches zu erobern sucht.\n\nDas Letzte von Leopold ist eine mit allen sprachlichen Wassern gewaschene Abenteuer- und Liebesgeschichte voll komischer Strudel und satirischer Wirbel.',
    excerpt: '»Immer wieder fragte die Bachforelle: Warum so geziert?, und der Adelskarpfen gluckerte etwas vom Erbe der Vorväter. Ach, Mademoiselle, unsere Verbindung wäre, mit Verlaub gesagt, Unzucht. Eine Mesalliance par excellence. – Leo, du bist total überzüchtet! Milkas empörte Blasen zerplatzten an der Oberfläche und erschreckten eine Kolonie von Wasserläufern so, dass sie in Panik auseinanderstoben.«',
    year: 2019, format: 'Gebundene Ausgabe, 93 Seiten, Lesebändchen', pages: 93,
    priceEur: '21.00', priceChf: '26.50',
    isbn: '978-3-99029-346-1', ebook: true,
    purchaseLink: 'https://www.wieser-verlag.com/buecher/das-letzte-von-leopold-978-3-99029-346-1/',
    specialNotes: 'Das Letzte von Leopold (Urfassung) erhielt 2008 den Preis des Kärntner Schriftstellerverbandes.',
    sortOrder: 4,
    awards: ['Preis des Kärntner Schriftstellerverbandes 2008 (Urfassung)'],
    reviews: [
      { author: 'Sabine Schuster', source: 'Online-Buchmagazin Literaturhaus Wien', text: 'Schlussendlich funktioniert Ramneks verwegener Text gerade durch seinen konsequenten Unernst: Einen Karpfen zum Helden einer Geschichte zu machen, die als Liebesgeschichte verspielt, zärtlich und melancholisch, als Abenteuergeschichte spannend und als Gesellschaftssatire leichtfüßig ist, das ist doch ein echtes Husarenstück!', link: 'http://www.literaturhaus.at/index.php?id=12424' },
    ],
    mediaLinks: [],
  },
  {
    slug: 'meine-ge-ge-generation',
    title: 'Meine Ge-Ge-Generation',
    subtitle: 'Eine Jukebox',
    description: '45 neue Texte zu alten Scheiben – die Buch gewordene Jukebox.',
    longDescription: '45 neue Texte zu alten Scheiben: In seinem Buch spielt der musikbegeisterte Performance-Autor Hugo Ramnek mit den Songs, die in seinem Kopf spielen.\n\nVon B wie Beatles über J wie Joplin bis Z wie Zappa nimmt er seine Leser mit auf eine Musikreise durch Rock, Roll, Blues, Country, Soul, Folk, Punk, Beat und Austro-Pop.',
    excerpt: null,
    year: 2017, format: 'Gebundene Ausgabe, 103 Seiten, Lesebändchen', pages: 103,
    priceEur: '18.80', priceChf: '26.50',
    isbn: '978-3-99029-262-4', ebook: true,
    purchaseLink: 'https://www.wieser-verlag.com/buecher/meine-ge-ge-generation-978-3-99029-262-4/',
    specialNotes: null,
    sortOrder: 5,
    awards: [],
    reviews: [
      { author: 'Manfred Papst', source: 'NZZ am Sonntag, Bücherbeilage', text: 'Ein faszinierendes und bemerkenswert schön gestaltetes Opusculum.', link: null },
      { author: 'Serina Babka', source: 'Kronen Zeitung', text: 'Nicht nur in den Rillen entsteht Musik; bei Hugo Ramnek quillt sie zwischen den Zeilen hervor.', link: null },
    ],
    mediaLinks: [
      { title: 'Radio SRF 1 Nachtclub - Gespräch mit Ralph Wicki (Teil 1)', url: 'https://www.srf.ch/sendungen/nachtclub-mit-ralph-wicki/nachtclub-von-22-08-uhr-495', type: 'audio' },
      { title: 'Radio SRF 1 Nachtclub - Gespräch mit Ralph Wicki (Teil 2)', url: 'https://www.srf.ch/sendungen/nachtclub-mit-ralph-wicki/nachtclub-von-23-04-uhr-377', type: 'audio' },
      { title: 'Ramneks Wurlitzer - Radio AGORA Sendung', url: 'https://cba.fro.at/series/ramneks-wurlitzer', type: 'audio' },
    ],
  },
  {
    slug: 'der-letzte-badegast',
    title: 'Der letzte Badegast',
    subtitle: 'Roman',
    description: 'Der Jahrhundertsommer ist vorbei. Es regnet. Nur noch wenige Tage hat das Seebad geöffnet. Da taucht ein Fremder auf.',
    longDescription: 'Der Jahrhundertsommer ist vorbei. Es regnet. Nur noch wenige Tage hat das Seebad geöffnet. Der Bademeister muss jetzt vor allem putzen. Er ist erkältet und verdrossen. Da steht plötzlich jemand neben ihm, in der Hand einen Kübel mit einem lebendigen Fisch. Der Unbekannte beginnt zu erzählen.\n\nMit sanfter Hartnäckigkeit verwickelt er seinen Zuhörer in eine Lebensgeschichte, in der es von grotesken Begebenheiten wimmelt.',
    excerpt: '– Das Wasser trägt.\n– Das Wasser trügt. Alles Üble kommt aus dem Feuchten.\n– Alles Leben kommt aus dem Feuchten.\n– Deshalb hat es keinen Bestand.\n– Ach, Quatsch.',
    year: 2010, format: 'Gebundene Ausgabe, 141 Seiten, Lesebändchen', pages: 141,
    priceEur: '18.80', priceChf: '32.80',
    isbn: '978-3-85129-864-2', ebook: false,
    purchaseLink: 'https://www.wieser-verlag.com/buecher/der-letzte-badegast-978-3-85129-864-2/',
    specialNotes: 'Der Letzte Badegast wurde mit der Anerkennungsgabe der Stadt Zürich 2010 ausgezeichnet.',
    sortOrder: 6,
    awards: [
      'Anerkennungsgabe der Stadt Zürich 2010',
      'erostepost-Literaturpreis 2009 für die beste erotische Geschichte',
    ],
    reviews: [
      { author: 'Manfred Papst', source: 'NZZ am Sonntag', text: 'In seinem ersten Roman verbindet er die Kunst des Fabulierens mit formaler Disziplin, Leichtigkeit mit Tiefgang, Musikalität mit Witz. Seine Phantasie ist ausufernd, aber exakt. Ein Wurf!', link: null },
      { author: 'Julia Buatsi', source: 'Tagblatt', text: 'Voll von skurrilen Figuren und Geschichten rund ums Wasser. Ein Buch für alle, die dem Sommer nachtrauern.', link: null },
      { author: 'Erwin Messmer', source: 'orte. Schweizer Literaturzeitschrift, Nr.211', text: 'Ein Meisterstück der Badeliteratur.', link: null },
      { author: 'Amazon Leserrezension', source: 'Amazon', text: 'Ein Muss für alle, die das Wasser lieben. Der letzte Badegast hat es mit einem eleganten Kopfsprung in die Liste meiner Top-Fünf Bücher geschafft.', link: null },
    ],
    mediaLinks: [],
  },
  {
    slug: 'kettenkarussell',
    title: 'Kettenkarussell / Semanji vrtiljak',
    subtitle: 'Mit Wiesenmarktskizzen von Werner Berg',
    description: 'Ein zweisprachiges Wendebuch auf Deutsch und Slowenisch.',
    longDescription: 'Es ist ein stiller, einsamer Protagonist, dem man bei seinem Herumstreifen am Wiesenmarkt folgt, und so ist auch der Text selbst: trotz des Geschreies, Gelächters, Gebimmels, trotz des karnevalesken Aufeinandertreffen von Menschen und Tieren in der künstlichen Parallelwelt des Jahrmarkts bleibt der Erzählton wehmütig, ruhig, in sich gekehrt.',
    excerpt: 'Der erste Wagen ist auf der Wiese! Seit der kleine Albino ihm die Worte zugerufen hat, gibt die Kellerechse keine Ruhe mehr.',
    year: 2012, format: 'Deutsch, Slowenisch (Wendebuch), Gebundene Ausgabe, 70 Seiten', pages: 70,
    priceEur: '17.40', priceChf: '25.50',
    isbn: '978-3-99029-041-5', ebook: false,
    purchaseLink: 'https://www.wieser-verlag.com/buecher/kettenkarussell-semanji-vrtiljak-978-3-99029-041-5/',
    specialNotes: 'Wettbewerbstext beim Ingeborg-Bachmann-Preis 2012.',
    sortOrder: 7,
    awards: ['Wettbewerbstext beim Ingeborg-Bachmann-Preis 2012'],
    reviews: [
      { author: 'Elena Messner', source: 'Literaturhaus Wien', text: 'Es ist ein stiller, einsamer Protagonist, dem man bei seinem Herumstreifen am Wiesenmarkt folgt. Der Text konzentriert sich auf das Innenleben des Helden, der aufmerksam beobachtet, viel empfindet, und (noch) nicht genug von sich selbst und seiner Umgebung versteht. Das macht die sanfte Sogwirkung des Textes aus.', link: null },
      { author: 'Redaktion', source: 'Der Standard', text: 'Hugo Ramnek verwebt in die Erzählung die unsichtbaren Trennlinien, die zwischen der slowenischen und der deutschsprachigen Bevölkerung bestanden und macht sie sichtbar.', link: null },
      { author: 'Valeria Heintges', source: 'Rezension', text: 'Souverän übersetzt Autor Hugo Ramnek die Feststimmung und den schwelenden Rassismus in Sprache.', link: null },
    ],
    mediaLinks: [],
  },
  {
    slug: 'momentum',
    title: 'Momentum',
    subtitle: 'Arno Popotnig mit Texten von Hugo Ramnek',
    description: 'Ein Dialog zwischen Bildern und Texten – dreisprachig.',
    longDescription: 'Im Zusammentreffen von Arno Popotnigs Bildern und Hugo Ramneks Texten entsteht ein Dialog, der beide Künste neu beleuchtet. Der Maler und der Schriftsteller sind einander begegnet, haben sich auf ein gemeinsames Experiment eingelassen.',
    excerpt: 'Lichtblick\n\nDu als Ich\nStiller Begleiter\nIn aufhellender Finsternis\n\nDer Spiegel schaut zurück',
    year: 2014, format: 'Deutsch, Slowenisch, Englisch, Gebundene Ausgabe, 96 Seiten', pages: 96,
    priceEur: '20.00', priceChf: '30.00',
    isbn: '978-3-99029-070-5', ebook: false,
    purchaseLink: '#',
    specialNotes: '»Momentum« bedeutet den Augenblick, die Bewegung, den Schwung.',
    sortOrder: 8,
    awards: [], reviews: [], mediaLinks: [],
  },
  {
    slug: 'wo-kommen-die-worte-her',
    title: 'Wo kommen die Worte her?',
    subtitle: 'Hrsg. Hans-Joachim Gelberg',
    description: 'Neue Gedichte für Kinder und Erwachsene. Gedichte und Bilder aller Art.',
    longDescription: 'Hans-Joachim Gelberg, der Lyrik leidenschaftlich verpflichtet, legt seine neue Gedicht-Anthologie vor. Ein fulminantes Werk für Kinder und Erwachsene, das Tür und Tor zu einer Sprachwelt ohnegleichen öffnet.',
    excerpt: null,
    year: 2012, format: 'Deutsch, Gebundene Ausgabe, 264 Seiten', pages: 264,
    priceEur: '19.95', priceChf: '',
    isbn: '978-3-40779-986-9', ebook: false,
    purchaseLink: '#',
    specialNotes: 'Eine Anthologie mit Gedichten von Hugo Ramnek und weiteren renommierten AutorInnen.',
    sortOrder: 9,
    awards: ['Die besten 7 Bücher für junge Leser (Deutschlandfunk), Januar 2012'],
    reviews: [
      { author: 'Amazon Leserrezension', source: 'Amazon', text: 'Es gibt wenige Bücher, die für Kinder und Erwachsene gleichermaßen interessant sind. Dieses hier gehört mit Sicherheit dazu.', link: null },
      { author: 'Redaktion', source: '3sat Kulturzeit', text: '›Wo kommen die Worte her?‹, herausgegeben von Hans-Joachim Gelberg, ist bei Beltz und Gelberg erschienen und gehört in jeden guten Haushalt.', link: null },
    ],
    mediaLinks: [],
  },
  {
    slug: 'gluecksvogel',
    title: 'Glücksvogel',
    subtitle: 'Hrsg. Hans-Joachim Gelberg',
    description: 'Geschichten, Gedichte und Bilder – rund ums Glück, die Freude und die Liebe, wie Kinder sie kennen und erleben.',
    longDescription: 'Hans-Joachim Gelberg legt seine neue, brillante Sammlung von Geschichten, Gedichten und Bildern vor – rund ums Glück, die Freude und die Liebe, wie Kinder sie kennen und erleben.',
    excerpt: null,
    year: null, format: 'Deutsch, Gebundene Ausgabe, 240 Seiten', pages: 240,
    priceEur: '19.95', priceChf: '',
    isbn: '978-3-407-80235-8', ebook: false,
    purchaseLink: '#',
    specialNotes: 'Eine Anthologie mit einer Geschichte von Hugo Ramnek und weiteren renommierten AutorInnen.',
    sortOrder: 10,
    awards: [],
    reviews: [
      { author: 'Redaktion', source: 'BuchMarkt', text: 'Ein fantasievolles Lese- und Vorlesevergnügen für Kleine und Große.', link: null },
      { author: 'Redaktion', source: 'Lesart', text: 'Hans-Joachim Gelberg hat ein weiteres Mal Wort- und Bildschätze gehoben.', link: null },
    ],
    mediaLinks: [],
  },
]

let inserted = 0
for (const book of books) {
  const res = await client.query(
    `INSERT INTO "books"
      ("slug","title","subtitle","description","long_description","excerpt",
       "year","format","pages","price_eur","price_chf","isbn","ebook",
       "purchase_link","special_notes","sort_order","updated_at","created_at")
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,now(),now())
     ON CONFLICT (slug) DO NOTHING
     RETURNING id`,
    [
      book.slug, book.title, book.subtitle || null, book.description || null,
      book.longDescription || null, book.excerpt || null,
      book.year || null, book.format || null, book.pages || null,
      book.priceEur || null, book.priceChf || null,
      book.isbn || null, book.ebook,
      book.purchaseLink || null, book.specialNotes || null,
      book.sortOrder,
    ]
  )

  if (res.rows.length === 0) {
    console.log(`  skipped (already exists): ${book.slug}`)
    continue
  }

  const bookId = res.rows[0].id
  inserted++

  for (let i = 0; i < book.awards.length; i++) {
    await client.query(
      `INSERT INTO "books_awards" ("_order","_parent_id","award") VALUES ($1,$2,$3)`,
      [i + 1, bookId, book.awards[i]]
    )
  }

  for (let i = 0; i < book.reviews.length; i++) {
    const r = book.reviews[i]
    await client.query(
      `INSERT INTO "books_reviews" ("_order","_parent_id","author","source","text","link") VALUES ($1,$2,$3,$4,$5,$6)`,
      [i + 1, bookId, r.author, r.source, r.text, r.link || null]
    )
  }

  for (let i = 0; i < book.mediaLinks.length; i++) {
    const m = book.mediaLinks[i]
    await client.query(
      `INSERT INTO "books_media_links" ("_order","_parent_id","title","url","media_type") VALUES ($1,$2,$3,$4,$5)`,
      [i + 1, bookId, m.title, m.url, m.type]
    )
  }

  console.log(`  inserted: ${book.slug}`)
}

await client.end()
console.log(`\nDone — ${inserted} books inserted.`)
