import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';
import MovieTile from '../MovieTile/MovieTile';

import './Results.scss';

export default class Results extends Component {
  loadMore() {
    const { lastPhrase, lastLoadedPage, lastYear, searchPerform } = this.props;

    searchPerform(lastPhrase, lastLoadedPage + 1, lastYear);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const {isPendingResponse, isLastPageLoaded } = this.props;

    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      if (!isPendingResponse && !isLastPageLoaded) {
        this.loadMore();
      }
    }
  }

  render() {
    const { results, isPendingResponse, isLastPageLoaded } = this.props;

    return (
      <div className="results">
        {results &&
          <div className="tile-container">
            {results.map((movie, i) => (
              <MovieTile movie={movie} key={movie.imdbID + i} />
            ))}

            {isPendingResponse &&
              <div className="movie-tile">
                <Spinner />
              </div>
            }
          </div>
        }

        {isLastPageLoaded &&
          <div className="finish">
            No more results on your query.
          </div>
        }

        {(!Array.isArray(results) && !isPendingResponse) &&
          <div className="empty">
            Try to search for something
          </div>
        }

        {(!Array.isArray(results) && isPendingResponse) &&
          <div className="results-spinner">
            <Spinner />
          </div>
        }
      </div>
    )
  }
}
