import { useEffect, useState } from "react";
import { Pokemon, PokemonAPIResponse, PokemonTypeObject } from "../interfaces";
import PokedexTable from "../components/PokedexTable";
import PokemonTypeSelection from "../components/PokemonTypeSelection";
import axios from "axios";
import { useLocation } from "react-router";
import { LoadingComponent} from "../components/Loading";

function Pokedex() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [pokemons, setPokemons] = useState<
    {
      snippet: Pokemon;
      details: PokemonAPIResponse;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [noMorePages, setNoMorePages] = useState<boolean>(false);
  const [wasSelected, setWasSelected] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    fetchPokemons(page, selectedType);
  }, [page, selectedType]);

  const fetchPokemons = async (
    page: number = 1,
    typeSelection: string = "",
  ) => {
    if (page < 1 || (page > 1 && noMorePages)) {
      return;
    }
    setLoading(true);
    setNoMorePages(false); // Reset no more pages state on new fetch
    const requests = [];
    if (typeSelection) {
      setSelectedType(typeSelection);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${typeSelection}`,
      );
      response.data.pokemon.forEach((pokemon: PokemonTypeObject) => {
        requests.push(axios.get(pokemon.pokemon.url));
      });
    } else {
      setSelectedType("");
      const offset = (page - 1) * 151;
      for (let id = 1 + offset; id <= 151 + offset; id++) {
        let jump = 0;
        if (id > 1024) jump = 10001 - 1025; // there is a gap in the API
        requests.push(
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id + jump}`),
        );
      }
    }
    try {
      const responses = await axios.all(requests);
      const pokemonsAPI: PokemonAPIResponse[] = responses.map(
        (response) => response.data,
      );
      const pokemons = pokemonsAPI.map((pokemon) => ({
        snippet: transformPokemon(pokemon),
        details: pokemon,
      }));
      setPokemons(pokemons);
      setPage(page);
    } catch (error) {
      console.error("Failed to fetch pokemons:", error);
    } finally {
      setLoading(false);
    }
  };

  if (
    location.state !== null &&
    location.state !== undefined &&
    "selectionType" in location.state &&
    !wasSelected
  ) {
    const selectionType = location.state.selectionType as string;
    if (selectionType !== selectedType) {
      setSelectedType(selectionType);
      fetchPokemons(1, selectionType);
    }
  }

  const transformPokemon = (pokemon: PokemonAPIResponse): Pokemon => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types.map((type) => ({
        name: type.type.name,
        url: type.type.url,
      })),
      sprites: {
        front_default: pokemon.sprites.front_default,
        front_shiny: pokemon.sprites.front_shiny,
      },
    };
  };

  const selectType = (typeName: string) => {
    setSelectedType(typeName);
    setWasSelected(true);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      {selectedType !== "" ? (
        ""
      ) : (
        <>
          <button
            onClick={() => fetchPokemons(page - 1)}
            disabled={loading || page === 1}
          >
            {loading ? "Loading..." : "Previous Page"}
          </button>
          <button
            onClick={() => fetchPokemons(page + 1)}
            disabled={loading || noMorePages}
          >
            {loading ? "Loading..." : "Next Page"}
          </button>
          {noMorePages && <p>No more pages</p>}
        </>
      )}
      <PokemonTypeSelection
        selectType={selectType}
        selectedType={selectedType}
      />
      {selectedType && (
        <h3>
          Number of {selectedType}: {pokemons.length}
        </h3>
      )}
      <hr />
      <PokedexTable pokemons={pokemons} selectType={selectType} />
    </div>
  );
}

export default Pokedex;
