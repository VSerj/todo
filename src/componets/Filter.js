import { FilterBtn } from './FilterBtn';

export const Filter = ({ todos, filter, changeFilter }) => {
  const filterNames = ['all', 'completed', 'pending'];
  const numbersOfAllTodo = todos.length;
  const numbersOfCopmpletedTodo = todos.filter(todo => {
    return todo.completed === true;
  }).length;
  const numbersOfActiveTodo = numbersOfAllTodo - numbersOfCopmpletedTodo;

  const createFilterBtnsProps = filterNames => {
    return filterNames.map(filterName => {
      const text = `${filterName[0].toUpperCase()}${filterName.slice(1)}`;
      return {
        id: filterName,
        className: `filter-btn filter-btn--${filterName} ${
          filterName === filter ? 'isActive' : ''
        }`,
        text,
      };
    });
  };

  return (
    <div className="filter-container">
      {createFilterBtnsProps(filterNames).map(({ id, className, text }) => {
        const numberOfTodo =
          id === filterNames[0]
            ? `${numbersOfAllTodo}`
            : id === filterNames[1]
            ? numbersOfCopmpletedTodo
            : numbersOfActiveTodo;
        return (
          <FilterBtn
            key={id}
            className={className}
            text={text}
            numberOfTodo={numberOfTodo}
            onClick={() => changeFilter(id)}
          />
        );
      })}
    </div>
  );
};
