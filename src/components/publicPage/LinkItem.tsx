import Image from 'next/image'
import { FaShare } from 'react-icons/fa'

interface LinkItemProps {
   url: string
   title: string
}

const LinkItem = ({ url, title }: LinkItemProps) => {
   return (
      <div className="hoverAnimate flex justify-between items-center sm:w-[90%] lg:w-[60%] w-full">
         <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex p-4 w-full justify-between items-center rounded-[28px] border-x-[3px] bg shadow-xl"
         >
            <Image
               src={`https://www.google.com/s2/favicons?domain=${url}&sz=256`}
               alt=""
               className="sm:w-12 w-8 sm:h-12 h-8 rounded-full"
               width={50}
               height={50}
               quality={100}
            />

            <span className="sm:text-xl text-md font-bold ml-4">{title}</span>
            <button className=" text-white font-bold py-2 px-4 sm:text-2xl text-xl ">
               <FaShare />
            </button>
         </a>
      </div>
   )
}

export default LinkItem
