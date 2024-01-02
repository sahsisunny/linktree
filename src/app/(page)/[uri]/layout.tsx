import './../../globals.css'

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
