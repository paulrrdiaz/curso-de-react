import React from 'react';
import withLoader from './HOC/withLoader'

class List extends React.Component {
  render() {
    return <div>Lista de Usuarios</div>
  }
}

const ListWithLoader = withData(User)({ id })

function App() {
  return (
    <div className="App">
      <ListWithLoaderTrue />
      <ListWithLoaderFalse />
    </div>
  );
}

export default App;
