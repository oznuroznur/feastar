import React from 'react'

const FooterLink = ({title,info1,info2,info3,info4}) => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='flex justify-center'>
            <h1 className='text-lg font-semibold text-yellow-200 uppercase'>{title}</h1>
        </div>
        <div className='pt-2'>
            <ul className='space-y-4'>
                <li className='text-white text-sm font-light'>{info1}</li>
                <li className='text-white text-sm font-light'>{info2}</li>
                <li className='text-white text-sm font-light'>{info3}</li>
                <li className='text-white text-sm font-light'>{info4}</li>
            </ul>
        </div>
    </div>
  )
}
export default FooterLink
