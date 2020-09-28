import React from 'react'
import {useAxiosConfigs} from "../axiosconfig/AxiosConfig"
import {Div, DivWrapper, DivContainer} from "./styled/styled"

export default function Tasks(props) {
    const { deletTask } = useAxiosConfigs()

    const delet = (id) => {
        deletTask(id)
    }

    return (
        <DivContainer>
            <DivWrapper>
                <div>Segunda</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Segunda" &&
                                <Div >
                                   {list.text} 
                                    <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Terça</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Terça" &&
                                <Div> 
                                    {list.text}   <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Quarta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quarta" &&
                                <Div >
                                    {list.text}    <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Quinta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Quinta" &&
                                <Div >
                                    {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Sexta</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sexta" &&
                                <Div>
                                    {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Sábado</div>
                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Sábado" &&
                                <Div>
                                   {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>

            <DivWrapper>
                <div>Domingo</div>

                {props.tasks.map((list) => {
                    return (
                        <>
                            {
                                list.day === "Domingo" &&
                                <Div>
                                   {list.text} <button onClick={() => delet(list.id)} >Deletar</button>
                                </Div>
                            }
                        </>
                    )
                })}
            </DivWrapper>
        </DivContainer>
    )
}