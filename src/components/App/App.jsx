import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopBar from '../TopBar/TopBarContainer';
import Results from '../Results/ResultsContainer';

export default class App extends Component {
  render() {
    return (
      <div className="imdb-search-app">
        <TopBar />
        <Results />

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    )
  }
}
