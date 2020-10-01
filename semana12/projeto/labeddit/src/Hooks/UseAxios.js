import axios from "axios"
import { BaseUrl } from "../Constants/Urls"
import { useState } from "react"

export const useAxios = () => {
    const [posts, setPosts] = useState([])
    // const [details, setDetails] = useState([])

    const token = localStorage.getItem("token")
    const getPosts = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {
            headers: {
                Authorization: token
            }
        })
            .then((response) => {
                console.log(response.data.posts)
                setPosts(response.data.posts)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return { getPosts, token, posts }
} 

