import { PokedexRowProps } from "../interfaces";
import { toTitleCase } from "../utils";

const PokedexRow: React.FC<PokedexRowProps> = ({ pokemon, selectType }) => {
  const getTypeColor = (type: string): string => {
    switch (type) {
      case "normal":
        return "#A8A878";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "ice":
        return "#98D8D8";
      case "electric":
        return "#F8D030";
      case "fighting":
        return "#C03028";
      case "ground":
        return "#E0C068";
      case "psychic":
        return "#F85888";
      case "grass":
        return "#78C850";
      case "rock":
        return "#B8A038";
      case "dark":
        return "#705848";
      case "fairy":
        return "#EE99AC";
      case "steel":
        return "#B8B8D0";
      case "ghost":
        return "#705898";
      case "bug":
        return "#A8B820";
      case "poison":
        return "#A040A0";
      default:
        return "#68A090"; // A default color for any type not listed
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
        {pokemon.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {toTitleCase(pokemon.name)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="inline-block mr-2"
            style={{ marginRight: "8px" }}
          >
            <button
              onClick={() => selectType(type.name)}
              style={{
                textDecoration: "none",
                color: "white",
                background: getTypeColor(type.name),
                border: "none",
                padding: "8px 12px", // Keep the padding for space between text and border
                cursor: "pointer",
                borderRadius: "20px", // Adjusted for rounded rectangle
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "80px", // Set a minimum width to accommodate the longest type name
                height: "40px",
                fontSize: "12px",
                margin: "0 4px", // Keep the margin for space between buttons
              }}
              className="font-semibold leading-none"
            >
              {toTitleCase(type.name)}
            </button>
          </span>
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
