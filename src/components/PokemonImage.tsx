import { PokemonImageProps } from "../interfaces";

const PokemonImage: React.FC<PokemonImageProps> = ({
  srcDefault,
  srcGIF,
  alt,
}) => (
  <div className="w-40 h-40">
    <img
      className="mx-auto w-full h-full"
      src={srcGIF ? srcGIF.front_default : srcDefault}
      alt={alt}
    />
  </div>
);

export default PokemonImage;
