import React from "react";

import withData from "../HOC/withData";
import GistsList from "../components/GistsList";
import UsersList from "../components/UsersList";
import PokemonList from "../components/PokemonList";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const USERS_API = "https://randomuser.me/api/?results=30";
const GIST_API = "https://api.github.com/users/gaearon/gists";
const getAPIforUser = ({ user }) =>
  `https://api.github.com/users/${user}/gists`;

const GistsWithData = withData(GistsList)(GIST_API);
const GistsWithDataForUser = withData(GistsList)(getAPIforUser);
const UsersWithData = withData(UsersList)(USERS_API);
const PokemonsWithData = withData(PokemonList)(POKEMON_API);

const Home = () => (
  <>
    <div className="app-wrapper">
      <PokemonsWithData />
    </div>
  </>
);

export default Home;
