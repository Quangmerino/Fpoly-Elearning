import React from 'react'

type Props = {
  statistical: string,
  title: string
}

function IntroduceItem({statistical, title}:Props) {
  return (
    <div className='flex flex-col items-center min-w-[200px]'>
      <span className='text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD] lg:text[84px] 2xl:text-[96px]'>{statistical}</span>
      <span className='text-center text-[28px] lg:text-[32px] whitespace-nowrap'>{title}</span>
    </div>
  )
}

export default IntroduceItem