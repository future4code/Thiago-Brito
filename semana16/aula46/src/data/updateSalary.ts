import {connection} from ".."

export const updateSalary = async (id: string, salary: number): Promise<any> => {
    try {
        const result = await connection.raw(`UPDATE Actor SET salary = ${salary} WHERE id = ${id}`)
        
    } catch (error) {
        console.log(error)
    }

  };