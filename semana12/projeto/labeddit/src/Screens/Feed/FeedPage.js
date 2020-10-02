import React, { useEffect, useState } from 'react';
import { useAxios } from '../../Hooks/UseAxios';
import {goToPost} from "../../Routes/Coordinator"
import {useHistory} from "react-router-dom"
import Axios from 'axios';


export default function FeedPage() {
  const {getPosts, posts}= useAxios()
  // const { form, onChange, resetState } = UseForm({ text: "", title:"" })
  useEffect (()=>{
    getPosts()
  }  ,[])
  const history = useHistory()
  // const createPost = () => {
  //   const body = {text:form.text, title:form}
  //   Axios.post
  // }

  

  return (
    <div>
      {posts.map((pt)=>{
        return(
          <div key={pt.id}>
              <p>{pt.title}</p>
              <p>{pt.username}</p>
              <p>{pt.text}</p>
              <button onClick={()=>goToPost(history,pt.id)} >
                Comentar
              </button>
          </div>
        )
      })}
    </div>
  );
}


