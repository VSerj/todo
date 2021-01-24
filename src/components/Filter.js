import { FilterBtns } from './FIlterBtns';

export const Filter = ({ filterIds }) => {

  return (
    <div className="filter-container">
      <FilterBtns
        // currentFilter={currentFilter}
        btns={filterIds}
        // numOfTodosForEveryFilter={numOfTodosForEveryFilter}
      />
    </div>
  );
};
