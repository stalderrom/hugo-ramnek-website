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
await client.end()

console.log('Migration complete: added role column to users table')
