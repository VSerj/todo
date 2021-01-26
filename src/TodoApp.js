import { AddTodo } from './components/AddTodo';
import { BottomClearBtn } from './components/BottomClearBtn';
import { FilterBtnAll } from './components/FilterBtnAll';
import { FilterBtnCompleted } from './components/FilterBtnCompleted';
import { FilterBtnPending } from './components/FilterBtnPending';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
  return (
    <>
      <header>
        <h1>TODO</h1>
      </header>
      <main className="todo-body">
        <div className="filter-container">
          <FilterBtnAll />
          <FilterBtnCompleted />
          <FilterBtnPending />
        </div>
        <AddTodo />
        <TodoList />
        <BottomClearBtn />
      </main>
    </>
  );
};
