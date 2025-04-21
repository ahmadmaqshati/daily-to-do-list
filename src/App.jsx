import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodosContexts } from './contexts/todosContexts';
import { ModalContext } from './contexts/modalContext';

function App() {

  // States
  const [todos, setTodos] = useState([])
  const [editInput, setEditInput] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [deleteTodoId, setDeleteTodoId] = useState(null);

  // State to control visibility of the edit dialog
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  // State to control visibility of the delete dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);


  const handleOpenEditDialog = (todoId, todoTitle) => {
    setEditTodoId(todoId)
    setEditInput(todoTitle);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
  };


  const handleOpenDeleteDialog = (todoId) => {
    setDeleteTodoId(todoId)
    setIsDeleteDialogOpen(true);
  };


  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };


  return (

    <div className="App" style={{ margin: "50px 0", direction: 'rtl' }}>

      <TodosContexts.Provider value={{ todos, setTodos }}>

        <ModalContext.Provider value={{
          isEditDialogOpen,
          isDeleteDialogOpen,
          editInput,
          setEditInput,
          editTodoId,
          setEditTodoId,
          deleteTodoId,
          setDeleteTodoId,
          handleOpenEditDialog,
          handleCloseEditDialog,
          handleOpenDeleteDialog,
          handleCloseDeleteDialog
        }}>
          <TodoList />
        </ModalContext.Provider>

      </ TodosContexts.Provider>

    </div>

  );
}

export default App;