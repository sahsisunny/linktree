export const imageUpload = async (image: File) => {
   const bodyData = new FormData()
   const UploadPrerset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
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
      console.log('imagedata', data)
      return data.secure_url // Assuming Cloudinary provides the URL in 'secure_url'
   } catch (error) {
      console.error('Error uploading image:', error)
      return null
   }
}
