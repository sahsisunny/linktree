export const imageUpload = async (image: File) => {
   const bodyData = new FormData()
   bodyData.append('file', image)
   bodyData.append('upload_preset', 'mj53rhpy')

   try {
      const res = await fetch(
         'https://api.cloudinary.com/v1_1/dspyieeio/image/upload',
         {
            method: 'POST',
            body: bodyData,
         },
      )

      if (!res.ok) {
         throw new Error('Failed to upload image')
      }

      const data = await res.json()
      return data.secure_url
   } catch (error) {
      console.error('Error uploading image:', error)
      return null
   }
}
