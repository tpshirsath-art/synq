import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synq - Automate IndiaMART Orders | B2B Ecommerce Solutions',
  description: 'Synq helps IndiaMART suppliers automate their business — with an ecommerce site, buyer app, and admin dashboard that drive repeat customers and faster growth.',
  keywords: 'IndiaMART automation, B2B ecommerce, supplier automation, order management, inventory sync, WhatsApp automation',
  authors: [{ name: 'Synq Agency' }],
  openGraph: {
    title: 'Synq - Automate IndiaMART Orders | B2B Ecommerce Solutions',
    description: 'Synq helps IndiaMART suppliers automate their business — with an ecommerce site, buyer app, and admin dashboard that drive repeat customers and faster growth.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Synq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synq - Automate IndiaMART Orders',
    description: 'Synq helps IndiaMART suppliers automate their business — with an ecommerce site, buyer app, and admin dashboard that drive repeat customers and faster growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
