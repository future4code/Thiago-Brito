import React, { useEffect, useState } from 'react';
import { useAxios } from '../../Hooks/UseAxios';


export default function FeedPage() {
  const {getPosts, posts}= useAxios()

  useEffect (()=>{
    getPosts()
  }  ,[])

  return (
    <div>
      {posts.map((pt)=>{
        return(
          <div key={pt.id}>
              <p>{pt.title}</p>
              <p>{pt.username}</p>
              <p>{pt.text}</p>
          </div>
        )
      })}
    </div>
  );
}


