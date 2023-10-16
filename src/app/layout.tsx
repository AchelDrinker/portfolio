import Head from 'next/head';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hugo Martineu - Portfolio',
  description: 'Portfolio de Hugo Martineu, développeur et étudiant à l\'Ecole 42',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hugo Martineu - Portfolio",
            "description": "Portfolio de Hugo Martineu, développeur et étudiant à l\'Ecole 42",
            "image": {
              "@type": "ImageObject",
              "url": "https://hugomartineu.com/public/images/Logo.ico",
              "height": 600,
              "width": 800
            }
          })}
        </script>
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
