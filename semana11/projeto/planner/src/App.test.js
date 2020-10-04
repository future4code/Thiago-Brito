import React from 'react'
import App from './App'
import { fireEvent, getByPlaceholderText, getByTestId, render, wait } from '@testing-library/react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import Tasks from './tasks/Tasks'

axios.get = jest.fn().mockResolvedValue({
    data: []
})
axios.post = jest.fn().mockResolvedValue()
axios.delete = jest.fn().mockResolvedValue()
describe('overall test', () => {
    test('initial rendering', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: 'Segunda',
                text: 'test',
            }]
        })

        const { findByText } = render(<App />)
        const tasks = await findByText(/test/)

        expect(tasks).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito')
    })
    test('if select and input exists and work', async () => {
        
        const { getByPlaceholderText, getByTestId } = render(<App />)
        const inputExist =  getByPlaceholderText("Digite sua Tarefa")
        const idSelect = getByTestId('bananinha')

        expect(inputExist).toBeInTheDocument()
        expect(idSelect).toBeInTheDocument()

        fireEvent.change(inputExist,{target:{value:'test'}})
        fireEvent.change(idSelect,{target:{value:'Segunda'}})
        
        expect(inputExist).toHaveValue('test')
        expect(idSelect).toHaveValue('Segunda')
    })

    test('if button exists and work', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: []
        })
        axios.post = jest.fn().mockResolvedValue()
        
        const { getByText, getByTestId, getByPlaceholderText} = render(<App />)
        const button =  getByText("Criar Tarefa")
        const select = getByTestId("bananinha")
        const input = getByPlaceholderText("Digite sua Tarefa")
        expect(button).toBeInTheDocument()

        fireEvent.change(input,{target:{value:'bola'}})
        fireEvent.change(select,{target:{value:'Segunda'}})
        await userEvent.type(input,'bola' )
        await userEvent.type(select,'Segunda')
        userEvent.click(button)
        
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito',{
            text:'bola',
            day:'Segunda'
        })
        wait(()=>{
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
    })
    
    test('if delete button exist and work', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                id:'190',
                day:'Segunda',
                text:'test'
            }]
        })

        const {getByText, findByText } = render(<App/>)
        const task = await findByText('test')
        expect(task).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito')
            wait(()=>{
            expect(axios.get).toHaveBeenCalledTimes(2)
        })
        
        const deleteExist =  getByText("Deletar")
        expect(deleteExist).toBeInTheDocument()
        userEvent.click(deleteExist)
        expect(axios.delete).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-Jackson-Thiago-Brito/190')
             wait(()=>{
                expect(axios.delete).toHaveBeenCalledTimes(2)
            })
    })

})