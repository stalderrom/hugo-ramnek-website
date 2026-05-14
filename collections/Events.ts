import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Veranstaltung',
    plural: 'Veranstaltungen',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'shortLocation'],
    listSearchableFields: ['title', 'shortLocation'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  versions: {
    drafts: {
      autosave: false,
    },
  },
  defaultSort: 'date',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Titel',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Untertitel',
    },
    {
      name: 'date',
      type: 'date',
      label: 'Datum',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd.MM.yyyy',
        },
      },
    },
    {
      name: 'time',
      type: 'text',
      label: 'Uhrzeit',
      admin: {
        placeholder: 'z.B. 19:30 Uhr',
      },
    },
    {
      name: 'shortLocation',
      type: 'text',
      label: 'Ort (Kurzform)',
      admin: {
        description: 'Wird in der Übersicht angezeigt, z.B. "Zürich"',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Beschreibung',
    },
    {
      name: 'price',
      type: 'text',
      label: 'Preis / Eintritt',
      admin: {
        placeholder: 'z.B. CHF 20 / Eintritt frei',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Bild (optional)',
    },
    {
      name: 'location',
      type: 'group',
      label: 'Veranstaltungsort',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name des Veranstaltungsortes',
        },
        {
          name: 'contact',
          type: 'text',
          label: 'Kontaktperson (optional)',
        },
        {
          name: 'address',
          type: 'text',
          label: 'Adresse',
        },
        {
          name: 'city',
          type: 'text',
          label: 'Ort / PLZ',
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefon (optional)',
        },
      ],
    },
  ],
}
