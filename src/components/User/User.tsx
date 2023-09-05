import Image from 'next/image'
import React from 'react'

function User() {
  return (
    <div className='flex items-center gap-3'>
        <Image src='/images/avatar.jpeg' className='rounded-full object-cover cursor-pointer w-10 h-10' alt='' width={50} height={50} />
        <span className='text-black whitespace-nowrap 2xl:text-[22px]'>Quang Ốc</span>
    </div>
  )
}

export default User