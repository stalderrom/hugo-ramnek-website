import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'sortOrder'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'URL-Slug',
      required: true,
      unique: true,
      admin: { description: 'URL-Kennung, z.B. "die-schneekugel" (nur Kleinbuchstaben, Bindestriche)' },
    },
    { name: 'title', type: 'text', label: 'Titel', required: true },
    { name: 'subtitle', type: 'text', label: 'Untertitel' },
    { name: 'description', type: 'textarea', label: 'Kurzbeschreibung' },
    { name: 'longDescription', type: 'textarea', label: 'Beschreibung (lang)' },
    { name: 'excerpt', type: 'textarea', label: 'Leseprobe' },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Buchcover',
    },
    {
      name: 'additionalImages',
      type: 'array',
      label: 'Weitere Bilder',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', required: true, label: 'Bild' },
      ],
    },
    { name: 'year', type: 'number', label: 'Erscheinungsjahr' },
    { name: 'format', type: 'text', label: 'Format' },
    { name: 'pages', type: 'number', label: 'Seitenanzahl' },
    {
      name: 'price',
      type: 'group',
      label: 'Preis',
      fields: [
        { name: 'eur', type: 'text', label: 'EUR' },
        { name: 'chf', type: 'text', label: 'CHF' },
      ],
    },
    { name: 'isbn', type: 'text', label: 'ISBN' },
    { name: 'ebook', type: 'checkbox', label: 'E-Book verfügbar', defaultValue: false },
    { name: 'purchaseLink', type: 'text', label: 'Kauflink' },
    {
      name: 'awards',
      type: 'array',
      label: 'Auszeichnungen',
      fields: [
        { name: 'award', type: 'text', label: 'Auszeichnung', required: true },
      ],
    },
    { name: 'specialNotes', type: 'textarea', label: 'Hinweise' },
    {
      name: 'reviews',
      type: 'array',
      label: 'Rezensionen',
      fields: [
        { name: 'author', type: 'text', label: 'Autor/in', required: true },
        { name: 'source', type: 'text', label: 'Quelle', required: true },
        { name: 'text', type: 'textarea', label: 'Text', required: true },
        { name: 'link', type: 'text', label: 'Link' },
      ],
    },
    {
      name: 'mediaLinks',
      type: 'array',
      label: 'Medienlinks',
      fields: [
        { name: 'title', type: 'text', label: 'Titel', required: true },
        { name: 'url', type: 'text', label: 'URL', required: true },
        {
          name: 'mediaType',
          type: 'select',
          label: 'Typ',
          required: true,
          options: [
            { label: 'Video', value: 'video' },
            { label: 'Audio', value: 'audio' },
            { label: 'Artikel', value: 'article' },
          ],
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Reihenfolge',
      defaultValue: 99,
      admin: { description: 'Niedrigere Zahl = weiter oben in der Liste' },
    },
  ],
}
