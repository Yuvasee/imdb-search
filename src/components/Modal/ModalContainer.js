import { connect } from 'react-redux';

import Modal from './Modal';

const mapStateToProps = (state) => ({
  showModal:                state.app.showModal,
  isDetailsPendingResponse: state.app.isDetailsPendingResponse,
  details:                  state.details[state.app.showModal]
});

const ModalContainer = connect(
  mapStateToProps
)(Modal);

export default ModalContainer;
