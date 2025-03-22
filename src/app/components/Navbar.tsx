"use client"
import Image from "next/image"
import SearchBox from "./SearchBox"
import ProfileDp from "../../../public/images/dp.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false)

  const handleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const pathname = usePathname()
 return (
   <div className='h-16 border-b border-gray-600 bg-black px-6 py-3.5 fixed lg:left-[255px] lg:w-[calc(100%-225px)]'>
     <div className='w-full flex items-center justify-between'>
       <SearchBox />
       <div className='flex items-center space-x-6'>
         <button>
           <svg
             className='text-[#9CA3AF]'
             xmlns='http://www.w3.org/2000/svg'
             width='1.32em'
             height='1.5em'
             viewBox='0 0 448 512'
           >
             <path
               fill='currentColor'
               d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71'
             />
           </svg>
         </button>
         <div ref={dropdownRef} className='relative flex items-center space-x-3 transition z-50 duration-500 ease-in'>
           <div className='rounded-full size-8 border'>
             <Image src={ProfileDp} alt='' className='size-full bg-cover' />
           </div>
           <button onClick={handleDropdown} className='flex items-center space-x-2 cursor-pointer'>
             <div className='text-[#9CA3AF]'>Admin User</div>
             <svg
               className='text-[#9CA3AF]'
               xmlns='http://www.w3.org/2000/svg'
               width='1.5em'
               height='1.5em'
               viewBox='0 0 12 12'
             >
               <path
                 fill='currentColor'
                 d='M2.22 4.47a.75.75 0 0 1 1.06 0L6 7.19l2.72-2.72a.75.75 0 0 1 1.06 1.06L6.53 8.78a.75.75 0 0 1-1.06 0L2.22 5.53a.75.75 0 0 1 0-1.06'
               />
             </svg>
           </button>
           {/* User Dropdown */}
           <div className={`absolute py-1 bg-[#1F2937] shadow-2xl w-full top-9 border border-gray-700 rounded-lg ${isOpen ? 'block': 'hidden'}`}>
             <Link
               href='/app/profile'
               className={`flex items-center px-4 py-3 space-x-2 group ${
                 pathname === '/app/profile'
                   ? 'text-[#A4CD3A]'
                   : 'text-[#D1D5DB]'
               }`}
             >
               <svg
                 className='group-hover:text-[#A4CD3A] size-5'
                 xmlns='http://www.w3.org/2000/svg'
                 width='24'
                 height='24'
                 viewBox='0 0 24 24'
               >
                 <g fill='none' fillRule='evenodd'>
                   <path d='m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z' />
                   <path
                     fill='currentColor'
                     d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.99 7.99 0 0 1 12 20a7.99 7.99 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984'
                   />
                 </g>
               </svg>
               <span className='text-sm group-hover:text-[#A4CD3A]'>
                 Profile
               </span>
             </Link>

             <Link
               href='/app/setting'
               className={`flex items-center px-4 py-3 space-x-2 group ${
                 pathname === '/app/setting'
                   ? 'text-[#A4CD3A]'
                   : 'text-[#D1D5DB]'
               }`}
             >
               <svg
                 className='group-hover:text-[#A4CD3A] size-5'
                 xmlns='http://www.w3.org/2000/svg'
                 width='24'
                 height='24'
                 viewBox='0 0 24 24'
               >
                 <path
                   fill='currentColor'
                   d='M14.82 1H9.18l-.647 3.237a8.5 8.5 0 0 0-1.52.88l-3.13-1.059l-2.819 4.884l2.481 2.18a8.6 8.6 0 0 0 0 1.756l-2.481 2.18l2.82 4.884l3.129-1.058c.472.342.98.638 1.52.879L9.18 23h5.64l.647-3.237a8.5 8.5 0 0 0 1.52-.88l3.13 1.059l2.82-4.884l-2.482-2.18a8.6 8.6 0 0 0 0-1.756l2.481-2.18l-2.82-4.884l-3.128 1.058a8.5 8.5 0 0 0-1.52-.879zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8'
                 />
               </svg>
               <span className='text-sm group-hover:text-[#A4CD3A]'>
                 Settings
               </span>
             </Link>

             <Link
               href='/app/notification'
               className={`flex items-center px-4 py-3 space-x-2 group ${
                 pathname === '/app/notification'
                   ? 'text-[#A4CD3A]'
                   : 'text-[#D1D5DB]'
               }`}
             >
               <svg
                 className='group-hover:text-[#A4CD3A] size-5'
                 xmlns='http://www.w3.org/2000/svg'
                 width='1.05em'
                 height='1.2em'
                 viewBox='0 0 448 512'
               >
                 <path
                   fill='currentColor'
                   d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64m215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29c0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29c-6 6.45-8.66 14.16-8.61 21.71c.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32c.05-7.55-2.61-15.27-8.61-21.71'
                 />
               </svg>
               <span className='text-sm group-hover:text-[#A4CD3A]'>
                 Notifications
               </span>
             </Link>

             <button
               className={`flex items-center px-4 py-3 space-x-2 group text-[#F87171] w-full border-t border-gray-700`}
             >
               <svg
                className="size-5"
                xmlns='http://www.w3.org/2000/svg'
                 width='24'
                 height='24'
                 viewBox='0 0 24 24'
               >
                 <g fill='none'>
                   <path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
                   <path
                     fill='currentColor'
                     d='M12 2.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4.5a1.5 1.5 0 0 1 0 3H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5Zm6.06 5.61l2.829 2.83a1.5 1.5 0 0 1 0 2.12l-2.828 2.83a1.5 1.5 0 1 1-2.122-2.122l.268-.268H12a1.5 1.5 0 0 1 0-3h4.207l-.268-.268a1.5 1.5 0 1 1 2.122-2.121Z'
                   />
                 </g>
               </svg>
               <span className='text-sm'>Log Out</span>
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}

export default Navbar