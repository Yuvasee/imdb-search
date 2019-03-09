import React, { Component } from 'react';

import './TopBar.scss';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      phrase: this.props.lastPhrase || '',
      year: this.props.lastYear || ''
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const { phrase, year } = this.state;
    const { searchPerform, lastPhrase, lastYear } = this.props;

    if (phrase !== lastPhrase || year !== lastYear) {
      searchPerform(phrase, 1, year !== '' ? year : null);
    }
  }

  render() {
    const { phrase, year } = this.state;

    return (
      <div className="top-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="logo">
            IMDB Search
          </div>
          <div className="search-container">
            <input
              type="text"
              name="phrase"
              id="phrase"
              className="search"
              value={phrase}
              autoFocus
              required
              onChange={this.handleChange}
              placeholder="Godfather"
            />
            <label htmlFor="phrase">
              Movie name
            </label>
            <div className="tip">
              Use * for the mask
            </div>
          </div>
          <div className="search-container">
            <input
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              name="year"
              id="year"
              className="search year"
              value={year}
              onChange={this.handleChange}
              placeholder="1999"
            />
            <label htmlFor="year">
              Year
            </label>
            <div className="tip">
              Optional
            </div>
          </div>
          <button type="submit" className="go">
            Go!
          </button>
        </form>
      </div>
    );
  }
}
