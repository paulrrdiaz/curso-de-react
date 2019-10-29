import React, { Component } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import Loader from "../components/Loader";

const getPokemonDetail = pokemon =>
  `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

const PokemonDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: calc(100vh - 40px);

  > div {
    display: flex;
    flex: 1;
    justify-content: space-around;
  }

  a {
    color: white;
  }
`;

export default class extends Component {
  state = {
    pokemon: null
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { name } = this.props;
    const API = getPokemonDetail(name);
    const { data: pokemon } = await axios.get(API);
    console.log(pokemon);
    this.setState({
      pokemon
    });
  }

  render() {
    const { name } = this.props;
    const { pokemon } = this.state;

    return pokemon ? (
      <PokemonDetailWrapper className="app-wrapper">
        <h1>{name}</h1>
        <div>
          <div>
            <picture>
              <img src={pokemon.sprites.front_default} alt="" />
            </picture>
            <ul>
              {pokemon.moves.slice(0, 10).map(({ move }) => (
                <li key={move.name}>{move.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <picture>
              <img src={pokemon.sprites.back_default} alt="" />
            </picture>
            <ul>
              {pokemon.abilities.slice(0, 10).map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <footer>
          <Link to="/">Back</Link>
        </footer>
      </PokemonDetailWrapper>
    ) : (
      <Loader />
    );
  }
}
