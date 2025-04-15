import {
    Container,
    Card,
    CardContent,
    ToggleButton,
    ToggleButtonGroup,
    Stack
} from '@mui/material';

import Todo from './Todo';
import { useEffect, useState } from 'react';
import Header from './Header';
import AddTodoForm from './AddTodoForm';

export default function TodoList() {

    // States
    const [todos, setTodos] = useState([])
    const [newTodoTitle, setNewTodoTitle] = useState('')

    // Helps prevent overwriting stored todos with an empty array on initial load
    const [isTodosInitialized, setIsTodosInitialized] = useState(false);

    useEffect(() => {
        // This effect runs every time 'todos' changes
        // But it will only update localStorage if data has been loaded
        if (isTodosInitialized) {
            localStorage.setItem('todo', JSON.stringify(todos));
        }

    }, [todos]);

    useEffect(() => {
        // This effect runs once on component mount
        // Try to load todos from localStorage
        const savedTodos = JSON.parse(localStorage.getItem('todo')) || [];
        setTodos(savedTodos);
        setIsTodosInitialized(true);
    }, []);

    // Function to toggle the completion status of a specific todo item.
    function toggleTodoCompletion(todoId) {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                return ({ ...todo, isCompleted: !todo.isCompleted })
            }
            return todo
        })
        setTodos(updatedTodos)
    }


    // Function to handle updating the todo title
    const handleTodoEdit = (todoId, newTitle) => {
        setTodos(todos.map((todo) => {
            if (todo.id === todoId) {
                return ({ ...todo, title: newTitle })
            }
            return todo
        }))
    }


    //function to delete specific todo item
    const handleTodoDelete = (todoId) => {
        setTodos(todos.filter((todo) => {
            if (todo.id === todoId) {
                return false
            } else {
                return true
            }
        }))
    }


    return (
        <Container maxWidth="md">
            < Card sx={{ background: "#7100ffb5", maxHeight: '840px', overflowY: "auto" }}>
                <CardContent>

                    <Header />

                    {/* Filter Buttons */}
                    <ToggleButtonGroup
                        value=''
                        exclusive

                        aria-label="text alignment"
                        style={{ direction: "ltr", marginTop: "30px" }}
                    >



                        <ToggleButton onClick={() => {
                            setTodos([])
                            localStorage.setItem('todo', JSON.stringify([]));
                        }} style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            مسح الكل
                        </ToggleButton>

                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            غير منجز
                        </ToggleButton>
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            منجز
                        </ToggleButton>
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            الكل
                        </ToggleButton>

                    </ToggleButtonGroup>

                    {/* render all todos */}
                    {todos.map(todo => <Todo key={todo.id} todoObj={todo} updatedTodos={toggleTodoCompletion} handleTodoEdit={handleTodoEdit} handleTodoDelete={handleTodoDelete} />)}

                    {/* Displays the AddTodoForm component*/}
                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <AddTodoForm newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} setTodos={setTodos} />
                    </Stack>

                </CardContent>

            </Card>

        </Container >

    );
}