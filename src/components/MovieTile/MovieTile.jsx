import React, { Component } from 'react';

import { randomRgb } from '../../utils/utils';

import './MovieTile.scss';

export default class MovieTile extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div
        className="movie-tile"
        style={{
          backgroundImage: movie.Poster === 'N/A' ? 'none' : `url('${movie.Poster}')`,
          backgroundColor: movie.Poster === 'N/A' ? randomRgb() : 'transparent'
        }}
        onClick={() => this.props.detailsShow(movie.imdbID)}
      >

        <div className="movie-year">
          {movie.Year}
        </div>

        <div className="movie-title">
          {movie.Title}
        </div>

        {movie.Poster === 'N/A' &&
          <div className="no-poster">
            {movie.Title}
          </div>
        }
      </div>
    );
  }
}
