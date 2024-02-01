"use client"
import CartIcon from '@/assets/icons/CartIcon';
import React,{useState} from 'react'

const OfferingComp =({title,source,info}) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

  return (
    <div className='flex flex-col'>
        <div className='bg-orange-500 flex justify-center items-center'>
            <h1 className='text-xl font-medium text-white py-2'>{title}</h1>
        </div>
        <div className=''>
            <img
            className='w-64 h-80'
            src={source}
            >
            </img>
        </div>
                {!isClicked && (
                <button className='flex justify-center p-2 py-4 border-0 border-b border-black' onClick={handleClick}>
                    <h5 className='font-normal text-md'>
                        {info}
                    </h5>
                </button>
            )}
            {isClicked && (
                <button className='py-4 bg-yellow-200 w-full flex flex-row justify-between items-center px-4  border-0 border-b border-black' onClick={handleClick}>
                    <h5 className=''>Buy Now </h5>
                    <CartIcon/>
                   
                </button>
            )}
    </div>
  )
}
export default OfferingComp
