import Image from "next/image";
import Link from "next/link";
// import Shop from "./icons/shop.svg"
export default function HomePage () {
 return (
   <div className='w-full h-screen flex'>
     <div className='flex-1 h-full bg-white p-8 flex flex-col space-y-10'>
       <div className='w-full flex  items-center justify-between'>
         {/* Logo */}
         <div className='relative flex items-center'>
           <div className='w-3 h-10 bg-[#00B947] absolute rotate-15 rounded-tl-2xl rounded-br-2xl'></div>
           <div className='w-3 h-3 bg-[#1157FF] rounded-full absolute left-5 top-1'></div>
           <div className='w-3 h-3 bg-[#F65900] rounded-full absolute left-5 top-5'></div>
           <div className='ml-12 text-2xl font-semibold text-black'>
             <h1>StoreAdmin</h1>
           </div>
         </div>
       </div>
       <div className='flex-1 h-full flex items-center justify-center'>
         <form action='' id='' className='w-2/3 '>
           <h1 className='text-black font-bold text-xl text-center'>SIGN IN</h1>
           <div className='mt-6 space-y-6'>
             <div className='bg-gray-200 rounded-lg px-4 py-0.5'>
               <label htmlFor='' className='block text-sm font-medium'>
                 Email
               </label>
               <input
                 type='email'
                 name='email'
                 className='py-2 w-full border-0 outline-none bg-transparent placeholder:text-gray-400 text-black'
                 placeholder='Enter your email'
               />
             </div>
             <div className='bg-gray-200 rounded-lg px-4 py-0.5'>
               <label htmlFor='password' className='block text-sm font-medium'>
                 Password
               </label>
               <input
                 type='password'
                 name='password'
                 className='py-2 w-full border-0 outline-none bg-transparent placeholder:text-gray-400 text-black'
                 placeholder='Enter your password'
               />
             </div>
           </div>
           <div className='flex items-center justify-between space-x-1 mt-2.5'>
             <div className='flex items-center space-x-2'>
               <input type='checkbox' name='' id='' />
               <span className='text-black'>Remember me</span>
             </div>
             <Link href='/forgot' className='text-[#00B947] t'>
               Forgot password?
             </Link>
           </div>
           <div className='mt-10'>
             <button className='py-2 px-6 w-full text-white bg-[#00B947] rounded-lg'>
               Sign In
             </button>
           </div>
         </form>
       </div>
     </div>
     <div className='flex-1 h-full bg-[#00B947] flex items-center justify-center'>
       <div className=''>
         <Image src='./icons/shop.svg' alt='' width={500} height={500} />
         <div className='text-white text-center mt-8 text-xl'>
           <p>Welcome back to your store</p>
         </div>
       </div>
     </div>
   </div>
 )
}