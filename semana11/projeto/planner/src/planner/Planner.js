import axios from 'axios';
import React from 'react';
import { useEffect  } from 'react';
import { useAxiosConfigs } from "../axiosconfig/AxiosConfig";
import { useForm } from "../hooks/Hooks";
import Tasks from '../tasks/Tasks';

export default function Planner(props) {
    const { form, onChange, resetState } = useForm({
        text: "",
        day: ""
    })

    const postTasks = () => {
        const body = {
            text: form.text,
            day: form.day
        }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito", body)
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
     })
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }
    const handleSubimission = (event) => {
        event.preventDefault()
        postTasks()
        resetState()
    }
    useEffect(() => {
        props.getTasks()
    }, [])

    return (
        <main className="App">
            <form onSubmit={handleSubimission}>
                <input name="text" value={form.text} onChange={handleInputChange} type="text" placeholder="Digite sua Tarefa" />
                <select
                    name="day"
                    value={form.day}
                    onChange={handleInputChange}
                >
                    <option value="none">Selecione um dia da semana</option>
                    <option value="Segunda" >Segunda</option>
                    <option value="Terça" >Terça</option>
                    <option value="Quarta" >Quarta</option>
                    <option value="Quinta" >Quinta</option>
                    <option value="Sexta" >Sexta</option>
                    <option value="Sábado" >Sábado</option>
                    <option value="Domingo" >Domingo</option>
                </select>
                <button>Criar Tarefa</button>
            </form>

            <h2>Todas as tarefas</h2>

            <Tasks tasks={props.tasks} />

        </main>
    );
}