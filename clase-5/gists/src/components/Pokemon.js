import React from "react";
import { Link } from "@reach/router";
import Pokemon from "../assets/images/pokemon.png";
import styled from "@emotion/styled";

const PokemonWrapper = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const PokemonPicture = styled.picture`
  margin-right: 10px;
`;

export default ({ name }) => {
  return (
    <PokemonWrapper to={`/pokemon/${name}`}>
      <PokemonPicture>
        <img src={Pokemon} alt={name} />
      </PokemonPicture>
      <h3>{name}</h3>
    </PokemonWrapper>
  );
};
