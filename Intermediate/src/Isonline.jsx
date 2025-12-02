import React, { useEffect, useState } from 'react'

const Isonline = () => {
    const [isOnline,setIsOnline]=useState(navigator.onLine);
    useEffect(()=>{
       const handleOnline=()=>setIsOnline(true);
       const handleoffline=()=>setIsOnline(false);
       window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleoffline);

        // cleanup function to remove listeners when components unmounts
        return()=>{
            window.addEventListener('online',handleOnline);
            window.addEventListener('offline',handleoffline)
        }
    })
  return (
    <div className='text-center m-1 p-3'>
        <h2 className='m-10'>your internate status </h2>
        {
            isOnline?
            <span className=' bg-green-700 text-white w-10 text-4xl p-4 rounded'>online</span>:
            <span className='bg-red-700 text-white w-10 text-4xl p-4 rounded'>offline</span>
        }
    </div>
  )
}

export default Isonline 