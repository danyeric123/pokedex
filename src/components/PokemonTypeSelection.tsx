import React from 'react'
import { FilterablePokedexTableProps } from '../interfaces'

const PokemonTypeSelection: React.FC<FilterablePokedexTableProps> = ({selectType, selectedType}) => {
  
  return (
    <div>
    <h2>Filter by Type</h2>
    <select value={selectedType} onChange={(e) => selectType(e.target.value)}>
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
  
  )
}

export default PokemonTypeSelection