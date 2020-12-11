import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import ResultList from "./ResultList";

function HomePage() {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("");

  const [searchSub, setSearchSub] = useState("");
  const [searchTypeSub, setSearchTypeSub] = useState("");

  const onSearchClicked = () => {
    setSearchSub(search);
    setSearchTypeSub(searchType);
  };

  return (
    <div>
      <h2>Star War Logo here</h2>
      <form>
        <label>
          <FontAwesomeIcon icon={faSearch} />{" "}
        </label>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        ></input>
        <br></br>
        <label>Search Type: </label>
        <br></br>
        <input
          type="radio"
          id="people"
          name="searchType"
          value="people"
          onChange={(e) => setSearchType(e.target.value)}
          required
        />
        <label htmlFor="people">search by people</label>

        <input
          type="radio"
          id="planets"
          name="searchType"
          value="planets"
          onChange={(e) => setSearchType(e.target.value)}
        />
        <label htmlFor="planets">search by planet</label>

        <input
          type="radio"
          id="starships"
          name="searchType"
          value="starships"
          onChange={(e) => setSearchType(e.target.value)}
        />
        <label htmlFor="starships">search by starship</label>
        <br />
      </form>
      <button onClick={onSearchClicked}>Search</button>

      <p>"input test: "{search}</p>
      <p>"radio test: "{searchType}</p>
      <ResultList searchSub={searchSub} searchTypeSub={searchTypeSub} />
    </div>
  );
}

/*
class HomePage extends Component {
  onSearchClicked = () => {
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <h2>Star War Logo here</h2>
        <form>
          <button onClick={this.onSearchClicked}>Search</button>
        </form>
      </div>
    );
  }
}
*/

export default HomePage;
