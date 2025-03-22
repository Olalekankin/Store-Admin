import Delivered from "./status/Delivered"
import Processing from "./status/Processing"
import Shipped from "./status/Shipped"

interface RecentOrder {
  id: string
  customer: string
  status: string
  amount: number
}

interface RecentOrderCardProps {
  recentOrders: RecentOrder[]
}

export default function RecentOrderCard({
  recentOrders,
}: RecentOrderCardProps) {

  const renderStatus = (status:string)=> {
    switch (status.toLowerCase()){
      case "shipped":
        return <Shipped/>
      case "delivered":
        return <Delivered/>
      case "processing":
      default:
        return <Processing/>
      
    }

  }
  return (
    <section className='w-full bg-[#1F2937] rounded-lg'>
      <h3 className='p-4 lg:p-6 border-b border-[#343e4e] text-white text-base lg:text-lg font-semibold'>
        Recent Orders
      </h3>
      <div className='p-4 lg:p-6'>
        <table className='w-full'>
          <thead>
            <tr className='font-bold text-sm text-[#9CA3AF] text-left'>
              <th className='p-2'>Order ID</th>
              <th className='p-2'>Customer</th>
              <th className='p-2'>Status</th>
              <th className='p-2'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className='text-sm text-[#F3F4F6] text-left'>
                <td className='p-2'>{order.id}</td>
                <td className='p-2'>{order.customer}</td>
                <td className='p-2'>{renderStatus(order.status)}</td>
                <td className='p-2'>${order.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
