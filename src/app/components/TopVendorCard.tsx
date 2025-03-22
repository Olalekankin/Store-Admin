

interface TopVendor {
  vendor: string
  products: number
  rating: number
  revenue: number
}

interface TopVendorCardProps {
  data: TopVendor[]
}

export default function TopVendorCard({
 data
}: TopVendorCardProps) {

  
  return (
    <section className='w-full bg-[#1F2937] rounded-lg'>
      <h3 className='p-4 lg:p-6 border-b border-[#343e4e] text-white text-base lg:text-lg font-semibold'>
        Vendor Performance
      </h3>
      <div className='p-4 lg:p-6'>
        <table className='w-full'>
          <thead>
            <tr className='font-bold text-sm text-[#9CA3AF] text-left'>
              <th className='p-2'>Vendor</th>
              <th className='p-2'>Products</th>
              <th className='p-2'>Rating</th>
              <th className='p-2'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vendor, index) => (
              <tr key={index} className='text-sm text-[#F3F4F6] text-left'>
                <td className='p-2'>{vendor.vendor}</td>
                <td className='p-2'>{vendor.products}</td>
                <td className='p-2'>
                  <div className='flex items-center space-x-1'>
                    <svg
                      className='text-[#FACC15] size-3.5'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                    >
                      <path
                        fill='currentColor'
                        d='m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z'
                      />
                    </svg>
                    <span>{vendor.rating}</span>
                  </div>
                </td>
                <td className='p-2'>${vendor.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
