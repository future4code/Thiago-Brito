import axios from 'axios'
import React from 'react'
import {useState } from 'react'
import styled from "styled-components";
import {useAxiosConfigs} from "../axiosconfig/AxiosConfig"


const Div = styled.div`

b{
    
text-decoration: ${props => props.id ? "line-through" : "none"};
}
`;

const Main = styled.main`
display: flex;
justify-content: space-around;
`;

export default function Tasks(props) {
    const { putEdit, deletTask } = useAxiosConfigs()
    const [riscar, setRiscar] = useState(false)

    const riscado = () => {
        setRiscar(!riscar)
    }

    const edit = (id) => {
        putEdit(id)
    }

    const delet = (id) => {
        deletTask(id)
    }

    return (
        <Main>
            <div>
                <div>Segunda</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <Div key={list.id} riscado={riscar} id={list.id} >
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>
                                    <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Terça</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Terça" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Quarta</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quarta" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Quinta</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quinta" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Sexta</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sexta" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Sábado</div>
                {/* Map das tasks */}
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sábado" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>

            <div>
                <div>Domingo</div>
                {/* Map das tasks */}

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Domingo" &&
                                <Div key={list.id} riscado={riscar} id={list.id}>
                                    <b >{list.text} <button onClick={riscado}>Riscar</button></b>   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </div>
        </Main>
    )
}