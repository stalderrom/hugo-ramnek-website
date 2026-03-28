export type SanityEvent = {
  _id: string
  title: string
  subtitle?: string
  date: string // ISO: YYYY-MM-DD
  time?: string
  shortLocation?: string
  description?: string
  price?: string
  imageUrl?: string
  imageHotspot?: { x: number; y: number }
  location?: {
    name?: string
    contact?: string
    address?: string
    city?: string
    phone?: string
  }
}
