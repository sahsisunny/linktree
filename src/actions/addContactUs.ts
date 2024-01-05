'use server'
import mongoConnect from '@/libs/mongoConnect'
import { ContactUsModel } from '@/models/contactus'

type FormData = {
   name: string
   email: string
   message: string
}

export default async function addContactUs(formData: FormData) {
   mongoConnect()

   try {
      const pageDoc = await ContactUsModel.create({
         name: formData.name,
         email: formData.email,
         message: formData.message,
         date: Date.now(),
      })

      return {
         message: 'Page created successfully',
         data: JSON.parse(JSON.stringify(pageDoc)),
      }
   } catch (error) {
      console.log(error)
      return
   }
}
