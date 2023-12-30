import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default:siteConfig.name,
    template: `%s | ${siteConfig.name}`, //추후엔 회사 이름이 들어갈수도있음
  },
  description: siteConfig.describtion,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
