import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Homesection1 from '@/components/Homesection1'
import Homesection2 from '@/components/Homesection2'
import Homesection3 from '@/components/Homesection3'
import Homesection4 from '@/components/Homesection4'
import Homesection5 from '@/components/Homesection5'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Homesection1/>
      <Homesection2/>
      <p>My Education & Experience </p>
      <Homesection3/>
      <Homesection4/>
      <Homesection5/>
    </div>
    
  )
}
