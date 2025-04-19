import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodosContexts } from './contexts/todosContexts';

function App() {

  // States
  const [todos, setTodos] = useState([])


  return (

    <div className="App" style={{ margin: "50px 0", direction: 'rtl' }}>

      <TodosContexts.Provider value={{ todos, setTodos }}>

        <TodoList />

      </ TodosContexts.Provider>

    </div>

  );
}

export default App;