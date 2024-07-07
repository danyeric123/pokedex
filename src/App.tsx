import { useEffect, useState } from "react";
import { Pokemon, PokemonAPIResponse } from "./interfaces";
import PokedexTable from "./components/PokedexTable";
import PokemonTypeSelection from "./components/PokemonTypeSelection";
import "./App.css";
import axios from 'axios';

function App() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchPokemons(page);
  }
  , [page]);

  
  const fetchPokemons = async (page: number = 1) => {
    setLoading(true);
    try {
      const requests = [];
      const offset = (page - 1) * 151;
      for (let id = 1 + offset; id <= 151+offset; id++) {
        requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
      }
      const responses = await axios.all(requests);
      const pokemonsAPI: PokemonAPIResponse[] = responses.map(response => response.data);
      const pokemons = pokemonsAPI.map(transformPokemon);
      setPokemons(pokemons);
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
      // Handle error appropriately
    }
    setLoading(false);
    setPage(page);
  };

  const transformPokemon = (pokemon: PokemonAPIResponse): Pokemon => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types.map(type => type.type.name),
      sprites: {
        front_default: pokemon.sprites.front_default,
        front_shiny: pokemon.sprites.front_shiny
      }
    };
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <button onClick={()=>fetchPokemons(page-1)} disabled={loading}>
        {loading ? "Loading..." : "Previous Page"}
      </button>
      <button onClick={()=>fetchPokemons(page+1)} disabled={loading}>
        {loading ? "Loading..." : "Next Page"}
      </button>
      <PokemonTypeSelection selectType={setSelectedType} selectedType={selectedType} />
      <PokedexTable pokemons={pokemons.filter(pokemon => !selectedType || pokemon.types.includes(selectedType))} />
    </div>
    
  );
}

export default App;
