import Image from 'next/image'
import React from 'react'

function SignIn() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-5 gap-5'>
        <Image className='col-span-3 object-contain' src='/images/bg-sign-in.png' alt='' width={500} height={500}/>
        <div className='col-span-2'>
            <span>Welcome to Lưu Minh Quang!</span>
            <div></div>
        </div>
    </div>
  )
}

export default SignIn