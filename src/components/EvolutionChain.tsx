// EvolutionChain.tsx
import React from "react";
import { toTitleCase } from "../utils";
import { PokemonEvolutionChainProps } from "../interfaces";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const EvolutionChain: React.FC<PokemonEvolutionChainProps> = ({
  evolutionChain,
}) => {
  return (
    <div className="bg-gray-500 p-4 rounded-lg my-8">
      <h2 className="text-2xl font-bold my-4">Evolution Chain</h2>
      <div className="flex flex-row justify-between items-center">
        {evolutionChain.map((pokemon, index) => (
          <>
            <Link
              to={`/pokemon/${pokemon.name}`}
              state={{ pokemonDetails: pokemon }}
            >
              <div
                key={index}
                className="flex flex-col border-2 bg-gray-600 border-gray-600 items-center p-4 rounded-lg mx-8"
              >
                <div className="w-20 h-20 bg-white rounded-full p-2 mb-2 flex items-center justify-center">
                  <img
                    src={
                      pokemon.sprites.versions?.["generation-v"]["black-white"]
                        .animated
                        ? pokemon.sprites.versions?.["generation-v"][
                            "black-white"
                          ].animated.front_default
                        : pokemon.sprites.front_default
                    }
                    alt={pokemon.name}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-blue-300">{toTitleCase(pokemon.name)}</p>
              </div>
            </Link>
            {index < evolutionChain.length - 1 && (
              <IoIosArrowForward className="text-white text-2xl" size={40} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default EvolutionChain;
