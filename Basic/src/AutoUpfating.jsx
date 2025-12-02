import React, { useEffect, useState } from 'react'

const AutoUpfating = () => {
  const[posts,setposts]=useState([]);
  const[page,setpage]=useState([]);
  const limit=10;

  useEffect(()=>{
  const fetchposts =async ()=>{
    const res=await fetch(  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    const data=await res.json();
    setposts(data)
  };
  fetchposts();

  },[page])

  const nextpage = () =>setpage(prev=prev+1);
  const prevpage =()=>setpage(prev =>(prev>1?prev-1:prev))

  return (
    <div>
      {posts.map(post =>{
       <>
         <h3>{post.id}. {post.title}</h3>
          <p>{post.body}</p>
       </>
      })}
    </div>
  )
}

export default AutoUpfating