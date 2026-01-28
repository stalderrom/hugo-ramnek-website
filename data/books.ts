export interface Review {
  author: string;
  source: string;
  text: string;
  link?: string;
}

export interface MediaLink {
  title: string;
  url: string;
  type: 'video' | 'audio' | 'article';
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  excerpt?: string;
  format: string;
  pages: number;
  price: {
    eur: string;
    chf: string;
  };
  isbn: string;
  ebook: boolean;
  coverImage: string;
  additionalImages?: string[];
  purchaseLink: string;
  year?: number;
  awards?: string[];
  specialNotes?: string;
  reviews?: Review[];
  mediaLinks?: MediaLink[];
}

export const books: Book[] = [
  {
    id: 'schuhgeschichten',
    title: 'Ich erröte vom Schaft bis zur Sohle',
    subtitle: 'Schuhgeschichten',
    description: '30 Geschichten, in denen Schuhe die zentrale Rolle spielen – als Hauptdarsteller und Dreh- und Angelpunkt der Handlung.',
    longDescription: 'Eine Anthologie mit 30 Geschichten, in denen Schuhe die zentrale Rolle spielen – nicht als bloße Requisiten, sondern als Hauptdarsteller und Dreh- und Angelpunkte der Handlung. Die Sammlung erforscht Schuhe als Symbole und Metaphern, die Erinnerungen bergen und Identität reflektieren.\n\nHerausgegeben von Wolfram Schneider-Lastin und Christa Prameshuber. Mit Beiträgen von 30 Autoren aus Deutschland, Österreich und der Schweiz, darunter Katrin Seglitz, Martin Kunz, Barbara Traber, Sabine Bierich, Alice Grünfelder, Patricia Büttiker, Esther Banz und Hugo Ramnek.',
    format: 'Gebundene Ausgabe',
    pages: 200,
    price: { eur: '29.90', chf: '29.90' },
    isbn: '978-3-907238-52-3',
    ebook: false,
    coverImage: '/covers/schuhgeschichten.jpg',
    purchaseLink: 'https://arisverlag.ch/products/ich-errote-vom-schaft-bis-zur-sohle-schuhgeschichten',
    year: 2026,
    specialNotes: 'Erscheint im März 2026. Eine Anthologie mit einem Beitrag von Hugo Ramnek, herausgegeben von Wolfram Schneider-Lastin und Christa Prameshuber.',
  },
  {
    id: 'die-laengste-nacht',
    title: 'Die längste Nacht',
    subtitle: 'Elegische Flüchtigkeiten',
    description: 'Nachsinnen über alte Eltern und andere Sterbliche.',
    longDescription: 'Die längste Nacht erzählt von Augenblicken aus dem Leben der Verstorbenen und mit den Verstorbenen, von den Hinterbliebenen, auch von Fremden, Unbekannten, selbst von Tieren. Alle sind wir Ausgesetzte unter dem Stern der Vergänglichkeit. In poetischen Momentaufnahmen hält Hugo Ramnek das Flüchtige fest. Für die Dauer eines Gedichts wird sie sichtbar, die Verbindung zwischen denen, die sind, und denen, die nicht mehr sind, die Anwesenheit der Abwesenden.',
    excerpt: 'Ahnen\n\nStimmen aus den Spalten\nDes Alltags den Rissen\nDes Schlafs stillgelegt\nDoch unverstummt',
    format: 'Gebundene Ausgabe, ca. 100 Seiten, Lesebändchen',
    pages: 100,
    price: { eur: '21.00', chf: '26.50' },
    isbn: '978-3-99029-491-8',
    ebook: true,
    coverImage: '/covers/die-laengste-nacht.jpg',
    purchaseLink: '#',
    year: 2022,
    awards: ['Gedicht "Himmel und Hölle" beim Ersten Zürcher Lyrik-Preis ausgezeichnet'],
    specialNotes: 'Das Gedicht „Himmel und Hölle" wurde beim Ersten Zürcher Lyrik-Preis ausgezeichnet.',
  },
  {
    id: 'die-schneekugel',
    title: 'Die Schneekugel',
    subtitle: 'Ein Roman in Erzählungen',
    description: 'Eine Familie, ein Ort an der Grenze, zwei Sprachen, verwehte Spuren, verborgene Geschichten, ein Stück Europa.',
    longDescription: 'Unter der Kuppel der Schneekugel liegen das Grenzstädtchen, der Slowenenhügel, der Eisenpass. Immer wieder schüttelt der Erzähler die Kugel; Schnee fällt auf Unterkärnten und die Obersteiermark. Der Roman wirbelt die ergreifenden Geschichten einer kleinen Familie im zweisprachigen Gebiet auf, die durchkreuzt werden von der großen Historie: Krieg, Verfolgung, Sprachenkampf.',
    excerpt: 'Und sein Taufpate? Immer wieder pries Mutter seine Sanftheit. War er denn nicht von «unten»? Nie sprach man von seiner Herkunft, auch er selbst nicht. Und die Tante war doch die Tochter von einer über der Grenze. Seine Familie hörte an der Grenze nicht auf. Oder doch? Der Bruder seines Paten und Mutters Cousin hatten im Krieg vielleicht gegeneinander gekämpft. Sie hätten sich aber auch verbrüdern können bei einem Familienfest. Wo fing Familie an? Wo hörte sie auf?',
    format: 'Gebundene Ausgabe, 127 Seiten, Lesebändchen',
    pages: 127,
    price: { eur: '21.00', chf: '26.50' },
    isbn: '978-3-99029-379-9',
    ebook: true,
    coverImage: '/covers/die-schneekugel.jpg',
    purchaseLink: 'https://www.wieser-verlag.com/buecher/die-schneekugel-978-3-99029-379-9/',
    year: 2020,
    awards: [
      'Premio letterario internazionale Merano-Europa 2019',
      'Literarische Auszeichnung der Stadt Zürich 2020'
    ],
    specialNotes: 'Die titelgebende Erzählung erhielt den Premio letterario internazionale Merano-Europa 2019 und die Literarische Auszeichnung der Stadt Zürich 2020.',
    reviews: [
      {
        author: 'Manfred Papst',
        source: 'NZZ am Sonntag',
        text: 'Sensibel und präzis beschreibt [Ramnek] das Leben und Sterben in der Provinz inmitten der Verwerfungen der Zeitgeschichte. Als Leitmotiv dient ihm dabei eine Schneekugel, die der Erzähler immer wieder schüttelt. Der fallende Schnee, andernorts eine Metapher für das Zudecken und Vergessen, wirbelt hier die Vergangenheit nochmals auf. Die bewegenden Schicksale im zweisprachigen Grenzland bleiben auf diese Weise lebendig. Ein großes kleines Buch, lakonisch, tiefgründig, anmutig.'
      },
      {
        author: 'Patrick Rina',
        source: 'ORF (Meraner Laudatio)',
        text: 'Uns allen täte ein Schütteln – in diesem Fall ein Lesen – der «Schneekugel» gut. Dieser Text fesselt den Leser einerseits mit dem dosierten (niemals schulmeisterlichen!) Rückgriff auf Kärntens verminte Zeitgeschichte, mit dem Erläutern der Nachkriegsdemenz, mit der Vorwegnahme einer Bodenprobe des Haider-Humus. Andererseits besticht der Text durch die weißen Zwischenräume. Er lebt auch vom Nicht-Geschriebenen, vom bloßen Anstupsen eines Gedankendominos, von den «verhauchenden Atemwölkchen» der Gefühle. Eine große kleine Erzählung mit poetischer Kraft!'
      },
      {
        author: 'Literaturkommission der Stadt Zürich',
        source: 'Jurybegründung',
        text: 'Hugo Ramneks Roman „Die Schneekugel" führt uns in ein Städtchen direkt an der österreichisch-slowenischen Grenze – in eine Region mit einer dunklen Vergangenheit und einer ebenso schwierigen Gegenwart. Atmosphärisch dicht beschreibt Ramnek bewegende Schicksale hüben und drüben. Subtil nähert er sich grossen Themen wie Krieg und Sprachenkampf, erzählt von Brüdern, die gegen Brüder kämpften, oder von zweisprachigen Ortsschildern, die beschmiert wurden.'
      },
      {
        author: 'Beat Mazenauer',
        source: 'Viceversa Literatur',
        text: 'Die Schneekugel plaudert nichts aus, sie gibt nur zu bedenken, dass bei genauem Hinhören unter der weissen Decke des Verdrängens die schlurfenden Spuren der Vergessenen zu vernehmen sind – auch dann noch, wenn die Mutter nicht mehr erzählen kann.',
        link: 'https://www.viceversaliteratur.ch/book/21306'
      },
      {
        author: 'Barbara Hoppe',
        source: 'Feuilletonscout',
        text: 'Mit wenigen Worten gelingt es Hugo Ramnek, Stimmung und Gefühle, Unwissen und Verwirrung, Unbehagen und das Wissen um die geistige Enge und dem Wunsch, dieser zu entkommen, zu umreißen. Zurecht ausgezeichnet mit dem Premio letterario internazionale Merano-Europa ist der kleine Roman mehr als nur ein Schlaglicht auf die Geschichte Kärntens. Er ist ein glitzernder Kristall im Schnee, dem man mehr als einen Augenblick schenken sollte.',
        link: 'https://www.feuilletonscout.com/die-macht-des-ungesagten-hugo-ramnek-die-schneekugel/'
      },
      {
        author: 'Janko Ferk',
        source: 'Literaturhaus Wien',
        text: 'Es gelingt Ramnek mit seiner Sprachkompetenz und reduzierten Erzählweise, die Seele Unterkärntens so zu erfassen, dass auch ein Nichtkärntner Leser spüren wird, wie dieses Land geatmet und getickt hat. Der Bogen reicht auf der einen Seite weit zurück und auf der anderen bis in die Gegenwart.',
        link: 'https://www.literaturhaus.at/index.php?id=12830'
      },
      {
        author: 'Marianne Fischer',
        source: 'Kleine Zeitung',
        text: 'Ein eindringliches Panorama der schwierigen Unterkärntner Zeitgeschichte. Ein Roman, der nachhallt.'
      }
    ],
    mediaLinks: [
      {
        title: 'Ausnahmegespräch mit Katja Gasser (ORF)',
        url: 'https://www.youtube.com/watch?v=xunz7rdcRfc',
        type: 'video'
      },
      {
        title: 'Radiointerview mit Asja Boja (Radio AGORA)',
        url: 'https://cba.fro.at/466958',
        type: 'audio'
      },
      {
        title: 'Audio-CD "Koronar" - Die Schneekugel gelesen von Michael Kristof-Kranzelbinder',
        url: 'http://www.literaturundkunst.net/lyrik-preis-1-platz-fur-jacqueline-crevoisier/',
        type: 'audio'
      }
    ]
  },
  {
    id: 'das-letzte-von-leopold',
    title: 'Das Letzte von Leopold',
    subtitle: 'Eine Fabelei',
    description: 'Eine abenteuerliche und amouröse Fabelei über einen Zierkarpfen und eine Bachforelle.',
    longDescription: 'Eine abenteuerliche und amouröse Fabelei über einen Zierkarpfen und eine Bachforelle, samt aquatischen Zwischenspielen, amphibischen Auswüchsen und nützlichen Reimzuflüssen, aus dem Wasser gezogen und noch feucht aufs Papier gebracht von Hugo Ramnek.\n\nKann man einen Aristokarpfen zum Helden einer Geschichte machen? Hugo Ramnek kann. Sein Leopold ist ein Fisch, der keinen Leser und erst recht keine Leserin kalt lässt. Und auch nicht Milka Bistritz, die lebenspralle Bachforelle, die das adelsstarre Herz des Zierfisches zu erobern sucht.\n\nDas Letzte von Leopold ist eine mit allen sprachlichen Wassern gewaschene Abenteuer- und Liebesgeschichte voll komischer Strudel und satirischer Wirbel. Sie erzählt mit leichtflüssiger Melancholie und zärtlichem Witz vom dramatischen Dammbruch einer gestauten Liebe. Und lässt kein Auge trocken.\n\nIn Ramneks Seen und Bächen tummeln sich viele weitere Gestalten, die schräg sind – nach landläufigen Vorstellungen. Aber sie sind ja nicht an Land. Zwei davon sind Harpo & Carpo. Ihre Karpfenverse und Krapfenreime zeigen auf hintergründig verspielte Art, dass alles anders ist – weil alles fließt.',
    excerpt: '»Immer wieder fragte die Bachforelle: Warum so geziert?, und der Adelskarpfen gluckerte etwas vom Erbe der Vorväter. Ach, Mademoiselle, unsere Verbindung wäre, mit Verlaub gesagt, Unzucht. Eine Mesalliance par excellence. – Leo, du bist total überzüchtet! Milkas empörte Blasen zerplatzten an der Oberfläche und erschreckten eine Kolonie von Wasserläufern so, dass sie in Panik auseinanderstoben.«',
    format: 'Gebundene Ausgabe, 93 Seiten, Lesebändchen',
    pages: 93,
    price: { eur: '21.00', chf: '26.50' },
    isbn: '978-3-99029-346-1',
    ebook: true,
    coverImage: '/covers/das-letzte-von-leopold.jpg',
    purchaseLink: 'https://www.wieser-verlag.com/buecher/das-letzte-von-leopold-978-3-99029-346-1/',
    year: 2019,
    awards: ['Preis des Kärntner Schriftstellerverbandes 2008 (Urfassung)'],
    specialNotes: 'Das Letzte von Leopold (Urfassung) erhielt 2008 den Preis des Kärntner Schriftstellerverbandes.',
    reviews: [
      {
        author: 'Sabine Schuster',
        source: 'Online-Buchmagazin Literaturhaus Wien',
        text: 'Schlussendlich funktioniert Ramneks verwegener Text gerade durch seinen konsequenten Unernst: Einen Karpfen zum Helden einer Geschichte zu machen, die als Liebesgeschichte verspielt, zärtlich und melancholisch, als Abenteuergeschichte spannend und als Gesellschaftssatire leichtfüßig ist, das ist doch ein echtes Husarenstück!',
        link: 'http://www.literaturhaus.at/index.php?id=12424'
      }
    ]
  },
  {
    id: 'meine-ge-ge-generation',
    title: 'Meine Ge-Ge-Generation',
    subtitle: 'Eine Jukebox',
    description: '45 neue Texte zu alten Scheiben – die Buch gewordene Jukebox.',
    longDescription: '45 neue Texte zu alten Scheiben: In seinem Buch spielt der musikbegeisterte Performance-Autor Hugo Ramnek mit den Songs, die in seinem Kopf spielen.\n\nVon B wie Beatles über J wie Joplin bis Z wie Zappa nimmt er seine Leser mit auf eine Musikreise durch Rock, Roll, Blues, Country, Soul, Folk, Punk, Beat und Austro-Pop. Rhythmische Texte in allen Tonlagen, nicht bloß Coverversionen: Furchtlose Neuinterpretationen der Songs von Legenden wie Jimi Hendrix, Neil Young, Tom Waits, John Lee Hooker, Franz Schubert, Bob Dylan oder David Bowie, manchmal nah an den Originalen, manchmal fern, nie imitierend, aber immer damit verbunden.\n\nEine literarische Jukebox mit Stücken zum Auswählen, Nachhören, Mitsingen und Querlesen.',
    format: 'Gebundene Ausgabe, 103 Seiten, Lesebändchen',
    pages: 103,
    price: { eur: '18.80', chf: '26.50' },
    isbn: '978-3-99029-262-4',
    ebook: true,
    coverImage: '/covers/meine-ge-ge-generation.jpg',
    purchaseLink: 'https://www.wieser-verlag.com/buecher/meine-ge-ge-generation-978-3-99029-262-4/',
    year: 2017,
    reviews: [
      {
        author: 'Manfred Papst',
        source: 'NZZ am Sonntag, Bücherbeilage',
        text: 'Ein faszinierendes und bemerkenswert schön gestaltetes Opusculum.'
      },
      {
        author: 'Serina Babka',
        source: 'Kronen Zeitung',
        text: 'Nicht nur in den Rillen entsteht Musik; bei Hugo Ramnek quillt sie zwischen den Zeilen hervor.'
      }
    ],
    mediaLinks: [
      {
        title: 'Radio SRF 1 Nachtclub - Gespräch mit Ralph Wicki (Teil 1)',
        url: 'https://www.srf.ch/sendungen/nachtclub-mit-ralph-wicki/nachtclub-von-22-08-uhr-495',
        type: 'audio'
      },
      {
        title: 'Radio SRF 1 Nachtclub - Gespräch mit Ralph Wicki (Teil 2)',
        url: 'https://www.srf.ch/sendungen/nachtclub-mit-ralph-wicki/nachtclub-von-23-04-uhr-377',
        type: 'audio'
      },
      {
        title: 'Ramneks Wurlitzer - Radio AGORA Sendung',
        url: 'https://cba.fro.at/series/ramneks-wurlitzer',
        type: 'audio'
      }
    ]
  },
  {
    id: 'der-letzte-badegast',
    title: 'Der letzte Badegast',
    subtitle: 'Roman',
    description: 'Der Jahrhundertsommer ist vorbei. Es regnet. Nur noch wenige Tage hat das Seebad geöffnet. Da taucht ein Fremder auf.',
    longDescription: 'Der Jahrhundertsommer ist vorbei. Es regnet. Nur noch wenige Tage hat das Seebad geöffnet. Der Bademeister muss jetzt vor allem putzen. Er ist erkältet und verdrossen. Da steht plötzlich jemand neben ihm, in der Hand einen Kübel mit einem lebendigen Fisch. Der Unbekannte beginnt zu erzählen.\n\nMit sanfter Hartnäckigkeit verwickelt er seinen Zuhörer in eine Lebensgeschichte, in der es von grotesken Begebenheiten wimmelt. Der Bademeister hört zu, Erinnerungen steigen in ihm auf, die beiden Lebensläufe beginnen sich ineinander zu spiegeln. Die Erzählungen geraten ins Schwimmen. Wer hat was gesagt? Wer ist überhaupt wer?\n\nWasser trägt. Wasser trügt. Und es geht um mehr als Geplänkel: Der Erzähler wie sein Gast haben Geschichten von Liebe und Tod erlebt, die sie nicht vergessen können.\n\nDer letzte Badegast erzählt von der Macht der Geschichten, die das Leben befestigen und gleichzeitig verflüssigen und bisweilen unterspülen. Er erzählt vom ersten Kuss und vom letzten Blick, von geteilter Lust, verfehlter Liebe und verborgener Scham, von der Sehnsucht nach dem Anderen und der Angst davor. Und immer wieder vom Wasser.',
    excerpt: `– Das Wasser trägt.
– Das Wasser trügt. Alles Üble kommt aus dem Feuchten.
– Alles Leben kommt aus dem Feuchten.
– Deshalb hat es keinen Bestand.
– Ach, Quatsch.

Sie war rot. Ich liebe Rot, doch es waren nicht ihre Haare, es war auch nicht ihr Aussehen, es war ihr Geschau:
Wir gehen zur Blutbuche, ich stelle mich vor, reiche ihr die Hand und blicke sie an. Ihre Augen sind sonderbar: Sie blicken mich an – sie blicken mich nicht an.
Maureen schielte!
Mich überläuft's, noch heute, wenn ich daran denke. Ich verliebte mich augenblicklich und heftig.
Einen Sommer lang lebte ich in ihrem Blickfeld. Ihre Blicke fielen auf mich wie die Scheinwerfer eines Leuchtturms, aber ich konnte nie sagen: Erfassten sie mich, streiften sie mich bloß, zogen sie an mir vorbei? Aber gerade das zog mich unwiderstehlich an.
Einen ganzen Sommer lang lag Maureen unter der Blutbuche. Und ich lag zwischen ihren Blicken.`,
    format: 'Gebundene Ausgabe, 141 Seiten, Lesebändchen',
    pages: 141,
    price: { eur: '18.80', chf: '32.80' },
    isbn: '978-3-85129-864-2',
    ebook: false,
    coverImage: '/covers/der-letzte-badegast.jpg',
    purchaseLink: 'https://www.wieser-verlag.com/buecher/der-letzte-badegast-978-3-85129-864-2/',
    year: 2010,
    awards: [
      'Anerkennungsgabe der Stadt Zürich 2010',
      'erostepost-Literaturpreis 2009 für die beste erotische Geschichte'
    ],
    specialNotes: 'Der Letzte Badegast wurde mit der Anerkennungsgabe der Stadt Zürich 2010 ausgezeichnet. Für einen Ausschnitt aus Der letzte Badegast hat Hugo Ramnek in Salzburg den erostepost-Literaturpreis 2009 für die beste erotische Geschichte bekommen.',
    reviews: [
      {
        author: 'Manfred Papst',
        source: 'NZZ am Sonntag',
        text: 'In seinem ersten Roman verbindet er die Kunst des Fabulierens mit formaler Disziplin, Leichtigkeit mit Tiefgang, Musikalität mit Witz. Seine Phantasie ist ausufernd, aber exakt. Ein Wurf!'
      },
      {
        author: 'Julia Buatsi',
        source: 'Tagblatt',
        text: 'Voll von skurrilen Figuren und Geschichten rund ums Wasser. Ein Buch für alle, die dem Sommer nachtrauern.'
      },
      {
        author: 'Erwin Messmer',
        source: 'orte. Schweizer Literaturzeitschrift, Nr.211',
        text: 'Ein Meisterstück der Badeliteratur.'
      },
      {
        author: 'Amazon Leserrezension',
        source: 'Amazon',
        text: 'Ein Muss für alle, die das Wasser lieben. Der letzte Badegast hat es mit einem eleganten Kopfsprung in die Liste meiner Top-Fünf Bücher geschafft.'
      }
    ]
  },
  {
    id: 'kettenkarussell',
    title: 'Kettenkarussell / Semanji vrtiljak',
    subtitle: 'Mit Wiesenmarktskizzen von Werner Berg',
    description: 'Ein zweisprachiges Wendebuch auf Deutsch und Slowenisch.',
    longDescription: `Es ist ein stiller, einsamer Protagonist, dem man bei seinem Herumstreifen am Wiesenmarkt folgt, und so ist auch der Text selbst: trotz des Geschreies, Gelächters, Gebimmels, trotz des karnevalesken Aufeinandertreffen von Menschen und Tieren in der künstlichen Parallelwelt des Jahrmarkts bleibt der Erzählton wehmütig, ruhig, in sich gekehrt.

Der Text konzentriert sich auf das Innenleben des Helden, der aufmerksam beobachtet, viel empfindet, und (noch) nicht genug von sich selbst und seiner Umgebung versteht. Das macht die sanfte Sogwirkung des Textes aus. Ein schöneres, traurigeres Denkmal als diese in zwei Sprachen abgedruckte Erzählung mit den Skizzen von Werner Berg hätte der Bleiburger Wiesenmarkt sich kaum wünschen können.`,
    excerpt: `Der erste Wagen ist auf der Wiese! Seit der kleine Albino ihm die Worte zugerufen hat, gibt die Kellerechse keine Ruhe mehr. Ein Fort wächst heran außerhalb des Mäuerchens, das einst Stadtwall war. Er will nur mehr eines: hinaus auf die Wiese, wo sich Marktstände und Festzelte und Spaßbahnen ausbreiten, wo Lastwagen und Traktoren, Fahrende und Tagelöhner, Wirte und Vereine mit Zelten und Buden und der allgegenwärtige Marktmeister einen Traum aus Kulissen aufbauen, nüchtern und ohne Hast.

Wie vor einem Wunder stehen die Kleinstädter und staunen, was tagsüber und doch wie über Nacht hinzugekommen ist.`,
    format: 'Deutsch, Slowenisch (Wendebuch), Gebundene Ausgabe, 70 Seiten',
    pages: 70,
    price: { eur: '17.40', chf: '25.50' },
    isbn: '978-3-99029-041-5',
    ebook: false,
    coverImage: '/covers/kettenkarussell.jpg',
    purchaseLink: 'https://www.wieser-verlag.com/buecher/kettenkarussell-semanji-vrtiljak-978-3-99029-041-5/',
    year: 2012,
    awards: ['Wettbewerbstext beim Ingeborg-Bachmann-Preis 2012'],
    specialNotes: 'Wettbewerbstext beim Ingeborg-Bachmann-Preis 2012.',
    reviews: [
      {
        author: 'Elena Messner',
        source: 'Literaturhaus Wien',
        text: 'Es ist ein stiller, einsamer Protagonist, dem man bei seinem Herumstreifen am Wiesenmarkt folgt. Der Text konzentriert sich auf das Innenleben des Helden, der aufmerksam beobachtet, viel empfindet, und (noch) nicht genug von sich selbst und seiner Umgebung versteht. Das macht die sanfte Sogwirkung des Textes aus. Ein schöneres, traurigeres Denkmal als diese in zwei Sprachen abgedruckte Erzählung mit den Skizzen von Werner Berg hätte der Bleiburger Wiesenmarkt sich kaum wünschen können.'
      },
      {
        author: 'Redaktion',
        source: 'Der Standard',
        text: 'Hugo Ramnek verwebt in die Erzählung die unsichtbaren Trennlinien, die zwischen der slowenischen und der deutschsprachigen Bevölkerung bestanden und macht sie sichtbar. Seine Beschreibungen der Lustbarkeiten – von Autodrom bis zum Karussell – und des Umgangs der Jugendlichen beider Sprachen untereinander, freundschaftlich und konkurrierend zugleich, sind voll sprachlicher Wendungen und Metaphern.'
      },
      {
        author: 'Valeria Heintges',
        source: 'Rezension',
        text: 'Souverän übersetzt Autor Hugo Ramnek die Feststimmung und den schwelenden Rassismus in Sprache. Mit seiner Echse in der Tasche trifft der Jugendliche auf das schöne Mädchen, den Albinojungen und Milan. Sie alle sind von jenseits der Wiese, «verbohrte Slowener», wie die Leute sagen.'
      }
    ]
  },
  {
    id: 'momentum',
    title: 'Momentum',
    subtitle: 'Arno Popotnig mit Texten von Hugo Ramnek',
    description: 'Ein Dialog zwischen Bildern und Texten – dreisprachig.',
    longDescription: `Im Zusammentreffen von Arno Popotnigs Bildern und Hugo Ramneks Texten entsteht ein Dialog, der beide Künste neu beleuchtet. Der Maler und der Schriftsteller sind einander begegnet, haben sich auf ein gemeinsames Experiment eingelassen: Die Werke des einen fordern die des anderen heraus, ergänzen sie, widersprechen ihnen vielleicht – und vice versa.

Silvie Aigner schreibt dazu: „Popotnigs Bilder und Ramneks Texte sind im Austausch, sie kommentieren, begleiten, flankieren, ergänzen, widersprechen einander. ›Momentum‹ – das Wort bedeutet den Augenblick, die Bewegung, den Schwung. Gemeint ist der Moment, in dem eine Sequenz aus dem Zeitkontinuum herausgehoben wird. Der Maler und der Schriftsteller greifen sich Momente heraus, die sie festhalten – im Bild, im Text –, um sie der Vergänglichkeit zu entreißen."

Ein dreisprachiges Buch (Deutsch, Slowenisch, Englisch), das Kunst und Literatur in einen spannenden Dialog treten lässt.`,
    excerpt: `Lichtblick

Du als Ich
Stiller Begleiter
In aufhellender Finsternis

Der Spiegel schaut zurück`,
    format: 'Deutsch, Slowenisch, Englisch, Gebundene Ausgabe, 96 Seiten',
    pages: 96,
    price: { eur: '20.00', chf: '30.00' },
    isbn: '978-3-99029-070-5',
    ebook: false,
    coverImage: '/covers/momentum.jpg',
    additionalImages: ['/covers/momentum-2.jpg'],
    purchaseLink: '#',
    year: 2014,
    specialNotes: '»Momentum« bedeutet den Augenblick, die Bewegung, den Schwung. Der Maler und der Schriftsteller greifen sich Momente heraus, die sie festhalten – im Bild, im Text – um sie der Vergänglichkeit zu entreißen.',
  },
  {
    id: 'wo-kommen-die-worte-her',
    title: 'Wo kommen die Worte her?',
    subtitle: 'Hrsg. Hans-Joachim Gelberg',
    description: 'Neue Gedichte für Kinder und Erwachsene. Gedichte und Bilder aller Art.',
    longDescription: `Hans-Joachim Gelberg, der Lyrik leidenschaftlich verpflichtet, legt seine neue Gedicht-Anthologie vor. Ein fulminantes Werk für Kinder und Erwachsene, das Tür und Tor zu einer Sprachwelt ohnegleichen öffnet. Sag, wo kommen die Worte her? Diese Frage sandte H.-J. Gelberg aus und rund 200 AutorInnen und IllustratorInnen antworteten ihm mit ihren Gedichten, Bildern und Bildworten – allesamt so unterschiedlich wie abwechslungsreich.

Es sind Texte und Bilder aller Art: hintergründig, auch rätselhaft, komisch, kritisch oder einfach direkt. Ein Nachdenken über alles und jedes, mit Phantasie, Humor und Mut. Gespickt mit ausgewählten Texten aus dem großen deutschen Lyrik-Kanon, entstand so eine einzigartige Sammlung, die neue Maßstäbe setzt. Ein Buch der seltenen Art, wie wir sie lieben: gut gemacht für Kinder und Erwachsene.`,
    format: 'Deutsch, Gebundene Ausgabe, 264 Seiten',
    pages: 264,
    price: { eur: '19.95', chf: '' },
    isbn: '978-3-40779-986-9',
    ebook: false,
    coverImage: '/covers/wo-kommen-die-worte-her.jpg',
    additionalImages: ['/covers/wo-kommen-die-worte-her-2.jpg'],
    purchaseLink: '#',
    year: 2012,
    awards: ['Die besten 7 Bücher für junge Leser (Deutschlandfunk), Januar 2012'],
    specialNotes: 'Eine Anthologie mit Gedichten von Hugo Ramnek und weiteren renommierten AutorInnen. Leseprobe verfügbar unter: http://www.beltz.de/fileadmin/beltz/leseproben/978-3-407-79986-9.pdf',
    reviews: [
      {
        author: 'Amazon Leserrezension',
        source: 'Amazon',
        text: 'Es gibt wenige Bücher, die für Kinder und Erwachsene gleichermaßen interessant sind. Dieses hier gehört mit Sicherheit dazu.'
      },
      {
        author: 'Redaktion',
        source: '3sat Kulturzeit',
        text: '›Wo kommen die Worte her?‹, herausgegeben von Hans-Joachim Gelberg, ist bei Beltz und Gelberg erschienen und gehört in jeden guten Haushalt.'
      },
      {
        author: 'Redaktion',
        source: 'Freundin DONNA',
        text: 'Witziges, Nachdenkliches und Rätselhaftes für Kinder und Erwachsene von Janosch und Brecht, Ringelnatz und Gernhardt, schön illustriert und verpackt.'
      },
      {
        author: 'Redaktion',
        source: 'NZZ am Sonntag',
        text: 'Fünf grosse Anthologien seit 1966, jede auf ihre Art wegweisend; weit über 1000 Seiten. Schon das verdient Applaus. Umso mehr freut es, dass Hans-Joachim Gelberg als Lektor im Unruhestand erneut Texte und Bilder versammelt, die Kinder zu unterschiedlichsten Formen und Inhalten einladen.'
      },
      {
        author: 'Redaktion',
        source: 'Frankfurter Rundschau',
        text: '›Wo kommen die Worte her?‹ ist eine zeitgemäße Sammlung: frech und lebensweise.'
      },
      {
        author: 'Redaktion',
        source: 'Deutschlandfunk',
        text: 'Kurzweil, Komik, Gesellschaftskritik, Rätselhaftigkeit wechseln sich ab, dass es eine schiere Lust ist, in dieser Anthologie, mit allem was Rang und Namen hat, zu stöbern.'
      },
      {
        author: 'Redaktion',
        source: 'Lesart',
        text: 'Das bunte Werk regt an zum Blättern, Lesen, Lachen, Nachdenken und Immer-wieder-Hinschauen. (…) Hans-Joachim Gelberg ist ein genialer Initiator von Texten und Bildern.'
      },
      {
        author: 'Redaktion',
        source: 'Dresdner Neueste Nachrichten',
        text: 'Dieses Buch sollte der Verlag gleich im Multipack anbieten. Eins neben jedes Bett der Familie. Oder: Eins in den Flur, falls es noch drei Minuten zu zeitig ist, um zur Haltestelle zu gehen. Eins in die Küche als sinnvolle Begleitung fürs Rühren in der Suppe. Eins ins Bad für die Zeit, bis sich die elektrische Zahnbürste ausschaltet. Denn dieses Buch ist ein Schatz. Ein Leben lang.'
      },
      {
        author: 'Redaktion',
        source: 'Abendzeitung',
        text: 'Hans-Joachim Gelberg hat – zum fünften Mal jetzt – eine wunderbare Lyrik-Anthologie zusammengestellt, Titel ›Wo kommen die Worte her?‹.'
      },
      {
        author: 'Redaktion',
        source: 'Badische Zeitung',
        text: 'Ein echter Gedichte-Schatz!'
      },
      {
        author: 'Redaktion',
        source: 'Rhein-Main-Zeitung',
        text: 'Rätselhaft und komisch, direkt und verträumt, kritisch und geheimnisvoll, lang und kurz, gereimt und ungereimt – so macht Sprache Spaß.'
      }
    ]
  },
  {
    id: 'gluecksvogel',
    title: 'Glücksvogel',
    subtitle: 'Hrsg. Hans-Joachim Gelberg',
    description: 'Geschichten, Gedichte und Bilder – rund ums Glück, die Freude und die Liebe, wie Kinder sie kennen und erleben.',
    longDescription: `Hans-Joachim Gelberg legt seine neue, brillante Sammlung von Geschichten, Gedichten und Bildern vor – rund ums Glück, die Freude und die Liebe, wie Kinder sie kennen und erleben.

Das Glück, als Aleyna endlich wieder im Kindergarten auftaucht; die Zärtlichkeit, mit der Mirjam einen kleinen Vogel pflegt; Ludwigs Sehnsucht nach seinem Vater; die Aufregung beim Ausflug mit Markus; der Kummer der besten Freundin, als Ida wegzieht; Jerkos Bewunderung für die neue Lehrerin … Glücksgefühle durchströmen mal zart, mal wild diesen bunten Band, der sich behutsam auch ersten Verliebtheiten und stillen Freuden der Kinder nähert. Märchenhaftes, Komisches, Fantastisches und Nachdenkliches versammeln sich zu einer ungewöhnlichen Liebeserklärung an die Kindheit.`,
    format: 'Deutsch, Gebundene Ausgabe, 240 Seiten',
    pages: 240,
    price: { eur: '19.95', chf: '' },
    isbn: '978-3-407-80235-8',
    ebook: false,
    coverImage: '/covers/gluecksvogel.jpg',
    additionalImages: ['/covers/gluecksvogel-2.jpg'],
    purchaseLink: '#',
    specialNotes: 'Eine Anthologie mit einer Geschichte von Hugo Ramnek und weiteren renommierten AutorInnen.',
    reviews: [
      {
        author: 'Redaktion',
        source: 'BuchMarkt',
        text: 'Ein fantasievolles Lese- und Vorlesevergnügen für Kleine und Große.'
      },
      {
        author: 'Redaktion',
        source: 'Oberhessische Presse',
        text: 'Gedichte, Geschichten, Bilder – und alle erzählen von dem Glück. Mal fröhlich, mal nachdenklich und zart. ›Glücksvogel‹ verbindet Märchenhaftes, Komisches und Nachdenkliches in Wort und Bild – und nimmt junge Leser mit auf eine Reise in eine Welt voller Glück.'
      },
      {
        author: 'Redaktion',
        source: 'Lesart',
        text: 'Hans-Joachim Gelberg hat ein weiteres Mal Wort- und Bildschätze gehoben. (…) Ein Buch, das man nicht einfach ins Regal stellt, sondern in Reichweite deponiert, um immer wieder daran erinnert zu werden, hineinzuschauen. Seine Anstöße sind vielfältiger Art: Es bringt zum Lachen, lässt einen darüber nachsinnen, was Glück für einen selbst bedeutet und macht froh.'
      },
      {
        author: 'Redaktion',
        source: 'eselsohr',
        text: 'Aufgrund der Originalbeiträge und kongenialer Bilder: Prädikat „unbedingt entdeckenswert".'
      },
      {
        author: 'Redaktion',
        source: 'aufbruch',
        text: 'Märchenhaftes, Komisches, Fantastisches und Nachdenkliches versammeln sich zu einer ungewöhnlichen Liebeserklärung an die Kindheit.'
      },
      {
        author: 'Redaktion',
        source: 'alliteratus.com',
        text: 'So, auf diese Art, mag man Gedichte und Geschichten lesen, wobei das Alter des Lesers keine Rolle spielt. Es ist gleichzeitig ein Buch für das erste Lesealter wie auch für Leser in den Seniorenheimen. Beide Gruppen, und alle, die dazwischen liegen, werden mit Vergnügen das Buch zur Hand nehmen, um darin mit Bedacht zu schmökern.'
      }
    ]
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getAllBookIds(): string[] {
  return books.map((book) => book.id);
}
