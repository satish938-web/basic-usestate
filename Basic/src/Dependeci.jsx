import React, { useEffect, useState } from 'react'

const Dependeci = () => {
  const [count,setcount]=useState(0);
  useEffect(()=>{
    console.log("Count Changed:",count);
    document.title=`checked ${count} times`

  },[count])
  return (
    <div>
      <p>{count}</p>
    {  console.log("body")}
      <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

// if [] are being passed they will run once on mount
// if any things are not being passed they will run on every render
// [dep] are being passed they will run on when ever dep will changes

export default Dependeci