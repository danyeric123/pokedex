import React from "react";
import { FilterablePokedexTableProps } from "../interfaces";

const PokemonTypeSelection: React.FC<FilterablePokedexTableProps> = ({
  selectType,
  selectedType,
}) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-bold mb-2">Filter by Type</h2>
      <select
        className="form-select block w-full mt-1 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
        value={selectedType}
        onChange={(e) => selectType(e.target.value)}
      >
        <option value="">All</option>
        <option value="normal">Normal</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="ice">Ice</option>
        <option value="electric">Electric</option>
        <option value="fighting">Fighting</option>
        <option value="ground">Ground</option>
        <option value="psychic">Psychic</option>
        <option value="grass">Grass</option>
        <option value="rock">Rock</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="steel">Steel</option>
        <option value="ghost">Ghost</option>
        <option value="bug">Bug</option>
        <option value="poison">Poison</option>
      </select>
    </div>
  );
};

export default PokemonTypeSelection;
