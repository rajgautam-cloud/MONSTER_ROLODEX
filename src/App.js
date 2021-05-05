import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBox } from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    //Easier way way to write above two lines=>
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h2>Monsters Rolodex</h2>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
