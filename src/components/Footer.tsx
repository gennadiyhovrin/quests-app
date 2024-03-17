import Link from 'next/link'
import SocialIcon from './social-icons'


export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col ">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="facebook" href="https://www.facebook.com"  />
          <SocialIcon kind="youtube" href="https://www.youtube.com"  />
          <SocialIcon kind="instagram" href="https://www.instagram.com"  />
        </div>
       
       
      </div>
    </footer>
  )
}