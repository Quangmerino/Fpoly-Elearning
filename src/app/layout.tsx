import '../styles/globals.css'
import Layout from '@/components/Layouts/Layout'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

export default function RootLayout({children} : {
  children: React.ReactNode
}) {
  return (
    <html data-theme="light" lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
