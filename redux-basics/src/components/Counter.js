import React from "react";
import { connect } from "react-redux";

const Counter = props => {
  console.log(props);

  return <div>Test</div>;
};

const mapStateToProps = ({ counter }) => ({
  current: counter.current
});

export default connect(mapStateToProps)(Counter);
