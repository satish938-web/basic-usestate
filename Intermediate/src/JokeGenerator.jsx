import React, { useEffect, useState } from 'react'

const JokeGenerator = () => {
   const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the math book look sad? Because it had too many problems.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I told my computer I needed a break, and it said 'No problem — I'll go to sleep.'",
  "Why do bees have sticky hair? Because they use honeycombs!",
  "Why did the coffee file a police report? It got mugged!",
  "Why don’t programmers like nature? It has too many bugs.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I asked my dog what's two minus two. He said nothing.",
  "Why did the bicycle fall over? Because it was two-tired!"
];

    const [jock,setjock]=useState(jokes[0])
    const [auto, setAuto] = useState(true);

useEffect(()=>{
    if(!auto) return;
     const interval=setInterval(()=>{
      const joke = jokes[Math.floor(Math.random()*jokes.length)];
      setjock(joke)
     },5000)
     return()=>clearInterval(interval)
})

const getRandomJock=()=>{
    const randomjock=jokes[Math.floor(Math.random()*jokes.length)];
    setjock(randomjock);
}
  return (
   <div className='h-screen flex justify-center items-center  flex-col  '>
   <h1 className='text-3xl mt-5 mb-5 font-bold' >Random Joke Generator</h1>
    <p className='mb-5 text-xl'>{jock}</p>
    <div><button className='bg-blue-500 text-white py-1 px-3 rounded mb-3  m-5'
     onClick={getRandomJock}>New Joke</button>
      <button className='bg-green-600 text-white py-2 px-2 rounded' onClick={()=>setAuto(!auto)}>{auto?"Pause Auto-joke":"Resume Auto-joke"}</button>
    </div>
   </div>
  )
}

export default JokeGenerator