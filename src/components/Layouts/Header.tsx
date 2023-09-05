'use client'

import Image from 'next/image'
import React from 'react'
import {Navbar, NavbarMobile} from '../Navbar/Navbar'
import Auth from '../Navbar/Auth'
import Link from 'next/link'
import User from '../User/User'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname();

  return (
    <div 
      className={`hidden fixed lg:flex items-center justify-between px-20 w-full z-50 shadow-2xl top-0 left-0 right-0 bg-white`}
    >
        <Link href='/'>
          <Image src='/icons/logo-dark.svg' alt='' width={80} height={80}/>
        </Link>
        <Navbar/>
        <User/>
        {/* <Auth/> */}
    </div>
  )
}

export default Header