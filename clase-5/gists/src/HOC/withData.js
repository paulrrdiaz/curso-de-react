import React, { Component } from "react";
import axios from "axios";
import isArray from "lodash/isArray";
import Loader from "../components/Loader";

export default WrappedComponent => url => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      const API = typeof url === "function" ? url(this.props) : url;
      const fetched = await axios.get(API);
      const data = isArray(fetched.data) ? fetched.data : fetched.data.results;

      setTimeout(() => {
        this.setState({
          data
        });
      }, 1000);
    }

    render() {
      const { data } = this.state;

      return data ? <WrappedComponent data={data} /> : <Loader />;
    }
  };
};
