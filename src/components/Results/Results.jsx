import React, { Component } from 'react';

import './Results.scss';
import { randomRgb } from '../../utils/utils';

export default class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <div className="results">
        {results &&
          <div className="tile-container">

            {results.map((res, i) => (
              <div
                key={res.imdbID}
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

        {!results &&
          <div className="empty">
            Try to search for something
          </div>
        }
      </div>
    )
  }
}
/*
{
  "Title": "God Bless America",
  "Year": "2011",
  "imdbID": "tt1912398",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
}, */
