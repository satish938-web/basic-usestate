import React, { useEffect, useState } from 'react'

const WeatherClock = () => {
    const[city,setCity]=useState("Delhi")
    const[dark,setdark]=useState(true)
     const [weather, setWeather] = useState(null);
    const [time ,settime]=useState();


     const API_KEY = "def427b1f27ddd4f5c8663ae8cd2ce3b";
   useEffect(()=>{
    const interval =setInterval(()=>{
        const date=new Date();
        settime(date.toLocaleTimeString());
    },1000);
    return()=>clearInterval(interval)
   },[]);

   const fetchWeather =async ()=>{
        try {
            const res=await fetch (
 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);
 const data=await res.json();
 if(data.cod===200) setWeather(data);
 else setWeather(null)
        }
        catch(err){
console.log(err);
        }
    };

   useEffect(()=>{
    fetchWeather();
    const interval=setInterval(fetchWeather,10*60*1000) //refresh
    return()=>clearInterval(interval)
   },[city])


const bgclass=dark?"bg-gray-900 text-white":"bg-gary-100 text-gray-900 "
  return (
    <div className={`flex flex-col justify-center items-center mb-10  h-screen ${bgclass}` }>
   <h1 className='font-bold text-3xl'>Weather Clock</h1>
    <div className='text-3xl m-3'>{time}</div>
    <div><input type="text"
      className=' p-2 border' value={city}
      onChange={(e)=>setCity(e.target.value)}
       placeholder='Enter  City Name.. '/>
       
       </div>

       {
        weather ?(
            <div className="text-center mb-4">
          <p className="text-2xl font-semibold">{weather.name}</p>
          <p className="text-xl">{weather.main.temp} °C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
        </div>
        ):<p className="mb-4">City not found or loading...</p>
       }
      
      {/* button to change background*/}
    <div >
            <button className='bg-blue-500 text-white py-2 px-3 rounded m-5' onClick={()=>setdark(!dark)}>{dark?"Light Mode":"Dark mode"}</button>
    </div>


    </div>

  )
}

export default WeatherClock