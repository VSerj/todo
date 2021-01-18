import { connect } from 'react-redux';

import { Filter } from '../componets/Filter';
import { changeFilter } from '../store/filter/filterSlice';

export default connect(
  state => {
    const { todos, filter } = state;
    return { todos, filter };
  },
  { changeFilter }
)(Filter);
