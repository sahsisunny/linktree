import React from 'react'
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'

import { updateUserUrlOrder } from '@/actions/urlCrud'
import debounce from '@/utils/debounce'

interface UpdateOrderProps {
   isOpen: boolean
   onClose: () => void
   url: string
   totalUrls: number
   order: number
}

const UpdateOrder: React.FC<UpdateOrderProps> = ({
   onClose,
   url,
   totalUrls,
   order,
}) => {
   const [number, setNumber] = React.useState(order)

   const incrementByOne = () => {
      if (number < totalUrls) {
         setNumber(number + 1)
      }
   }

   const decrementByOne = () => {
      if (number > 1) {
         setNumber(number - 1)
      }
   }

   const debounceUpdateOrder = debounce(
      async (url: string, order: number) => {
         await updateUserUrlOrder(url, order)
      },
      2000,
      false,
   )

   React.useEffect(() => {
      debounceUpdateOrder(url, number)
   }, [number, url, debounceUpdateOrder])

   return (
      <div className="flex flex-row justify-center items-center gap-6">
         <button
            className="bg-transparent text-gray-200  rounded-full transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black"
            onClick={decrementByOne}
         >
            <GrSubtractCircle />
         </button>
         <p className=" font-bold text-center">{number}</p>
         <button
            className="bg-transparent text-gray-200   rounded-full transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black"
            onClick={incrementByOne}
         >
            <GrAddCircle />
         </button>
      </div>
   )
}

export default UpdateOrder
