import React from 'react'
import CoreIcon from '@/assets/icons/CoreIcon'

export const CoreComp =({icon,title,info}) => {
  return (
    <div className='flex justify-center items-center flex-col border-0 border-r h-64 w-72 space-y-4'>
                {icon}
                <h4 className='text-xl text-yellow-200 font-bold '>{title}</h4>
                <h5 className='text-white font-normal'>{info}</h5>
    </div>
  )
}
