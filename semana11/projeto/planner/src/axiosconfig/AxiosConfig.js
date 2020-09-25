import axios from "axios"
import { useEffect, useState  } from "react"

export const useAxiosConfigs = () => {
    const [tasks, setTasks] = useState([])
    const getTasks = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito")
            .then((response) => {
                setTasks(response.data)
                
            }).catch((error) => {
                console.log(error)
            })
    }
    const putEdit = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito/${id}`)
            .then((response) => {

                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    const deletTask = (del) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito/${del}`)
            .then((response) => {

                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getTasks()
    }, [])

    return { getTasks, tasks, putEdit, deletTask }
}
