import { PokedexRowProps } from "../interfaces";
import { toTitleCase } from "../utils";

const PokedexRow: React.FC<PokedexRowProps> = ({ pokemon }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{pokemon.id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{toTitleCase(pokemon.name)}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {pokemon.types.map((type, index) => (
          <span key={index} className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">{toTitleCase(type)}{index == pokemon.types.length -1 ? "" : ", "}</span>
        ))}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <img className="w-10 h-10 rounded-full" src={pokemon.sprites.front_default} alt={pokemon.name} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <img className="w-10 h-10 rounded-full" src={pokemon.sprites.front_shiny} alt={pokemon.name} />
      </td>
    </tr>
  );
};

export default PokedexRow;