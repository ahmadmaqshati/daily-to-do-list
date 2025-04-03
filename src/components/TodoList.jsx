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

    // useEffect for saving todos to localStorage whenever the 'todos' state changes
    useEffect(() => {
        // Without the condition below, this useEffect would run immediately after the initial render,
        // and before the second useEffect has finished retrieving the data from localStorage.
        // This would cause an overwrite, replacing the stored todos with an empty array.
        if (todos.length > 0) {
            localStorage.setItem('todo', JSON.stringify(todos));
        }
    }, [todos]);

    // useEffect for Retrieving stored todos from localStorage when the component mounts
    useEffect(() => {
        // If no todos are found, initialize with an empty array to avoid errors
        const savedTodos = JSON.parse(localStorage.getItem('todo')) || [];
        setTodos(savedTodos);
    }, [])


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
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
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
                    {todos.map(todo => <Todo key={todo.id} todoObj={todo} updatedTodos={toggleTodoCompletion} handleTodoEdit={handleTodoEdit} />)}

                    {/* Displays the AddTodoForm component*/}
                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <AddTodoForm newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} setTodos={setTodos} />
                    </Stack>

                </CardContent>

            </Card>

        </Container >

    );
}