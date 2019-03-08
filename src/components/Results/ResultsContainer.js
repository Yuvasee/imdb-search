import { connect } from 'react-redux';

import Results from './Results';
import { searchPerform } from '../../actions/actions';

const mapStateToProps = (state) => {
  const { lastPhrase, lastLoadedPage, lastYear, isPendingResponse, isLastPageLoaded } = state.app;

  return {
    results:            state.search[`${lastPhrase}@${lastYear}`],
    lastPhrase:         lastPhrase,
    lastLoadedPage:           lastLoadedPage,
    lastYear:           lastYear,
    isPendingResponse:  isPendingResponse,
    isLastPageLoaded:   isLastPageLoaded
  };
};

const mapDispatchToProps = {
  searchPerform,
};

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default ResultsContainer;
