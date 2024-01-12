import Image from 'next/image'
import { FaShare } from 'react-icons/fa'
import { LinkListStyle } from '@/types/theme'

interface LinkItemProps {
   url: string
   title: string
   LinkListStyle?: LinkListStyle
   background?: string
   favicon?: string
}

const LinkItem = ({
   url,
   title,
   LinkListStyle,
   background,
   favicon,
}: LinkItemProps) => {
   return (
      <div
         className={`link-style ${LinkListStyle?.type} ${LinkListStyle?.background} ${
            !LinkListStyle?.border || background === LinkListStyle?.background
               ? 'border-2 '
               : LinkListStyle?.border
         }`}
      >
         <a href={url} target="_blank" rel="noopener noreferrer">
            {favicon ? (
               <Image
                  src={favicon}
                  alt={`Favicon for ${url}`}
                  width={50}
                  height={50}
                  quality={100}
               />
            ) : (
               <Image
                  src={`https://www.google.com/s2/favicons?domain=${url}&sz=256`}
                  alt={`Favicon for ${url}`}
                  width={50}
                  height={50}
                  quality={100}
               />
            )}

            <span>{title}</span>
            <button>
               <FaShare />
            </button>
         </a>
      </div>
   )
}

export default LinkItem
