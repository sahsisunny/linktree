import './../../globals.css'

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <title>Sunny Sahsi</title>
         <body>
            <main>{children}</main>
         </body>
      </html>
   )
}
