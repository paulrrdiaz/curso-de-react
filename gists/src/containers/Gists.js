import React, { Component } from "react";
import axios from "axios";
import GistsList from "src/components/GistsList";

const GIST_API = "https://api.github.com/users/gaearon/gists";

export default class extends Component {
  state = {
    gists: []
  };

  componentDidMount() {
    this.fetchGist();
  }

  fetchGist = async () => {
    const { data } = await axios.get(GIST_API);

    this.setState({
      gists: data
    });
  };

  render() {
    const { greeting, gists } = this.state;
    return (
      <div className="gists">
        <h1>Gists</h1>
        <div className="app-wrapper">
          <GistsList gists={gists} />
        </div>
      </div>
    );
  }
}
