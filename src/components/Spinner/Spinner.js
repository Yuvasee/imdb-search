import React from 'react';

import './Spinner.scss';

class Spinner extends React.Component {
  render() {
    const size = this.props.size || '40px';
    const text = this.props.text || '';
    const color = this.props.color || '#111';

    return (
      <div className="spinner-wrapper">
        <div className="spinner" style={{width: size, height: size}}>
          <div className="a1" style={{
            backgroundColor: color
          }}></div>
          <div className="a2" style={{
            backgroundColor: color
          }}></div>
        </div>
        <div className="spinner-text">{text}</div>
      </div>
    );
  }
}

export default Spinner;
