"use client"
import React from 'react'
import OfferingComp from '@/components/OfferingComp'

const Offering =() => {
  const offeringData = [
    {
      title:"Buffet",
      source:"https://www.eatingwell.com/thmb/zvHrm_Z8F2qLeJenpJ6lYodtq7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/57831531-73819d8ce8f5413cac42cf1c907bc37a.jpg",
      info:"Lorem ipsum dolor sit amet",
    },
    {
      title:"Meal Box",
      source:"https://elavegan.com/wp-content/uploads/2022/01/Sweet-and-Sour-Chickpeas-over-rice-in-black-bowl.jpg",
      info:"Lorem ipsum dolor sit amet",
    },
    {
      title:"Snack Box",
      source:"https://cdn.loveandlemons.com/wp-content/uploads/2019/02/how-to-meal-prep.jpg",
      info:"Lorem ipsum dolor sit amet",
    },
    {
      title:"Food Stalls",
      source:"https://www.bistromd.com/cdn/shop/files/honey_mustard_chicken.jpg?v=1678386257",
      info:"Lorem ipsum dolor sit amet",
    },
  ]
  return (
    <div className='flex-1 '>
    <div className='w-full min-h-screen relative'>
        <div className='absolute bottom-20 w-full flex justify-between items-center pl-16 pr-32'>
        <h1 className='text-6xl font-semibold'>OUR OFFERINGS</h1>
        <button className='bg-yellow-200 h-10 w-40 font-semibold'>VIEW MORE</button>
        </div>
        <div className='flex justify-between items-center absolute -bottom-96 px-32 mx-auto w-full'>
        {offeringData.map((item,index) => {
           return (
            <div key={index}>
              <OfferingComp
              title={item.title}
              source={item.source}
              info={item.info}
              key={index}
              />
            </div>
           )
        })}
      </div>
    </div>
    </div>
  )
}

export default Offering