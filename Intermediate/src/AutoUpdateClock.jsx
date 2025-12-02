import React, { useEffect, useState } from 'react'

const AutoUpdateClock = () => {
    const [time,setTime]=useState("");
    useEffect(()=>{
const interval= setInterval(()=>{
  const currenttime =new Date().toLocaleTimeString();
  setTime(currenttime)
}, 1000);

// cleanup
return ()=>clearInterval(interval)
    },[])
  return (  
    <>
     <h1 className='text-center ' >Live Digital Clock</h1>
    <span className=' absolute font-bold text-2xl left-80  border-2 w-50 p-8'>
    <span className='text-xl' >{time}</span>
    </span>
    </>
  )
}

export default AutoUpdateClock