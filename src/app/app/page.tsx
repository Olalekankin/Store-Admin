'use client'
import { useEffect } from "react";
import StatCard from "../components/StatCard"
import useDashboardStore from "../store/dashboardStore";
import Chart from "../components/Chart";
import TopProductCard from "../components/TopProductCard";
import RecentOrderCard from "../components/RecentOrder";
import TopVendorCard from "../components/TopVendorCard";
export default function Home() {

  const { data, loading, error, fetchDashboardData } = useDashboardStore()
  
  useEffect(() => {
    fetchDashboardData()
  }, [])

 if (loading) return <p>Loading...</p>
 if (error) return <p>Error: {error}</p>
 if (!data) return <p>No data available.</p>
  console.log(data)

  return (
    <div className='w-full p-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <StatCard
          title='Total Sales'
          value={data.salesSummary.totalSales}
          growth={data.salesSummary.salesGrowth}
          icon={
            <svg
              className='size-6'
              xmlns='http://www.w3.org/2000/svg'
              width='12.86'
              height='24'
              viewBox='0 0 960 1792'
            >
              <path
                fill='currentColor'
                d='M946 1185q0 153-99.5 263.5T588 1585v175q0 14-9 23t-23 9H421q-13 0-22.5-9.5T389 1760v-175q-66-9-127.5-31T160 1509.5t-74-48t-46.5-37.5t-17.5-18q-17-21-2-41l103-135q7-10 23-12q15-2 24 9l2 2q113 99 243 125q37 8 74 8q81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42t-58.5-37.5t-66-32t-80-32.5q-39-16-61.5-25T317 948.5t-62.5-31T198 882t-53.5-42.5t-43.5-49t-35.5-58t-21-66.5t-8.5-78q0-138 98-242t255-134V32q0-13 9.5-22.5T421 0h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5T849 302t39 29t15 14q17 18 5 38l-81 146q-8 15-23 16q-14 3-27-7q-3-3-14.5-12t-39-26.5t-58.5-32t-74.5-26T505 430q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5t39.5 33t56 31t60.5 27t70 27.5q53 20 81 31.5t76 35t75.5 42.5t62 50t53 63.5T933 1091t13 94'
              />
            </svg>
          }
        />
        <StatCard
          title='Total Orders'
          value={data.salesSummary.totalOrders}
          growth={data.salesSummary.ordersGrowth}
          icon={
            <svg
              className='size-6'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                fillRule='evenodd'
                d='M7.5 7v-.5a4.5 4.5 0 0 1 9 0V7H19c.552 0 1 .449 1 1.007v12.001c0 1.1-.895 1.992-1.994 1.992H5.994A1.994 1.994 0 0 1 4 20.008v-12C4 7.45 4.445 7 5 7zM9 7h6v-.5a3 3 0 0 0-6 0zM7.5 7v4H9V7zM15 7v4h1.5V7z'
              />
            </svg>
          }
        />
        <StatCard
          title='Active Vendors'
          value={data.salesSummary.activeVendors}
          growth={data.salesSummary.vendorsGrowth}
          icon={
            <svg
              className='size-6'
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='24'
              viewBox='0 0 576 512'
            >
              <path
                fill='currentColor'
                d='m547.6 103.8l-57.3-90.7C485.2 5 476.1 0 466.4 0H109.6c-9.7 0-18.8 5-23.9 13.1l-57.4 90.7c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1.8 12.1.8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29s49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zm-47.9 151.1h-.1c-5.3.7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1H76c-4.1-.6-8.1-1.3-12-2.3V448c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V252.6c-4 1-8 1.8-12.3 2.3'
              />
            </svg>
          }
        />
        <StatCard
          title='Active Customers'
          value={data.salesSummary.activeCustomers}
          growth={data.salesSummary.customersGrowth}
          icon={
            <svg
              className='size-6'
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='24'
              viewBox='0 0 640 512'
            >
              <path
                fill='currentColor'
                d='M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3H405.4zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.3c73.7 0 133.4 59.7 133.4 133.3c0 14.7-11.9 26.7-26.7 26.7H154.6c-14.7 0-26.7-11.9-26.7-26.7z'
              />
            </svg>
          }
        />
      </div>
      <div className='flex mt-6 gap-6'>
        <div className='flex-2 bg-[#1F2937] shadow rounded-lg p-4 lg:p-6'>
          <h2 className='text-white font-semibold text-base lg:text-lg'>
            Sales Overview
          </h2>
          <div className='mt-4'>
            <Chart data={data.chartData} />
          </div>
        </div>
        <div className='flex-1 bg-[#1F2937] shadow rounded-lg p-4 lg:p-6'>
          <h2 className='text-white font-semibold text-base lg:text-lg'>
            Top Products
          </h2>
          <div className='mt-4 space-y-4'>
            {data.topProducts.map((product, index) => (
              <div key={index} className='space-y-4'>
                <TopProductCard
                  name={product.name}
                  price={product.price}
                  image={product.imageUrl}
                  sold={product.sold}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <RecentOrderCard recentOrders={data.recentOrders}/>
        </div>  
        <div>
          <TopVendorCard data={data.vendorPerformance}/>
        </div>   
      </div>
    </div>
  )
}
