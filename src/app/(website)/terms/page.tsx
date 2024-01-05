import React from 'react'

export default function TermsOfService() {
   return (
      <section className="flex flex-col justify-center sm:p-20 p-6 my-auto">
         <div className="mx-auto flex flex-col gap-6 p-6 shadow text-black bg-white rounded-[20px]">
            <h1 className="text-3xl font-bold mb-4 text-center underline">
               Terms of Service
            </h1>

            <p>
               Welcome to Litree! By using Litree and its services, you agree to
               comply with and be bound by the following terms and conditions.
               Please review them carefully. If you do not agree to these terms,
               please do not use Litree.
            </p>

            {/* Add more sections based on your terms and conditions */}

            <h2 className="text-xl font-bold mt-6">User Conduct</h2>
            <p>
               When using Litree, you agree to:
               <ul className="">
                  <li>Use Litree only for lawful purposes</li>
                  <li>Respect the rights and privacy of others</li>
                  {/* Add any other user conduct guidelines */}
               </ul>
            </p>

            <h2 className="text-xl font-bold mt-6">Intellectual Property</h2>
            <p>
               Litree and its content, features, and functionality are owned by
               Litree and are protected by international copyright, trademark,
               patent, trade secret, and other intellectual property or
               proprietary rights laws.
            </p>

            {/* Add more sections as needed */}

            <h2 className="text-xl font-bold mt-6">Disclaimer</h2>
            <p>
               Litree is provided "as is" and "as available" without any
               representations or warranties, expressed or implied. Litree makes
               no representations or warranties in relation to the use or
               completeness of the information on the platform.
            </p>

            <h2 className="text-xl font-bold mt-6">Contact Us</h2>
            <p>
               If you have any questions or concerns about our Terms of Service,
               please feel free to reach out to us at:
               <span className="italic">your-email@example.com</span>
            </p>

            <p className="mt-8">
               Thank you for using Litree responsibly. Your compliance with
               these terms helps us provide a safe and enjoyable platform for
               everyone.
            </p>
         </div>
      </section>
   )
}

export function generateMetadata() {
   return {
      title: `Terms of Service - Litree`,
      description: `Explore the Terms of Service for Litree, a Linktree clone designed with care by Sunny Sahsi.`,
   }
}
