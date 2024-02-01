import React from 'react'
import CookIcon from "../../assets/icons/CookIcon"
const Navbar = () => {
  return (
   <div>
   <div className="w-full pt-12 pb-4 mx-auto items-center font-mono text-sm lg:flex ">
      <div className='w-[30%]'>
      <div className='px-10 justify-start items-start'>
      <h1 className='text-4xl font-bold'>FE<span className='text-yellow-200'>A</span>STAR</h1>
      </div>
      </div>
      <div className='flex flex-row justify-center space-x-28 pl-12'>
      <a 
      href=''
      className="w-16 justify-center lg:w-auto ">
       Home 
      </a>
      <a
      href='' 
      className="flex w-16 justify-center lg:w-auto">
       About 
      </a>
      <a
      href='' 
      className="w-16 justify-center lg:w-auto">
       Menu 
      </a>
      <a
      href='' 
      className="w-16 justify-center lg:w-auto">
       Blog 
      </a>
      </div>
      <div className='pl-80 '>
      <button className='border border-black w-28 h-10 rounded-none items-center justify-evenly flex flex-row'>
        <CookIcon fill={"#000"}/>
        Login</button>
      </div>
    </div>
    </div>
  /* </main> */
  )
}

export default Navbar