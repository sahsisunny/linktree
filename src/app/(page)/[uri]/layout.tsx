import { Inter } from 'next/font/google'
import './../../globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const meta: Metadata = {
   title: 'Sunny Sahsi',
   description: 'I am a Software Engineer',
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <title>Sunny Sahsi</title>
         <body className="back">
            <main>{children}</main>
         </body>
      </html>
   )
}
