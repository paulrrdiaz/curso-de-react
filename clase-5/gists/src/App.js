import React, { Component } from "react";
import axios from "axios";

import withData from "./HOC/withData";
import Loader from "./components/Loader";
import GistsList from "./components/GistsList";

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

const Home = () => {
  return (
    <>
      <div className="app-wrapper">
        <GistsWithData />
      </div>
      <div className="app-wrapper">
        <GistsWithDataForUser user="ryanflorence" />
      </div>
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
