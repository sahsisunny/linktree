import React from 'react'

function MobilePreview({ uri }: { uri: string }) {
   return (
      <div className="phone fixed top-25 xl:right-20 right-6 md:flex hidden rounded-[32px] w-[25%] h-[80vh] ">
         <iframe
            src={uri}
            width="100%"
            height="100%"
            title={`${uri} preview`}
            allowTransparency={true}
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="rounded-[25px]"
         ></iframe>
      </div>
   )
}

export default MobilePreview
