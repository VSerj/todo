import { Header } from './componets/Header';
import { TodoList } from './componets/TodoList';
import { AddTodo } from './componets/AddTodo';

export const TodoApp = () => {
  return (
    <>
      <Header title="TODO" />
      <main className="todo-body">
        <div className="filter-container">
          <button className="filter-btn filter-btn--all">All: 5</button>
          <button className="filter-btn filter-btn--completed">
            Completed: 1
          </button>
          <button className="filter-btn filter-btn--pending">Pending: 3</button>
        </div>
        <AddTodo />
        <TodoList />
        <div className="clear-container">
          <button>Delete all</button>
          <button>Delete completed</button>
        </div>
      </main>
    </>
  );
};
