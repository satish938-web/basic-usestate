import React, { useEffect, useState } from 'react'

const Unmount = () => {
    const [count,setcount]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            console.log("timer tickL",count);
        },1000)
        // cleanup function runs on unmount
        return ()=>{
            clearInterval(interval)
        }
    })
  return (
    <div>Unmount</div>
  )
}

export default Unmount