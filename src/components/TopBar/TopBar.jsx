import React, { Component } from 'react';

import './TopBar.scss';
import { timingSafeEqual } from 'crypto';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      phrase: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { phrase } = this.state;
    const { searchPerform, lastPhrase } = this.props;

    if (phrase.length > 2 && phrase !== lastPhrase) {
      searchPerform(phrase);
    }
  }

  render() {
    const { phrase } = this.props;

    return (
      <div className="top-bar">
        <div className="logo">
          IMDB Search
        </div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="phrase"
              id="phrase"
              className="search"
              value={phrase}
              autoFocus
              onChange={this.handleChange}
              placeholder="Godfather"
            />
            <label htmlFor="phrase">Movie name</label>
            <button type="submit">
              Try!
            </button>
          </form>
        </div>
      </div>
    )
  }
}
