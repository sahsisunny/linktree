import React from 'react'
import Link from 'next/link'

function Footer() {
   return (
      <footer className="py-4 w-full border-t-[1px]">
         <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
            <div>
               <p className="text-sm ">
                  &copy; {new Date().getFullYear()} LinkTree, Inc. All rights
               </p>
            </div>
            <nav className="flex gap-4 text-sm ">
               <Link href="/privacy">Privacy Policy</Link>
               <Link href="/terms">Terms of Service</Link>
               <Link href="/contact">Contact Us</Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
