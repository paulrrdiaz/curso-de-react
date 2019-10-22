import React from "react";
import propTypes from "prop-types";

class ErrorCatcher extends React.Component {
  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    console.log(error, errorInfo);

    return error ? <h1>Ups!!! something is wrong</h1> : children;
  }
}

class Counter extends React.Component {
  componentWillUnmount() {
    console.log("will unmount Counter component");
  }

  render() {
    const { count } = this.props;
    return <h2>La cuenta es {count}</h2>;
  }
}

const Button = ({ triggered, children }) => (
  <button className="button" onClick={triggered}>
    {children}
  </button>
);

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      count: 0
    };

    console.log("constructor Container component");
  }

  // componentWillMount() {
  //   console.log("will mount Container component");
  // }

  componentDidMount() {
    console.log("did mount Container component");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update Container component");
    console.log(prevProps, "prevProps");
    console.log(prevState, "prevState");
    console.log("did update Container component");
  }

  changeCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleCounter = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { title, age } = this.props;
    const { show, count } = this.state;
    console.log("rendering Container component");

    if (count === 5) {
      throw new Error("It's too much");
    }

    return (
      <div>
        <h1>
          I'm a Container {title} {age}
        </h1>
        <p>
          <Button triggered={this.toggleCounter}>
            {show ? "Ocultar Counter" : "Mostrar Counter"}
          </Button>
          <Button triggered={this.changeCount} children="Agregar +1" />
        </p>
        {show && <Counter count={count} />}
      </div>
    );
  }
}

Container.propTypes = {
  title: propTypes.string,
  age: propTypes.number
};

function App() {
  return (
    <div className="app-wrapper">
      <ErrorCatcher>
        <Container title="This is a title" age={45} />
      </ErrorCatcher>
    </div>
  );
}

export default App;
