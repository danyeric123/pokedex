import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokemonAPIResponse } from "../interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import { toTitleCase } from "../utils";
import PokemonImage from "../components/PokemonImage";
import EvolutionChain from "../components/EvolutionChain";
import AbilitiesSection from "../components/AbilitiesSection";
import BaseExperienceSection from "../components/BaseExperienceSection";
import TypesSection from "../components/TypesSection";

const PokeDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemonDetails = location.state.pokemonDetails as PokemonAPIResponse;

  const [evolutionChain, setEvolutionChain] = useState<PokemonAPIResponse[]>(
    [],
  );

  useEffect(() => {
    fetchEvolutionChain(pokemonDetails.id);
  }, [pokemonDetails.id]);

  const fetchEvolutionChain = async (id: number) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      );
      const evolutionChainUrl = response.data.evolution_chain.url;
      const evolutionChainResponse = await axios.get(evolutionChainUrl);
      const evolutionChain = evolutionChainResponse.data.chain;
      const chain = [];
      let current = evolutionChain;
      while (current) {
        const pokemonId = current.species.url.split("/").reverse()[1];
        console.log("pokemonId", pokemonId);
        const pokemonResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        );
        chain.push(pokemonResponse.data);
        current = current.evolves_to[0];
      }
      setEvolutionChain(chain);
    } catch (error) {
      console.error("Failed to fetch evolution chain:", error);
    }
  };

  const selectType = (typeName: string) => {
    navigate("/", { state: { selectionType: typeName } }); // Navigate to homepage with selected type as state
  };

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {toTitleCase(pokemonDetails.name)}
        </h1>
      </div>
      <div className="flex flex-row justify-around justify-items-center">
        <div className="flex flex-row justify-start items-start gap-x-8">
          <PokemonImage
            srcDefault={pokemonDetails.sprites.front_default}
            srcGIF={
              pokemonDetails.sprites.versions?.["generation-v"]["black-white"]
                .animated
            }
            alt={pokemonDetails.name}
          />
        </div>
        <div className="border-gray-700 border-2 p-6 rounded-lg">
          <AbilitiesSection abilities={pokemonDetails.abilities} />
          <BaseExperienceSection
            baseExperience={pokemonDetails.base_experience}
          />
          <TypesSection types={pokemonDetails.types} selectType={selectType} />
        </div>
      </div>
      <EvolutionChain evolutionChain={evolutionChain} />
    </div>
  );
};

export default PokeDetails;
