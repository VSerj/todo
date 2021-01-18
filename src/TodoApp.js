import { Header } from './componets/Header';
import AddTodoContainer from './container/AddTodoContainer';
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
        <div className="clear-container">
          <button>Delete all</button>
          <button>Delete completed</button>
        </div>
      </main>
    </>
  );
};
