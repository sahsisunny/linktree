import type { Metadata } from 'next'
import '../globals.css'

import { Inter } from 'next/font/google'

import Footer from '@/components/footer'
import Header from '@/components/header'

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
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   )
}
