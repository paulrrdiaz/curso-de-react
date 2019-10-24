import React from "react";
import Pokemon from "../assets/images/pokemon.png";
import styled from "@emotion/styled";

const PokemonWrapper = styled("a")`
  background-color: ${props =>
    props.name === "charmander" ? "red" : "rgba(0, 0, 0, 0.5)"};
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
    <PokemonWrapper name={name} href="/">
      <PokemonPicture>
        <img src={Pokemon} alt={name} />
      </PokemonPicture>
      <h3>{name}</h3>
    </PokemonWrapper>
  );
};
