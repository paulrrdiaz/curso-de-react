import React, { Component } from "react";
import axios from "axios";
import isNull from "lodash/isNull";

const withData = url => WrappedComponent => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.fetchData();
    }

    fetchData = async () => {
      const { user } = this.props;
      const API = typeof url === "function" ? url(user) : url;
      const { data } = await axios.get(API);
      console.log(data);

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

export default withData;
