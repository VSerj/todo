import { Header } from './componets/Header';
import AddTodoContainer from './container/AddTodoContainer';
import BottomClearBntContainer from './container/BottomClearBntContainer';
import FilterContainer from './container/FilterContainer';
import TodoListContainer from './container/TodoListContainer';

export const TodoApp = () => {
  return (
    <>
      <Header title="TODO" />
      <main className="todo-body">
        <FilterContainer />
        <AddTodoContainer />
        <TodoListContainer />
        <BottomClearBntContainer />
      </main>
    </>
  );
};
