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

await client.end()
console.log('Migrations complete')
