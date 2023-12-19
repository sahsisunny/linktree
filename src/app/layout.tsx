import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'LinkTree',
   description: 'A simple linktree',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            <main className="max-w-4xl mx-auto p-6">{children}</main>
            <Footer />
         </body>
      </html>
   )
}
