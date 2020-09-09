import React, {useState, useEffect}from'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import PokeCard from "./components/PokeCard"


export default function App() {
  const [pokeList, setPokeList] =useState([])
  const [pokeName, setPokeName] =useState("")
  useEffect(()=>{
    listPokemon()
  }, []);

const listPokemon = () =>{
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {

      setPokeList(response.data.results);
    })
    .catch(err => {
      console.log(err);
    });
};

 const changePokeName = (event)=>{
    setPokeName(event.target.value)
  }
  return (
    <div>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>

        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}


