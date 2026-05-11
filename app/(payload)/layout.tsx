import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
import { serverFunction } from './serverFunctions'
import config from '@payload-config'
import { importMap } from './admin/importMap'
import React from 'react'

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}
