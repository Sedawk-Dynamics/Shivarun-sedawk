import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Shivarun Pharmaceuticals | A New Era of Trusted Healthcare',
  description:
    'Shivarun Pharmaceuticals Pvt. Ltd. — a quality-driven pharmaceutical company focused on branded generics, nutraceuticals, and WHO-GMP compliant contract manufacturing, delivering affordable and reliable healthcare solutions.',
  keywords: [
    'Shivarun Pharmaceuticals',
    'branded generics',
    'nutraceuticals',
    'WHO GMP',
    'pharmaceutical company India',
    'healthcare Gandhinagar',
  ],
  authors: [{ name: 'Shivarun Pharmaceuticals Pvt. Ltd.' }],
  openGraph: {
    title: 'Shivarun Pharmaceuticals | A New Era of Trusted Healthcare',
    description:
      'Quality-driven pharmaceutical company focused on branded generics, nutraceuticals, and WHO-GMP compliant manufacturing.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#CC1414',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
