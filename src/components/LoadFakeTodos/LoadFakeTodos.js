import { useDispatch, useSelector } from 'react-redux';

import { loadFakeTodos } from '../../store/thunks/thunk';
import { Button } from '../Button';
import s from './loadFakeTodos.module.css';

export const LoadFakeTodos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.fetching);
  
  return (
    <Button
      className={s.btn}
      onAction={isLoading ? null : () => loadFakeTodos(dispatch)}
    >
      {isLoading ? 'Loading... fake todos' : 'Load fake todos'}
    </Button>
  );
};
