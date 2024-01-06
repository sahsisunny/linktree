import React from 'react'
import { MdClose } from 'react-icons/md'
import { GrSubtractCircle, GrAddCircle } from 'react-icons/gr'

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
      <div className="flex flex-col bgr rounded-[30px]">
         <div className="px-4 flex justify-center items-center relative w-full">
            <p className="text-lg font-bold w-full text-center">Edit Order</p>
            <button
               className="bg-transparent text-gray-200 p-2 text-2xl rounded-full"
               onClick={onClose}
            >
               <MdClose className="text-2xl hover:" />
            </button>
         </div>
         <div className="flex flex-col gap-2 p-2 w-full">
            <div className="flex flex-row justify-center items-center gap-6">
               <button
                  className="bg-transparent text-gray-200  text-2xl rounded-full transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black p-2"
                  onClick={decrementByOne}
               >
                  <GrSubtractCircle className="text-2xl" />
               </button>
               <p className="text-xl font-bold p-2 text-center">{number}</p>
               <button
                  className="bg-transparent text-gray-200  text-2xl rounded-full transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black p-2"
                  onClick={incrementByOne}
               >
                  <GrAddCircle className="text-2xl" />
               </button>
            </div>
         </div>
      </div>
   )
}

export default UpdateOrder
