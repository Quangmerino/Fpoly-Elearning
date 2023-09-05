import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode,
    className?: string,
    textDark?: string,
    textLight?: string,
    styleTextDark?: string,
    styleTextLight?: string,
}

function PageTitleCustom({children, className, textDark, textLight, styleTextDark, styleTextLight}:Props) {
  return (
    <div className={`text-center text-[36px] justify-center w-full ${className}`}>
      {textDark && <span className={`text-[#2F327D] w-full ${styleTextDark}`}>{textDark}</span>}
      {children}
      {textLight && <span className={`text-[#00CBB8] w-full ${styleTextLight}`}>{textLight}</span>}
    </div>
  )
}

export default PageTitleCustom