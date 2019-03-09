import { connect } from 'react-redux';

import MovieTile from './MovieTile';
import { detailsShow } from '../../actions/detailsActions';

const mapDispatchToProps = {
  detailsShow,
};

const MovieTileContainer = connect(
  null,
  mapDispatchToProps
)(MovieTile);

export default MovieTileContainer;
