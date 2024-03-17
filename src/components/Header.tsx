"use client"
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" >
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image src={Logo} alt="Logo"  />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={"font-medium  uppercase " + (pathname === link.href ? 'text-orange-500' : 'dark:text-gray-100')}
            >
              {link.title}
            </Link>
          ))}
         
      </div>
      <div>8 (800) 333-55-99</div>
    </header>
  )
}

export default Header