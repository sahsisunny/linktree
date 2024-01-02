import React from 'react'

const LinkItem = () => {
   return (
      <div className="hoverAnimate flex  justify-between items-center sm:w-[90%] lg:w-[60%] w-full">
         <a
            href="#"
            className="hoverAnimate flex p-4 w-full justify-between items-center rounded-lg mb-4 bgr border-2"
         >
            <img
               src="http://localhost:3000/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLleOi5YFBR1g2kwZQVVJNOO-WPnys6xvLVs0YF4wNduWc%3Ds96-c&w=96&q=75"
               alt=""
               className="w-12 h-12 rounded-full"
            />

            <span className="text-xl font-bold ml-4">Twitter</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Open
            </button>
         </a>
      </div>
   )
}

function PublicPage() {
   return (
      <section className="flex flex-col justify-center items-center sm:p-20 p-4 w-full">
         <div className="flex flex-col justify-center items-center mb-8 text-center w-[60%]">
            <img
               src="http://localhost:3000/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocLleOi5YFBR1g2kwZQVVJNOO-WPnys6xvLVs0YF4wNduWc%3Ds96-c&w=96&q=75"
               alt=""
               className="w-35 h-35 rounded-full"
            />
            <h1 className="text-2xl font-bold mt-4">@sahsisunny</h1>
            <p className="text-xl text-gray-300">
               I am a full stack developer and I love to code and learn.
            </p>
         </div>
         <LinkItem />
         <LinkItem />
         <LinkItem />
         <LinkItem />
         <LinkItem />
         <LinkItem />
         <LinkItem />
      </section>
   )
}

export default PublicPage
