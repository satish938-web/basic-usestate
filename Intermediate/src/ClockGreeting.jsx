import React, { useEffect, useState } from 'react'

const ClockGreeting = () => {
    const[time,settime]=useState("");
    const[dark,setdark]=useState(false);
     useEffect(()=>{
        const interveral =setInterval(()=>{
   const timee=new Date().toLocaleTimeString();
   settime(timee)
        },1000);
        return()=>clearInterval(interveral);
     })
     const bgclass=dark?"bg-gray-900 text-white":"bg-gary-100 text-gray-900 "
  return (
    <>
     <div className={`${bgclass} min-h-screen flex flex-col items-center justify-center`}>
      <h2 className="text-4xl mb-4">Good Morning!</h2>
      <div className="text-2xl mb-6">{time}</div>

        <button className="bg-blue-500 text-white px-3 py-1 rounded"
         onClick={()=>setdark(!dark)}>{dark?"Dark Mode":"Light Mode"}</button>
    </div>
    </>
  )
}

export default ClockGreeting