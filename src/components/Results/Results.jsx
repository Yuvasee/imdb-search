import React, { Component } from 'react';

import './Results.scss';

export default class Results extends Component {
  render() {
    const { results } = this.props;

    return (
      <div className="results">
        {results &&
          results.map((res, i) => (
            <p key={res.imdbID}>
              {res.Title}
            </p>
          ))
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
