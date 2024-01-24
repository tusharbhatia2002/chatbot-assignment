import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  Chatbox  from '@/components/chatbox';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChakraProvider } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
        <Navbar/>
        <Chatbox />
        {children}
        <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}

