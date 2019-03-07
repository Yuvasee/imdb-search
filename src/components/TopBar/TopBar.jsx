import React, { Component } from 'react';

import './TopBar.scss';

export default class TopBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      search: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { search } = this.props;

    return (
      <div className="top-bar">
        <div className="logo">
          IMDB Search
        </div>
        <div className="search-container">
          <form>
            <input
              type="text"
              name="search"
              id="search"
              className="search"
              value={search}
              autoFocus
              onChange={this.handleChange}
              placeholder="Godfather"
            />
            <label htmlFor="search">Movie name</label>
            <button type="submit">
              Try!
            </button>
          </form>
        </div>
      </div>
    )
  }
}
