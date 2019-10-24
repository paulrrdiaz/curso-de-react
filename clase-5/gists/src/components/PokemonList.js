import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import Pokemon from "./Pokemon";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const PokemonList = ({ data }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map(pokemon => {
        return <Pokemon key={pokemon.name} {...pokemon} />;
      })}
    </Masonry>
  );
};

PokemonList.propTypes = {
  data: PropTypes.array
};

export default PokemonList;
