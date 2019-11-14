import React, { Component } from "react";
import axios from "axios";
import isNull from "lodash/isNull";

const withGists = url => WrappedComponent => {
  console.log(url);
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      const { user } = this.props;
      const API = typeof url === 'function' ? url(user) : url
      const { data } = await axios.get(API);

      this.setState({
        data
      });
    };

    render() {
      const { data } = this.state;
      return isNull(data) ? null : <WrappedComponent data={data} />;
    }
  };
};

export default withGists;
