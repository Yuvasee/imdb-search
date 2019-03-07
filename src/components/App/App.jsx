import React, { Component } from 'react';

import TopBar from '../TopBar/TopBarContainer';
import Results from '../Results/ResultsContainer';

export default class App extends Component {
  render() {
    return (
      <div className="imdb-search-app">
        <TopBar />
        <Results />
      </div>
    )
  }
}
