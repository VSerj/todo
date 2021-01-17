import { Filter } from './componets/Filter';
import { Header } from './componets/Header';
import AddTodoContainer from './container/AddTodoContainer';
import TodoListContainer from './container/TodoListContainer';

export const TodoApp = () => {
  return (
    <>
      <Header title="TODO" />
      <main className="todo-body">
        <Filter />
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
