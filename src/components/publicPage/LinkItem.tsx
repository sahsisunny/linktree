import Image from 'next/image'
import { FaShare } from 'react-icons/fa'

interface LinkItemProps {
   url: string
   title: string
}

const LinkItem = ({ url, title }: LinkItemProps) => {
   return (
      <div className="hoverAnimate flex  justify-between items-center sm:w-[90%] lg:w-[60%] w-full">
         <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverAnimate flex p-4 w-full justify-between items-center rounded-lg mb-4 bgr border-2"
         >
            <Image
               src={`https://www.google.com/s2/favicons?domain=${url}&sz=256`}
               alt=""
               className="w-12 h-12 rounded-full"
               width={50}
               height={50}
               quality={100}
            />

            <span className="text-xl font-bold ml-4">{title}</span>
            <button className=" text-white font-bold py-2 px-4 text-2xl ">
               <FaShare />
            </button>
         </a>
      </div>
   )
}

export default LinkItem
