import { AddTodo } from './components/AddTodo';
import { BottomClearBtns } from './components/BottomClearBtns';
import { FilterBtnAll } from './components/FilterBtnAll/FilterBtnAll';
import { FilterBtnCompleted } from './components/FilterBtnCompleted/FilterBtnCompleted';
import { FilterBtnPending } from './components/FilterBtnPending/FilterBtnPending';
import { LoadFakeTodos } from './components/LoadFakeTodos/LoadFakeTodos';
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
        <BottomClearBtns />
      </main>
    </>
  );
};
