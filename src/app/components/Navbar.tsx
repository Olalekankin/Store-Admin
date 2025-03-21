import Image from "next/image"
import SearchBox from "./SearchBox"
import ProfileDp from "../../../public/images/dp.png"

const Navbar = ()=> {
 return (
   <div className='h-16 border-b border-gray-600 bg-black px-6 py-3.5'>
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
         <div className='flex items-center space-x-3'>
           <div className='rounded-full size-8 border'>
             <Image src={ProfileDp} alt='' className='size-full bg-cover' />
           </div>
           <div className='text-[#9CA3AF]'>Admin User</div>
           <button>
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
         </div>
       </div>
     </div>
   </div>
 )
}

export default Navbar