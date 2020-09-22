import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

test("ao digitar em novo post e clicar no botao novo post deve criar novo post  ", async()=>{
    const{getByPlaceholderText, getByText} = render(<App/>);
    
    const getPlaceholderText = getByPlaceholderText(/novo post/i);  
    fireEvent.change(getPlaceholderText,{target:{value:"teste"}});
    
    expect(getPlaceholderText).toHaveDisplayValue("teste")
    
    const postButton = getByText(/Adicionar/i)

    fireEvent.click(postButton);
    expect(getByText(/Adicionar/i)).toHaveTextContent

})