import { AddTodo } from './components/AddTodo';
import { BottomClearBtn } from './components/BottomClearBtn';
// import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
  return (
    <>
      <header>
        <h1>TODO</h1>
      </header>
      <main className="todo-body">
        {/* <Filter /> */}
        <AddTodo />
        <TodoList />
        <BottomClearBtn />
      </main>
    </>
  );
};
