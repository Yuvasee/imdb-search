import { connect } from 'react-redux';

import Results from './Results';
import { searchPerform } from '../../actions/actions';

const mapStateToProps = (state) => ({
  results: state.search[state.app.lastPhrase],
});

const ResultsContainer = connect(
  mapStateToProps
)(Results);

export default ResultsContainer;
