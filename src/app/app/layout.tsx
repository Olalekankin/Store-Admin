import type { Metadata } from 'next'
import '.././globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <main className='w-full flex h-screen bg-black'>
        <section>
          <Sidebar />
        </section>

        <section className='flex flex-col flex-1 h-full'>
          <Navbar />
          <section>{children}</section>
        </section>
      </main>
  )
}
