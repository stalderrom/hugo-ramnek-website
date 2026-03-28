import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Veranstaltung',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Untertitel',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      options: { dateFormat: 'DD.MM.YYYY' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Uhrzeit',
      type: 'string',
      placeholder: 'z.B. 19:30 Uhr',
    }),
    defineField({
      name: 'shortLocation',
      title: 'Ort (Kurzform)',
      type: 'string',
      description: 'Wird in der Übersicht angezeigt, z.B. "Zürich"',
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'price',
      title: 'Preis / Eintritt',
      type: 'string',
      placeholder: 'z.B. CHF 20 / Eintritt frei',
    }),
    defineField({
      name: 'image',
      title: 'Bild (optional)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'location',
      title: 'Veranstaltungsort',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Name des Veranstaltungsortes', type: 'string' }),
        defineField({ name: 'contact', title: 'Kontaktperson (optional)', type: 'string' }),
        defineField({ name: 'address', title: 'Adresse', type: 'string' }),
        defineField({ name: 'city', title: 'Ort / PLZ', type: 'string' }),
        defineField({ name: 'phone', title: 'Telefon (optional)', type: 'string' }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Datum aufsteigend',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'shortLocation',
      media: 'image',
    },
    prepare({ title, date, location, media }) {
      return {
        title,
        subtitle: [date, location].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
