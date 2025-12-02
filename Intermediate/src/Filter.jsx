import React, { useEffect, useState } from 'react'

const Filter = () => {
    const[searchText,setSearchText]=useState("");
    const [filteredUsers,setFilteredUsers]=useState([]);
   const users=[
    "Satish",
    "Aman",
    "Priya",
    "Rohit",
    "Sneha",
    "John",
    "Alexa" 
    ];
    useEffect(() => {
    const result =  users.filter((user)=>user.toLowerCase().includes(searchText.toLowerCase()));
setFilteredUsers(result);
    },[searchText])
  return (
    <div>
       Live Search Filter <input type="text" 
         placeholder='Search Filter...'
         value={searchText}
         onChange={(e)=>setSearchText(e.target.value)}
         className='border p-2'
         />
         <h3>result ...</h3>
         <ul>
            {
                filteredUsers.map((ele,index)=> <li key={index}>{ele}</li>)
            }
         </ul>
    </div>
  )
}

export default Filter