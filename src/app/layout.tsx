import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Store Admin',
  description: 'Admin dashboard for multi-vendor Store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={` antialiased `}>
        {children}
      </body>
    </html>
  )
}
