import { NotFoundPage } from '@payloadcms/next/views'
import config from '@payload-config'
import { importMap } from '../importMap'
import React from 'react'

export default async function NotFound() {
  const params = Promise.resolve({ segments: [] as string[] })
  const searchParams = Promise.resolve({} as Record<string, string | string[]>)
  return NotFoundPage({ config, importMap, params, searchParams })
}
