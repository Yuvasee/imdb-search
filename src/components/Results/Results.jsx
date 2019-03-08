import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { randomRgb } from '../../utils/utils';
import Spinner from '../Spinner/Spinner';

import './Results.scss';

export default class Results extends Component {
  loadMore() {
    //TODO: check for last page loaded!
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
    const { results, isPendingResponse } = this.props;

    return (
      <div className="results">
        {results &&
          <div className="tile-container">
            {results.map((res, i) => (
              <div
                key={res.imdbID + i}
                className="movie-tile"
                style={{
                  backgroundImage: res.Poster === 'N/A' ? 'none' : `url('${res.Poster}')`,
                  backgroundColor: res.Poster === 'N/A' ? randomRgb() : 'transparent'
                }}
              >
                <div className="movie-year">
                  {res.Year}
                </div>

                <div className="movie-title">
                  {res.Title}
                </div>

                {res.Poster === 'N/A' &&
                  <div className="no-poster">
                    {res.Title}
                  </div>
                }
              </div>
            ))}
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
