interface StatCardProps {
  title: string
  value: number
  growth: number
  icon: React.ReactNode
}

export default function StatCard({
  title,
  value,
  growth,
  icon,
}: StatCardProps) {
  const isPositive = growth >= 0

  return (
    <div className='shadow bg-[#1F2937] rounded-lg p-4 lg:p-6 text-white'>
      <div className='flex items-center justify-between'>
        <h3 className='text-base lg:text-lg font-semibold'>{title}</h3>
        <div className='text-[#A4CD3A] size-6'>{icon}</div>
      </div>
      <h2 className='font-bold text-xl lg:text-3xl mt-4'>
        {value.toLocaleString()}
      </h2>
      <div className='mt-2 flex items-center space-x-1'>
        <div>
          <svg
            className={`${isPositive ? 'text-[#4ADE80]' : 'text-red-500 rotate-180'}`}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M12 5.714a1 1 0 0 1 1 1v12.5a1 1 0 0 1-2 0v-12.5a1 1 0 0 1 1-1'
              clipRule='evenodd'
            />
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M12 4.214a1 1 0 0 1 .707.293l4.5 4.5a1 1 0 0 1-1.414 1.415L12 6.628l-3.793 3.793a1 1 0 0 1-1.414-1.415l4.5-4.5A1 1 0 0 1 12 4.214'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div
          className={`${
            isPositive ? 'text-[#4ADE80]' : 'text-red-500'
          } text-sm`}
        >
          <span>{growth}% </span>
          <span>from last month</span>
        </div>
      </div>
    </div>
  )
}
