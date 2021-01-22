export const FilterBtn = ({ className, text, numberOfTodo, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
      {': '}
      {numberOfTodo}
    </button>
  );
};
