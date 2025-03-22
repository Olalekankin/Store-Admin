"use client"
import Button from "@/app/components/Button";
import InputField from "@/app/components/InputField";
import Image from "next/image";

export default function ProfilePage(){
 const handleChange = ()=> {

 }
 return (
   <main className='w-full pt-4 px-4 lg:pt-20   lg:px-10'>
     <section className='w-full xl:w-4/5 bg-[#1F2937] rounded-lg p-4 lg:p-6'>
       <form action=''>
         <div className='w-full flex flex-col lg:flex-row lg:items-start lg:space-x-6 pb-6 border-b border-[#374151]'>
           <div className='space-y-4'>
             <div className='size-32 rounded-full border-4 border-[#374151]'>
               <Image
                 src='/images/headphone.jpg'
                 alt='User account'
                 width={100}
                 height={100}
                 className='size-full rounded-full'
               />
             </div>
             <Button btnText='Change Photo' />
           </div>
           <div className='space-y-6 lg:flex-grow '>
             <div>
               <h1 className='fext-lg text-2xl font-bold text-white'>
                 Admin User
               </h1>
               <p className='text-[#9CA3AF] mt-1'>System Administrator</p>
             </div>
             <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-6'>
               <InputField
                 onChange={handleChange}
                 label='Full Name'
                 name='fullName'
                 value='Admin User'
               />
               <InputField
                 onChange={handleChange}
                 label='Phone'
                 name='phone'
                 value='+1 (555) 123-4567'
               />
               <InputField
                 onChange={handleChange}
                 label='Email'
                 type='email'
                 name='email'
                 value='admin@example.com'
               />
               <InputField
                 onChange={handleChange}
                 label='Location'
                 name='location'
                 value='New York, USA'
               />
             </div>
           </div>
         </div>
         <div className='w-full p-4 lg:p-6'>
           <h2 className='text-lg lg:text-xl font-bold text-[#F3F4F6]'>
             Account Settings
           </h2>
           <div className='mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-6'>
             <div>
               <h3 className='text-base lg:text-lg font-semibold text-[#F3F4F6]'>
                 Security
                 <div className='space-y-4 flex flex-col w-full'>
                   <InputField
                     onChange={handleChange}
                     label='Current Password'
                     name='currentPassword'
                   />
                   <InputField
                     onChange={handleChange}
                     label='New Password'
                     name='password'
                   />
                   <InputField
                     onChange={handleChange}
                     label='Confirm Password'
                     name='confirmPassword'
                   />
                 </div>
                 <div className='mt-4'>
                   <Button btnText='Update Password' />
                 </div>
               </h3>
             </div>
             <div>
               <h3 className='text-base lg:text-lg font-semibold text-[#F3F4F6]'>
                 Preferences
               </h3>
               <div className='mt-4 space-y-4'>
                 <div className='flex items-center justify-between w-full'>
                   <label
                     htmlFor='emailNotification'
                     className='text-[#9CA3AF] text-base'
                   >
                     Email Notification
                   </label>
                   <label className='relative inline-flex items-center cursor-pointer'>
                     <input
                       type='checkbox'
                       name='emailNotification'
                       className='sr-only peer'
                     />
                     <div className="w-11 h-6 bg-[#374151] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A4CD3A]"></div>
                   </label>
                 </div>
                 <div className='flex items-center justify-between w-full'>
                   <label
                     htmlFor='authentication'
                     className='text-[#9CA3AF] text-base'
                   >
                     Two-Factor Authentication
                   </label>
                   <label className='relative inline-flex items-center cursor-pointer'>
                     <input
                       type='checkbox'
                       name='2fa'
                       className='sr-only peer'
                     />
                     <div className="w-11 h-6 bg-[#374151] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-1 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A4CD3A]"></div>
                   </label>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className='w-full p-4 lg:p-6'>
           <div className='w-full flex justify-end'>
             <div className='flex items-center space-x-4'>
               <Button btnText='Cancel' style='bg-[#374151]' />
               <Button btnText='Save Changes' />
             </div>
           </div>
         </div>
       </form>
     </section>
   </main>
 )
}