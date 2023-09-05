import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

function LayoutDefault({children}:Props) {
  return (
    <div className='relative'>
        {children}
    </div>
  )
}

export default LayoutDefault