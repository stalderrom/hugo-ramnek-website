export type EventImage = {
  url?: string | null
  alt?: string | null
}

export type Event = {
  id: string
  title: string
  subtitle?: string | null
  date: string
  time?: string | null
  shortLocation?: string | null
  description?: string | null
  price?: string | null
  image?: EventImage | string | null
  location?: {
    name?: string | null
    contact?: string | null
    address?: string | null
    city?: string | null
    phone?: string | null
  } | null
}
