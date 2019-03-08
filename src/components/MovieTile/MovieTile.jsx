import React, { Component } from 'react';

import { randomRgb } from '../../utils/utils';
import Modal from '../Modal/Modal';

import './MovieTile.scss';

export default class MovieTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };
  }

  toggleModal(movie) {
    this.setState((state) => ({
      modal: !state.modal,
      modalData: movie
    }))
  }

  render() {
    const { movie } = this.props;
    const { modal } = this.state;

    return (
      <div
        className="movie-tile"
        style={{
          backgroundImage: movie.Poster === 'N/A' ? 'none' : `url('${movie.Poster}')`,
          backgroundColor: movie.Poster === 'N/A' ? randomRgb() : 'transparent'
        }}
        onClick={() => this.toggleModal(movie)}
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

        {modal &&
          <Modal close={() => this.toggleModal()}>
            {movie.Title}
          </Modal>
        }
      </div>
    );
  }
}
