export default function SearchBox() {
 return (
   <div className='w-1/3 relative h-9'>
     <input
       type='text'
       className='py-2 pl-12 bg-[#374151] rounded-lg w-full text-[#9CA3AF]'
       placeholder='Search'
     />
     <span className='absolute top-1/2 -translate-y-1/2 left-3'>
       <svg
         xmlns='http://www.w3.org/2000/svg'
         width='1.2em'
         height='1.2em'
         viewBox='0 0 24 24'
         className='text-[#9CA3AF]'
       >
         <path
           fill='none'
           stroke='currentColor'
           strokeLinecap='round'
           strokeLinejoin='round'
           strokeWidth='2'
           d='m20 20l-4.05-4.05m0 0a7 7 0 1 0-9.9-9.9a7 7 0 0 0 9.9 9.9'
         />
       </svg>
     </span>
   </div>
 )
}