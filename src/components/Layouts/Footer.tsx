import { menuFooter } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#252641] flex flex-col gap-14 items-center -mx-6 py-12 md:py-24 md:-mx-20 2xl:-mx-40'>
        <div className='flex items-center gap-6'>
          <Image src='icons/logo.svg' width={80} height={80} alt=''/>
          <div className='w-px h-16 bg-[#626381] ml-14'></div>
          <div className='flex flex-col text-xl'>
            <span>Virtual Class</span>
            <span>for Zoom</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <h2 className='text-[#B2B3CF] text-2xl'>Subscribe to get our Newsletter</h2>
          <div className='flex flex-col items-center gap-4 md:flex-row'>
            <input type="text" placeholder="Your Email" className="input bg-transparent rounded-full input-bordered min-w-[300px] border-stone-300 w-full max-w-xs outline-none" />
            <button className='btn bg-success text-white hover:text-black rounded-full'>Subscribe</button>
          </div>
        </div>
        <div className='flex flex-col gap-3 items-center text-[#B2B3CF]'>
          <ul className='flex items-center flex-wrap justify-center'>
            {
              menuFooter?.map((item, index) => {
                return (
                  <li key={index + item.name}>
                    <Link className='px-6 py-1' href={item.link}>{item.name}</Link>
                  </li>
                )
              })
            }
          </ul>
          <span>© 2021 Class Technologies Inc.</span>
        </div>
    </div>
  )
}

export default Footer