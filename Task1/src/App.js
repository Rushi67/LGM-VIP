import TodoList from './Components/TodoList';
import './App.css';

function App() {
  return (
    <>
      <h1 className='heading'>My To Do List</h1>
      <div className="todo-list-container">
        <TodoList />
      </div>
    </>
  );
}

export default App;
