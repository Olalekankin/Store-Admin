import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { JSX } from 'react'

interface LinkItemProps {
  title: string
  href: string
  icon: JSX.Element
}

const LinkItem: React.FC<LinkItemProps> = ({ title, href, icon }) => {
  const pathname = usePathname()

  return (
    <li className='w-full'>
      <Link
        href={href}
        className={`py-3 px-4 rounded-lg flex items-center space-x-4 transition-colors duration-500 ease-in-out ${
          pathname === href ? 'bg-[#A4CD3A] text-white' : 'text-[#9CA3AF]'
        }`}
      >
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  )
}

export default LinkItem
