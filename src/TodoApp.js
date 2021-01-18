import AddTodoContainer from './container/AddTodoContainer';
import BottomClearBntContainer from './container/BottomClearBntContainer';
import FilterContainer from './container/FilterContainer';
import TodoListContainer from './container/TodoListContainer';

export const TodoApp = () => {
  return (
    <>
      <header>
        <h1>TODO</h1>
      </header>
      <main className="todo-body">
        <FilterContainer />
        <AddTodoContainer />
        <TodoListContainer />
        <BottomClearBntContainer />
      </main>
    </>
  );
};
