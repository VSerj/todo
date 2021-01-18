export const BottomClearBtn = ({ deleteAllTodo, deleteCompletedTodo }) => {
  return (
    <div className="clear-container">
      <button onClick={() => deleteAllTodo()}>Delete all</button>
      <button onClick={() => deleteCompletedTodo()}>Delete completed</button>
    </div>
  );
};
