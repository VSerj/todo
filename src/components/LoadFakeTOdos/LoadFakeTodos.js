import { loadFakeTodos } from '../../store/thunks/thunk';
import { Button } from '../Button';
import s from './loadFakeTodos.module.css';
import { useDispatch } from 'react-redux';

export const LoadFakeTodos = () => {
  const dispatch = useDispatch();

  return (
    <Button className={s.btn} onAction={() => loadFakeTodos(dispatch)}>
      Load fake todos
    </Button>
  );
};
