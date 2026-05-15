import pg from 'pg'

const { Client } = pg

const connectionString = process.env.DATABASE_URL_UNPOOLED ?? process.env.DATABASE_URL
if (!connectionString) {
  console.log('No DATABASE_URL set, skipping migration')
  process.exit(0)
}

const client = new Client({ connectionString })
await client.connect()

await client.query(`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "role" varchar DEFAULT 'editor'`)

await client.query(`ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "_status" varchar DEFAULT 'draft'`)
await client.query(`CREATE INDEX IF NOT EXISTS "events__status_idx" ON "events" ("_status")`)

await client.query(`
  CREATE TABLE IF NOT EXISTS "_events_v" (
    "id" serial PRIMARY KEY,
    "parent_id" integer,
    "version_title" varchar,
    "version_subtitle" varchar,
    "version_date" timestamp(3) with time zone,
    "version_time" varchar,
    "version_short_location" varchar,
    "version_description" varchar,
    "version_price" varchar,
    "version_image_id" integer,
    "version_location_name" varchar,
    "version_location_contact" varchar,
    "version_location_address" varchar,
    "version_location_city" varchar,
    "version_location_phone" varchar,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" varchar DEFAULT 'draft',
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "snapshot" boolean,
    "autosave" boolean
  )
`)
await client.query(`CREATE INDEX IF NOT EXISTS "_events_v_parent_id_idx" ON "_events_v" ("parent_id")`)
await client.query(`CREATE INDEX IF NOT EXISTS "_events_v_version__status_idx" ON "_events_v" ("version__status")`)
await client.query(`CREATE INDEX IF NOT EXISTS "_events_v_snapshot_idx" ON "_events_v" ("snapshot")`)
await client.query(`CREATE INDEX IF NOT EXISTS "_events_v_autosave_idx" ON "_events_v" ("autosave")`)
await client.query(`ALTER TABLE "_events_v" ADD COLUMN IF NOT EXISTS "latest" boolean`)
await client.query(`CREATE INDEX IF NOT EXISTS "_events_v_latest_idx" ON "_events_v" ("latest")`)

// Foreign key only if not exists (postgres doesn't support IF NOT EXISTS for constraints)
await client.query(`
  DO $$ BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_constraint WHERE conname = '_events_v_parent_id_events_id_fk'
    ) THEN
      ALTER TABLE "_events_v"
        ADD CONSTRAINT "_events_v_parent_id_events_id_fk"
        FOREIGN KEY ("parent_id") REFERENCES "events"("id") ON DELETE SET NULL;
    END IF;
  END $$
`)

// Books collection
await client.query(`
  CREATE TABLE IF NOT EXISTS "books" (
    "id" serial PRIMARY KEY,
    "slug" varchar UNIQUE NOT NULL,
    "title" varchar NOT NULL,
    "subtitle" varchar,
    "description" varchar,
    "long_description" varchar,
    "excerpt" varchar,
    "year" numeric,
    "format" varchar,
    "pages" numeric,
    "price_eur" varchar,
    "price_chf" varchar,
    "isbn" varchar,
    "ebook" boolean DEFAULT false,
    "purchase_link" varchar,
    "special_notes" varchar,
    "cover_image_id" integer,
    "sort_order" numeric DEFAULT 99,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  )
`)
await client.query(`CREATE INDEX IF NOT EXISTS "books_slug_idx" ON "books" ("slug")`)

await client.query(`
  CREATE TABLE IF NOT EXISTS "books_awards" (
    "id" serial PRIMARY KEY,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "award" varchar NOT NULL
  )
`)
await client.query(`CREATE INDEX IF NOT EXISTS "books_awards_parent_idx" ON "books_awards" ("_parent_id")`)

await client.query(`
  CREATE TABLE IF NOT EXISTS "books_reviews" (
    "id" serial PRIMARY KEY,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "author" varchar NOT NULL,
    "source" varchar NOT NULL,
    "text" varchar NOT NULL,
    "link" varchar
  )
`)
await client.query(`CREATE INDEX IF NOT EXISTS "books_reviews_parent_idx" ON "books_reviews" ("_parent_id")`)

await client.query(`
  CREATE TABLE IF NOT EXISTS "books_media_links" (
    "id" serial PRIMARY KEY,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "title" varchar NOT NULL,
    "url" varchar NOT NULL,
    "media_type" varchar NOT NULL
  )
`)
// Rename 'type' -> 'media_type' if the old column still exists
await client.query(`
  DO $$ BEGIN
    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_name='books_media_links' AND column_name='type'
    ) THEN
      ALTER TABLE "books_media_links" RENAME COLUMN "type" TO "media_type";
    END IF;
  END $$
`)
await client.query(`CREATE INDEX IF NOT EXISTS "books_media_links_parent_idx" ON "books_media_links" ("_parent_id")`)

await client.query(`
  CREATE TABLE IF NOT EXISTS "books_additional_images" (
    "id" serial PRIMARY KEY,
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "image_id" integer
  )
`)
await client.query(`CREATE INDEX IF NOT EXISTS "books_additional_images_parent_idx" ON "books_additional_images" ("_parent_id")`)

// Add books_id to payload_locked_documents_rels (required when Books collection is added)
await client.query(`ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "books_id" integer`)
await client.query(`
  DO $$ BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_books_id_books_id_fk'
    ) THEN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_books_id_books_id_fk"
        FOREIGN KEY ("books_id") REFERENCES "books"("id") ON DELETE CASCADE;
    END IF;
  END $$
`)
await client.query(`CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_books_id_idx" ON "payload_locked_documents_rels" ("books_id")`)

await client.end()
console.log('Migrations complete')
