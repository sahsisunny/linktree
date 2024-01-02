import Image from 'next/image'

interface ProfileSectionProps {
   username: string
   bio: string
   image: string
}

const ProfileSection = ({ username, bio, image }: ProfileSectionProps) => {
   return (
      <div className="flex flex-col justify-center items-center mb-8 text-center w-[60%]">
         <Image
            src={image}
            alt=""
            className="w-35 h-35 rounded-full"
            width={150}
            height={150}
         />
         <h1 className="text-2xl font-bold mt-4">@{username}</h1>
         <p className="text-xl text-gray-300">{bio}</p>
      </div>
   )
}

export default ProfileSection
