import React, { Component } from "react";
import axios from "axios";
import GistsList from "src/components/GistsList";
import withGists from "src/HOCs/withGists";

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
    const userUrl = "https://api.github.com/users/paulrrdiaz/gists";
    const getUrl = user => `https://api.github.com/users/${user}/gists`;

    const GistsListWithData = withGists(userUrl)(GistsList);
    const GistsListWithDataURL = withGists(getUrl)(GistsList);

    return (
      <div className="gists">
        <h1>Gists</h1>
        <div className="app-wrapper">
          <GistsList data={gists} />
          <GistsListWithData />
          <GistsListWithDataURL user="GrahamcOfBorg" />
        </div>
      </div>
    );
  }
}
