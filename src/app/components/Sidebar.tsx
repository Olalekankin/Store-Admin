'use client'
import LinkItem from './LinkItem'

const menuItems = [
  {
    title: 'Dashboard',
    href: '/app',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <g
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.5'
        >
          <path d='M3.5 4v13.5a3 3 0 0 0 3 3H20' />
          <path d='m6.5 15l4.5-4.5l3.5 3.5L20 8.5' />
        </g>
      </svg>
    ),
  },
  {
    title: 'Vendor',
    href: '/app/vendor',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.21em'
        height='1em'
        viewBox='0 0 616 512'
      >
        <path
          fill='currentColor'
          d='M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4c4.5.6 9.1.9 13.7.9c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18 20.1 44.3 33.1 73.8 33.1c29.6 0 55.8-13 73.8-33.1c18.1 20.1 44.3 33.1 73.8 33.1c4.7 0 9.2-.3 13.7-.9c62.8-8.4 92.6-82.8 59-136.4M529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8c-6 0-12.1-.4-18-1.2c-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6c-6.1.8-12.1 1.2-18.2 1.2'
        />
      </svg>
    ),
  },
  {
    title: 'Customers',
    href: '/app/customer',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        height='1.2em'
        viewBox='0 0 640 512'
      >
        <path
          fill='currentColor'
          d='M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4'
        />
      </svg>
    ),
  },
  {
    title: 'Products',
    href: '/app/product',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.2em'
        height='1.2em'
        viewBox='0 0 512 512'
      >
        <path
          fill='currentColor'
          d='M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4M240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224z'
        />
      </svg>
    ),
  },
  {
    title: 'Orders',
    href: '/app/order',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.35em'
        height='1.2em'
        viewBox='0 0 576 512'
      >
        <path
          fill='currentColor'
          d='M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24m128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0m336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96'
        />
      </svg>
    ),
  },
  {
    title: 'Payments',
    href: '/app/payment',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.2em'
        height='1.2em'
        viewBox='0 0 16 16'
      >
        <path
          fill='currentColor'
          d='M14.5 4H2.38a1 1 0 0 1-1.19-.982v-.019L14 2.5V1.31A1.18 1.18 0 0 0 12.684.001L1.31 1.85A2 2 0 0 0 0 3.727v10.772a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-9.01l.001-.041a1.45 1.45 0 0 0-1.45-1.45l-.053.001zM13 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 13 11'
        />
      </svg>
    ),
  },
  {
    title: 'Marketing',
    href: '/app/marketing',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        height='1.5em'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='M19 8v6c1.7 0 3-1.3 3-3s-1.3-3-3-3m-8-1H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v3c0 1.1.9 2 2 2h2v-5h2l4 4h2V3h-2z'
        />
      </svg>
    ),
  },
  {
    title: 'Analytics',
    href: '/app/analytic',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.2em'
        height='1.2em'
        viewBox='0 0 512 512'
      >
        <path
          fill='currentColor'
          d='M32 32c17.7 0 32 14.3 32 32v336c0 8.8 7.2 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64c0-17.7 14.3-32 32-32m96 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32m32 64h128c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32m0 96h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32'
        />
      </svg>
    ),
  },
  {
    title: 'Support',
    href: '/app/support',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.2em'
        height='1.2em'
        viewBox='0 0 14 14'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M6.987 1.5A3.18 3.18 0 0 0 3.75 4.628V9a1 1 0 0 1-1 1H1.5A1.5 1.5 0 0 1 0 8.5v-2A1.5 1.5 0 0 1 1.5 5h.75v-.39A4.68 4.68 0 0 1 7 0a4.68 4.68 0 0 1 4.75 4.61V5h.75A1.5 1.5 0 0 1 14 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.75v.5a2.75 2.75 0 0 1-2.44 2.733A1.5 1.5 0 0 1 8 14H6.5a1.5 1.5 0 0 1 0-3H8c.542 0 1.017.287 1.28.718a1.25 1.25 0 0 0 .97-1.218V4.627A3.18 3.18 0 0 0 6.987 1.5'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    title: 'Settings',
    href: '/app/setting',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='1.5em'
        height='1.5em'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          d='m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5'
        />
      </svg>
    ),
  },
]

const Sidebar: React.FC = () => {
  return (
    <nav className='w-[255px] h-screen bg-black text-white border-r border-gray-600'>
      <div className='w-full h-16 border-b border-gray-600'></div>
      <ul className='space-y-2 p-6'>
        {menuItems.map((item) => (
          <LinkItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
