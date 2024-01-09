import Link from 'next/link'
import React from 'react'

function PreviewFloatingButton({ uri }: { uri: string }) {
   return (
      <Link href={uri}>
         <button
            className="md:hidden fixed bottom-20 right-5 z-20 bg  text-white font-semibold rounded-full px-4 py-2 flex items-center justify-center shadow-lg transition-all duration-100 ease-in-out hover:border-y-2 "
            aria-label="Preview"
         >
            <span className="text-xl">Preview</span>
         </button>
      </Link>
   )
}

export default PreviewFloatingButton
