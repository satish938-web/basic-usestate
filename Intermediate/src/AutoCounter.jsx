import React, { useEffect, useState } from 'react'

const AutoCounter = () => {
    const[count,setcount]=useState(0);
    const[isrunning,setIsrunning]=useState(false)
    useEffect(()=>{
        if(!isrunning) return
    const interval=setInterval(()=>{
            setcount(prev=>prev+1)
        },1000)
        return ()=> clearInterval(interval);
    },[isrunning])
  return (
    <div>
        <h1 className='m-5'>Auto Counter</h1>
       <h2 className='m-3 p-4'>{count}</h2> 
        <button className='m-5 p-4' onClick={()=>setcount(0)}>Reset</button>
       <button onClick={() => setIsrunning(!isrunning)}>
  {isrunning ? "Pause" : "Start"}
</button>

    </div>
  )
}

export default AutoCounter