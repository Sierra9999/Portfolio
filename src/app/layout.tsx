import Header from '@/components/Header'
import '../styles/main.scss'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import OpenGraph from '@/components/OpenGraph'

const inter = Work_Sans({ weight:'600', subsets : ["latin"]})

export const metadata: Metadata = {
  title: 'Mateo Sierra',
  description: 'Maximize your online impact with a Medellín-based web developer. Specializing in captivating frontends that drive results.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <OpenGraph/>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
