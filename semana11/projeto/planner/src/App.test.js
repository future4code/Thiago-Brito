import React from 'react'
import { render } from '@testing-library/react'
import axios from 'axios'
import Tasks from './Tasks'
import userEvent from '@testing-library/user-event'

axios.get = jest.fn().mockResolvedValue({
    data: []
})
describe('lista', () => {
    test('Testando a renderização inicial', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                day: 'Segunda',
                text: 'test',
            }]
        })

        const { findByText } = render(<Tasks />)
        const tasks = await findByText(/test/)
        expect(tasks).toBeInTheDocument()
        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')
    })

    test('testando o botao delete', async () => {
        axios.get = jest.fn().mockResolvedValue({
            data: [{
                id: '21',
                day: 'Sexta',
                text: 'test',
            }]
        })
        axios.put = jest.fn().mockResolvedValue()
        const { findByText} = render((<Tasks />))

        const tarefaBananinha = await findByText(/test/)
        expect(tarefaBananinha).toBeInTheDocument()

        expect(axios.get).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido')

        userEvent.click(testetask)
        expect(axios.put).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-Matheus-Candido/21', {
            text: 'test'
        })
    })
})