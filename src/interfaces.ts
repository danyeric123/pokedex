export interface PokedexTableProps {
  pokemons: {
    snippet: Pokemon;
    details: PokemonAPIResponse;
  }[];
  selectType: (type: string) => void;
}

export interface Pokemon {
  name: string;
  id: number;
  types: {
    name: string;
    url: string;
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}

export interface PokedexRowProps {
  pokemon: Pokemon;
  pokemonDetails: PokemonAPIResponse;
  selectType: (type: string) => void;
}

export interface TypeProps {
  typeName: string;
  index: number;
  selectType: (type: string) => void;
}

export interface FilterablePokedexTableProps {
  selectedType: string;
  selectType: (type: string) => void;
}

export interface PokemonDetailsProps {
  pokemonDetails: PokemonAPIResponse;
}

export interface PokemonImageProps {
  srcDefault: string;
  srcGIF?: AnimatedSprites;
  alt: string;
}

export interface PokemonTypeObject {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonEvolutionChainProps {
  evolutionChain: PokemonAPIResponse[];
}

export interface PokemonAbilitiesProps {
  abilities: Ability[];
}

export interface PokemonTypeAPIResponse {
  pokemon: PokemonTypeObject[];
}

export interface PokemonAPIResponse {
  abilities: Ability[];
  base_experience: number;
  cries: PokemonCries;
  forms: NamedAPIResource[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: unknown[]; // Assuming empty array, you could refine this later
  past_types: unknown[]; // Assuming empty array, you could refine this later
  species: NamedAPIResource;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonType[];
  weight: number;
}

export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

export interface HeldItem {
  item: NamedAPIResource;
  version_details: HeldItemVersion[];
}

export interface HeldItemVersion {
  rarity: number;
  version: NamedAPIResource;
}

export interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other?: {
    dream_world: DreamWorldSprites;
    home: HomeSprites;
    "official-artwork": OfficialArtworkSprites;
    showdown: ShowdownSprites;
  };
  versions?: Versions;
}

export interface DreamWorldSprites {
  front_default: string;
  front_female: string | null;
}

export interface HomeSprites {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface OfficialArtworkSprites {
  front_default: string;
  front_shiny: string;
}

export interface ShowdownSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface Versions {
  "generation-i": GenerationSprites;
  "generation-ii": GenerationSprites;
  "generation-iii": GenerationSprites;
  "generation-iv": GenerationSprites;
  "generation-v": GenerationSprites;
  "generation-vi": GenerationSprites;
  "generation-vii": GenerationSprites;
  "generation-viii": GenerationSprites;
}

export interface GenerationSprites {
  [key: string]: GenerationSpecificSprites;
}

export interface GenerationSpecificSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  animated?: AnimatedSprites;
  gray?: string;
  transparent?: string;
}

export interface AnimatedSprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}
