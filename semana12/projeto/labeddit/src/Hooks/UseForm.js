import React, {useState} from "react"

export default function UseForm (initialState) {

    const [form, setForm] = useState(initialState)
    
    const onChange = (name, value) =>{
        const newForm = {...form, [name]:value}
        setForm (newForm)
    }
    const resetState = () => {
        setForm(initialState)
    }
    return {form, onChange, resetState}
  }
  