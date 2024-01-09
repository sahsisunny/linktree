import '../../globals.css'

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body>
            <main className="flex justify-center items-center min-h-screen">
               {children}
            </main>
         </body>
      </html>
   )
}
