import React from "react";
import TypeTag from "./TypeTag";
import { PokemonType } from "../interfaces";

const TypesSection: React.FC<{
  types: PokemonType[];
  selectType: (typeName: string) => void;
}> = ({ types, selectType }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold my-4">Types</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {types.map((type, index) => (
          <TypeTag
            index={index}
            typeName={type.type.name}
            selectType={selectType}
          />
        ))}
      </div>
    </div>
  );
};

export default TypesSection;
