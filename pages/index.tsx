import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import UpcomingJobs from '@/components/UpcomingJobs'
import ProjectsSection from '@/components/ProjectSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <HeroSection />
    <ProjectsSection />
    </>
  )
}
