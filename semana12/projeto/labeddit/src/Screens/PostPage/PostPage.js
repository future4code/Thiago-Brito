import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import UseForm from '../../Hooks/UseForm';

export default function PostPage() {
  const { form, onChange, resetState } = UseForm({ text: "" })
  const [details, setDetails] = useState([])
  const [comments, setComments] = useState([])
  const token = localStorage.getItem("token")
  const pathParams = useParams()
  const getDetails = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}`, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        console.log(response.data.post)
        setDetails(response.data.post)
        setComments(response.data.post.comments)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const createComment = () => {
    const body = { text: form.text }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment`, body, {
      headers: {
        Authorization: token
      }
    })

      .then((response) => {
        console.log(response)
        getDetails()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleForm = (event) => {
    const { name, value } = event.target
    onChange(name, value)
  }
  const submitForm = (event) => {
    event.preventDefault()
    createComment()
    resetState()
  }

  const voteComment = (votes, id) => {
    const body = { direction: votes }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.id}/comment/${id}/vote`, body, {
      headers:
        { Authorization: token }
    })
      .then((response) => {
        getDetails()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const voteDirection = (dir, id) => {
    if (dir === 1) {
      voteComment(1, id)
    } else if (dir === -1) {
      voteComment(-1, id)
    }
  }
  useEffect(() => {
    getDetails()
  }, [])

  return (
    <div>
      <h1>Post</h1>
      <div>
        <h1>{details.title}</h1>
        <p>{details.username}</p>
        <p>{details.text}</p>
        <div>
          <div>
            <form onSubmit={submitForm}>
              <input
                name="text"
                type="text"
                placeholder="Comentario"
                value={form.text}
                onChange={handleForm}
              />
              <button> Enviar</button>
            </form>
          </div>

          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
                <button onClick={() => voteDirection(1, comment.id)}>^</button>
                {comment.votesCount}
                <button onClick={() => voteDirection(-1, comment.id)}>v</button>
                {comment.votesCount}
              </div>
            )
          })}

        </div>
      </div>
    </div>
  );
}


