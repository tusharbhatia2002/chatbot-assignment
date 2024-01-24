"use client"
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import SocialMediaStatistics from '@/components/SocialMediaStatistics'


export default function Home() {
  return (
    <>
    <HeroSection/>
    <SocialMediaStatistics />
    <Features />
    <Testimonials />
    <Newsletter />
    </>
  )
}
