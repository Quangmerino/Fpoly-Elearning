import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating() {
  return (
    <div className='flex items-center gap-2'>
        <StarBorderIcon className='text-yellow-400'/>
        <StarBorderIcon className='text-yellow-400'/>
        <StarBorderIcon className='text-yellow-400'/>
        <StarBorderIcon className='text-yellow-400'/>
        <StarBorderIcon className='text-yellow-400'/>
    </div>
  )
}

export default Rating