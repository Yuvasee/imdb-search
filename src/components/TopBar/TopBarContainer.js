import { connect } from 'react-redux';

import TopBar from './TopBar';
import { searchPerform } from '../../actions/actions';

const mapStateToProps = (state) => ({
  lastPhrase: state.app.lastPhrase,
});

const mapDispatchToProps = {
  searchPerform,
};

const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);

export default TopBarContainer;
