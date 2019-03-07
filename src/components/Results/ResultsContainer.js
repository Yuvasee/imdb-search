import { connect } from 'react-redux';

import Results from './Results';
import { searchPerform } from '../../actions/actions';

const mapStateToProps = (state) => ({
  results: state.search[state.app.lastPhrase],
  lastPhrase: state.app.lastPhrase,
  lastPage: state.app.lastPage,
  isPendingResponse: state.app.isPendingResponse,
  isLastPageLoaded: state.app.isLastPageLoaded
});

const mapDispatchToProps = {
  searchPerform,
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer;
