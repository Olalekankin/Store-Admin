

interface TopProductCardProp {
 name: string
 price: number
 sold: number
 image: string
}

export default function TopProductCard({name, price, sold, image}:TopProductCardProp){
 return (
   <div className="w-full flex space-x-4">
     <div className='size-12'>
       <img src={image} alt={name} className="size-full"/>
     </div>    
     <div className="flex-grow flex items-center justify-between space-x-2">
       <div>
         <p className='text-sm font-medium text-[#F3F4F6]'>{name}</p>
         <p className='text-[#9CA3AF] text-sm mt-2'>${price}</p>
       </div>

       <div>
         <p className='text-base text-[#4ADE80] '>+{sold}</p>
       </div>
     </div>
   </div>
 )
}