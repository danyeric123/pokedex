import { useState, useEffect } from "react";
import { Pokemon, PokemonAPIResponse } from "../interfaces";

interface SearchProps {
  setPokemonList: (pokemons: {
    snippet: Pokemon;
    details: PokemonAPIResponse;
  }[]) => void;
  transformPokemon: (pokemon: PokemonAPIResponse) => Pokemon;
  pokemonsList: {
    snippet: Pokemon;
    details: PokemonAPIResponse;
  }[];
  setSearch: (searchTerm: string) => void;
}

export const PokemonSearch = ({
  setPokemonList,
  transformPokemon,
  pokemonsList,
  setSearch
}: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/?limit=10000",
      );
      const data = await response.json();
      const results = data.results;
      const pokemons = results.map((pokemon: PokemonAPIResponse) => ({
        snippet: transformPokemon(pokemon),
        details: pokemon,
      }));
      setPokemonList(pokemons);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    setSearch(searchTerm);
    if (searchTerm) {
      const results = pokemonsList.filter((pokemon) =>
        pokemon.snippet.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setPokemonList(results);
    }
  }, [searchTerm, pokemonsList]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default PokemonSearch;
