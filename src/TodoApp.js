import { AddTodo } from './components/AddTodo';
import { BottomClearBtn } from './components/BottomClearBtn';
import { FilterBtnAll } from './components/FilterBtnAll/FilterBtnAll';
import { FilterBtnCompleted } from './components/FilterBtnCompleted/FilterBtnCompleted';
import { FilterBtnPending } from './components/FilterBtnPending/FilterBtnPending';
import { LoadFakeTodos } from './components/LoadFakeTOdos/LoadFakeTodos';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
  return (
    <>
      <header className="header">
        <h1>TODO</h1>
        <LoadFakeTodos />
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
