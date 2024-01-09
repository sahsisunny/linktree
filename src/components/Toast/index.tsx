import React, { useEffect, useState } from 'react'

interface ToastProps {
   icon: React.ReactNode
   text: string
}

function Toast({ icon, text }: ToastProps) {
   const [visible, setVisible] = useState(true)

   useEffect(() => {
      const timer = setTimeout(() => {
         setVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
   }, [])

   return visible ? (
      <div className="fixed top-[15%] right-4 bg border-x-2  text-white p-4 rounded-2xl shadow-lg flex items-center">
         <div className="mr-2">{icon}</div>
         <p>{text}</p>
      </div>
   ) : null
}

export default Toast
