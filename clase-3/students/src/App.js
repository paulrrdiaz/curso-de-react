import React from "react";
import axios from "axios";

import Students from "./components/Students";
import SearchStudent from "./components/SearchStudent";
const STUDENTS_API = "http://localhost:4000/students";

class App extends React.Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.fetchStudents();
  }

  async fetchStudents() {
    const { data } = await axios.get(STUDENTS_API);

    this.setState({
      students: data
    });
  }

  filterStudents = async (value) => {
    const { data } = await axios.get(`${STUDENTS_API}?q=${value}`);
    
    this.setState({
      students: data
    });
  }

  render() {
    const { students } = this.state;

    return (
      <div>
        <div className="app-wrapper">
          <SearchStudent handleFilter={this.filterStudents} />
        </div>
        <div className="app-wrapper">
          <Students students={students} />
        </div>
      </div>
    );
  }
}

export default App;
