import { PokedexRowProps } from "../interfaces";
import { toTitleCase } from "../utils";
import { Link } from "react-router-dom";
import TypeTag from "./TypeTag";

const PokedexRow: React.FC<PokedexRowProps> = ({
  pokemon,
  selectType,
  pokemonDetails,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {pokemon.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        <Link
          to={`/pokemon/${pokemon.name}`}
          state={{ pokemonDetails: pokemonDetails }}
        >
          {toTitleCase(pokemon.name)}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {pokemon.types.map((type, index) => (
          <TypeTag
            key={index}
            typeName={type.name}
            index={index}
            selectType={selectType}
          />
        ))}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <img
          className="w-10 h-10 rounded-full"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <img
          className="w-10 h-10 rounded-full"
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
        />
      </td>
    </tr>
  );
};

export default PokedexRow;
