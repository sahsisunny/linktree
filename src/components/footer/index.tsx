import React from 'react'
import Link from 'next/link'

function Footer() {
   return (
      <footer className=" bg-gray-200 py-4 fixed bottom-0 w-full">
         <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
            <div>
               <p className="text-sm text-gray-600">
                  &copy; {new Date().getFullYear()} LinkTree, Inc. All rights
               </p>
            </div>
            <nav className="flex gap-4 text-sm text-gray-600">
               <Link href="/privacy">Privacy Policy</Link>
               <Link href="/terms">Terms of Service</Link>
               <Link href="/contact">Contact Us</Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
