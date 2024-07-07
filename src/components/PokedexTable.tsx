import React from 'react'
import { PokedexTableProps } from '../interfaces'
import PokedexRow from './PokedexRow'


const PokedexTable: React.FC<PokedexTableProps> = ({pokemons}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Types</th>
          <th>Default</th>
          <th>Shiny</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon, index) => (
          <PokedexRow key={index} pokemon={pokemon} />
        ))}
      </tbody>
    </table>
  )
}

export default PokedexTable