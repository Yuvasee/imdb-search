import React, { Component } from 'react';

import TopBar from '../TopBar/TopBar';
import Results from '../Results/Results';

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
