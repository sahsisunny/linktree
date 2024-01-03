import React from 'react'

function MobilePreview() {
   return (
      <div className="md:flex w-[25%] justify-center h-auto  fixed top-25 xl:right-20 right-6 hidden ">
         <div className="bg-black xl:w-[90%] w-full h-[80vh] rounded-[30px] shadow-lg py-6 px-4">
            <iframe
               src="/sunny"
               width="100%"
               height="100%"
               title="sunny"
               allowTransparency={true}
               sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
               className="rounded-2xl"
            ></iframe>
         </div>
      </div>
   )
}

export default MobilePreview
