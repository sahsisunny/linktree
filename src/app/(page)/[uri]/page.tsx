import LinkItem from '@/components/publicPage/LinkItem'
import ProfileSection from '@/components/publicPage/ProfileSection'

function PublicPage() {
   return (
      <section className="flex flex-col justify-center items-center sm:p-20 p-4 w-full">
         <ProfileSection
            username="sahsisunny"
            bio="I'm a Software Engineer"
            image="https://avatars.githubusercontent.com/u/70854507?v=4"
         />

         <LinkItem url="https://twitter.com/sahsisunny" title="Twitter" />
         <LinkItem url="https://github.com/sahsisunny" title="Github" />
         <LinkItem
            url="https://www.linkedin.com/in/sahsisunny/"
            title="LinkedIn"
         />
         <LinkItem
            url="https://www.instagram.com/sahsisunny/"
            title="Instagram"
         />
         <LinkItem
            url="https://www.facebook.com/sahsisunny/"
            title="Facebook"
         />
         <LinkItem
            url="https://www.youtube.com/channel/UCZb8J0r9YyBz2qOJlqLXZ0w"
            title="YouTube"
         />
      </section>
   )
}

export default PublicPage
