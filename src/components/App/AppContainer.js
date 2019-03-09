import { connect } from 'react-redux';

import App from './App';
import { detailsShowModal } from '../../actions/detailsActions';

const mapStateToProps = (state) => ({
  showModal: state.app.showModal
});

const mapDispatchToProps = {
  detailsShowModal,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
