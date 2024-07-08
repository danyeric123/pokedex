import React from "react";
import { TypeProps } from "../interfaces";
import { toTitleCase } from "../utils";

const TypeTag: React.FC<TypeProps> = ({ typeName, index, selectType }) => {
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
    <span
      key={index}
      className="inline-block mr-2"
      style={{ marginRight: "8px" }}
    >
      <button
        onClick={() => selectType(typeName)}
        style={{
          textDecoration: "none",
          color: "white",
          background: getTypeColor(typeName),
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
        {toTitleCase(typeName)}
      </button>
    </span>
  );
};

export default TypeTag;
