import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from '../Spinner/Spinner';

import './Modal.scss';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.node = undefined;
    this.app = undefined;
    this.closeModal = this.closeModal.bind(this);
    this.onEsc = this.onEsc.bind(this);
  }

  componentWillMount() {
    this.node = document.createElement('div'); // create modal container
    this.node.setAttribute('id', 'modal');
    this.node.setAttribute('class', 'modal-container');
    this.node.addEventListener('click', () => this.closeModal());
    document.body.appendChild(this.node);

    this.app = document.getElementById('root'); // add sexy backdrop blur
    this.app.style.transition = `filter 200ms ease-out`;
    //this.app.style.filter = `blur(4px)`;

    document.addEventListener('keydown', this.onEsc); // catch ESC key
    document.body.classList.add('modal-disable-scroll'); // disable scroll
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-disable-scroll');
    document.removeEventListener('keydown', this.onEsc);
    //this.app.style.filter = `blur(0px)`;
    document.body.removeChild(this.node);
  }

  onEsc(e) {
    if (e.keyCode === 27) this.closeModal(); // 27 - ESC key
  }

  closeModal() {
    this.props.close();
  }

  render() {
    const { details, isDetailsPendingResponse } = this.props;

    const keysArray = [
      "Year",
      "Rated",
      "Released",
      "Runtime",
      "Genre",
      "Director",
      "Writer",
      "Actors",
      "Plot",
      "Language",
      "Country",
      "Awards",
      //"Ratings",
      "Metascore",
      "imdbRating",
      "imdbVotes",
      "imdbID",
      "DVD",
      "BoxOffice",
      "Production",
      "Website",
    ];

    const content = (
      <div className="modal-window">
        <div className="modal-content">
          {!isDetailsPendingResponse &&
            <div>
              {details["Poster"] !== 'N/A'
                ? <img src={details["Poster"]} className="poster" alt={details["Title"]} />
                : <p>No poster available :-(</p>
              }

              <h2>{details["Title"]}</h2>

              <table>
                <tbody>
                  {keysArray.map((key, i) => (
                    <tr key={key + i}>
                      <td>{key}</td>
                      <td width="100%">{details[key]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }

          {isDetailsPendingResponse &&
            <Spinner />
          }
        </div>
      </div>
    );

    return ReactDOM.createPortal(content, this.node);
  }
}
