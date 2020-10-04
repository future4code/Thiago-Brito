import React, { useEffect, useState } from 'react';
import { useAxios } from '../../Hooks/useAxios';
import { goToPost } from "../../Routes/Coordinator"
import { useHistory } from "react-router-dom"
import axios from 'axios';
import useForm from "../../Hooks/useForm"

export default function FeedPage() {
  const { getPosts, posts } = useAxios()
  const { form, onChange, resetState } = useForm( {text: "", title: ""} )
  const token = localStorage.getItem("token")
  useEffect(() => {
    getPosts()
  }, [])

  const history = useHistory()
  const createPost = () => {
    const body = { text: form.text, title: form.title }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleForm = (event) => {
    const { name, value } = event.target
    onChange(name, value)

  }
  const handleSubmission = (event) => {
    event.preventDefault()
    createPost()
    resetState()
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmission}>

              <input
                type="text"
                name="title"
                placeholder="titulo"
                value={form.title}
                onChange={handleForm}
              />

              <input
                type="text"
                name="text"
                placeholder="Comentário"
                value={form.text}
                onChange={handleForm}
              />

            <button> Criar Post</button>

        </form>
      </div>
      {posts.map((pt) => {
        return (

          <div key={pt.id}>
            <p>{ typeof pt.title ==='string' && pt.title }</p>
            <p>{pt.username}</p>
            <p>{pt.text}</p>
            <button onClick={() => goToPost(history, pt.id)} >
              Comentar
              </button>
          </div>
        )
      })}
    </div>
  );
}


