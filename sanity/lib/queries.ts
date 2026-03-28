import { defineQuery } from 'next-sanity'

export const eventsQuery = defineQuery(`
  *[_type == "event"] | order(date asc) {
    _id,
    title,
    subtitle,
    date,
    time,
    shortLocation,
    description,
    price,
    "imageUrl": image.asset->url,
    "imageHotspot": image.hotspot,
    location {
      name,
      contact,
      address,
      city,
      phone
    }
  }
`)
