import EditLinks from '@/components/admin/EditLinks'
import React from 'react'

function Links() {
   return (
      <section className="flex flex-col justify-center h-screen gap-4 p-20 mt-8">
         <EditLinks />
         <EditLinks />
         <EditLinks />
      </section>
   )
}

export default Links
