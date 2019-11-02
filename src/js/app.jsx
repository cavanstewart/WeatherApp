import React from "react";
import CityInfo from "./CityInfo/cityInfo";
import SearchHistory from "./SearchHistory/searchHistory";
import SearchBar from "./SearchBar/searchBar";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>SDCS Weather Application</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <SearchBar />

        <div className="row">
          <div className="col-8">
            <CityInfo />
          </div>
          <div className="col-4">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
