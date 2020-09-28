import React from 'react'
import {useAxiosConfigs} from "../axiosconfig/AxiosConfig"

export default function Tasks(props) {
    const { deletTask } = useAxiosConfigs()

    const delet = (id) => {
        deletTask(id)
    }

    return (
        <div>
            <div>
                <div>Segunda</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <div >
                                   {list.text} 
                                    <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Terça</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Terça" &&
                                <div> 
                                    {list.text}   <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Quarta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quarta" &&
                                <div >
                                    {list.text}    <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Quinta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quinta" &&
                                <div >
                                    {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Sexta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sexta" &&
                                <div>
                                    {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Sábado</div>
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sábado" &&
                                <div>
                                   {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Domingo</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Domingo" &&
                                <div>
                                   {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </div>
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}