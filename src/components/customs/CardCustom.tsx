import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    className?: string,
}

function CardCustom({children, className}:Props) {
  return (
    <div className={`rounded-xl shadow-2xl ${className}`}>
        {children}
    </div>
  )
}

export default CardCustom