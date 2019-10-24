import React, { Component } from "react";
import axios from "axios";
import "./styles/app.scss";

import withData from "./HOC/withData";
import Loader from "./components/Loader";
import GistsList from "./components/GistsList";
import UsersList from "./components/UsersList";
import PokemonList from "./components/PokemonList";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const USERS_API = "https://randomuser.me/api/?results=30";
const GIST_API = "https://api.github.com/users/gaearon/gists";
const getAPIforUser = ({ user }) =>
  `https://api.github.com/users/${user}/gists`;

class Gists extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { data } = await axios.get(GIST_API);
    console.log(data);

    setTimeout(() => {
      this.setState({
        data
      });
    }, 1000);
  }

  render() {
    const { data } = this.state;

    return data ? (
      <div>
        <GistsList data={data} />
      </div>
    ) : (
      <Loader />
    );
  }
}

const GistsWithData = withData(GistsList)(GIST_API);
const GistsWithDataForUser = withData(GistsList)(getAPIforUser);
const UsersWithData = withData(UsersList)(USERS_API);
const PokemonsWithData = withData(PokemonList)(POKEMON_API);

const Home = () => {
  return (
    <>
      <div className="app-wrapper">
        <PokemonsWithData />
      </div>
      {/* <div className="app-wrapper">
        <Gists />
      </div>
      <div className="app-wrapper">
        <GistsWithData />
      </div>
      <div className="app-wrapper">
        <GistsWithDataForUser user="ryanflorence" />
      </div>
      <div className="app-wrapper">
        <UsersWithData />
      </div> */}
    </>
  );
};

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
