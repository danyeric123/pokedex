import React from "react";
import { toTitleCase } from "../utils";
import { PokemonAbilitiesProps } from "../interfaces";

const AbilitiesSection: React.FC<PokemonAbilitiesProps> = ({ abilities }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold my-4">Abilities</h2>
      <ul className="pl-5">
        {abilities.map((ability, index) => (
          <li key={index}>{toTitleCase(ability.ability.name)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AbilitiesSection;
