import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function gottaGetEmAll() {
            try{
                const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
                // console.log(data.results)
                setPokemon(data.results)
            } catch (e) {
                console.log(e)
                return e;
            }
        }
        gottaGetEmAll()
    }, []);

    return (
        <ul>
            {pokemon && pokemon.map((pokemon) => {
                return <li key={pokemon.name}>{pokemon.name}</li>
            })}
        </ul>
    );
}

export default App;
