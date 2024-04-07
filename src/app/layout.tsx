import Header from '@/components/Header'
import '../styles/main.scss'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import OpenGraph from '@/components/OpenGraph'

const inter = Work_Sans({ weight:'600', subsets : ["latin"]})

export const metadata: Metadata = {
  title: 'Mateo Sierra',
  description: 'Discover the portfolio of a skilled young web developer based in Medellín, Colombia. With a focus on crafting elegant and functional websites, he excels in making an impact through his innovative approach to web development. Explore how his accomplished work can elevate your online presence.',
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
