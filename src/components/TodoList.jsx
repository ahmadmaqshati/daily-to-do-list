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
import { TodosContexts } from '../contexts/todosContexts';
import { useContext } from 'react';
import FilterToggleGroup from './FilterToggleGroup';


export default function TodoList() {

    const { todos, setTodos } = useContext(TodosContexts)

    const [newTodoTitle, setNewTodoTitle] = useState('')
    const [displayTodoType, setDisplayTodoType] = useState(null)

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

    // Filter completed todos
    const completedTodos = todos.filter((todo) => todo.isCompleted)
    // Filter non-completed todos
    const nonCompletedTodos = todos.filter((todo) => !todo.isCompleted)

    // Decide which list of todos to render based on displayTodoType
    let todosToBeRendered = null
    if (displayTodoType === 'completed') {
        todosToBeRendered = completedTodos
    } else if (displayTodoType === 'non-completed') {
        todosToBeRendered = nonCompletedTodos
    } else {
        todosToBeRendered = todos
    }

    return (
        <Container maxWidth="md">
            < Card sx={{ background: "#7100ffb5", maxHeight: '840px', overflowY: "auto" }}>
                <CardContent>

                    <Header />

                    {/* Filter Buttons */}
                    <FilterToggleGroup setTodos={setTodos} displayTodoType={displayTodoType} setDisplayTodoType={setDisplayTodoType} />

                    {/* Render the list of todos */}
                    {todosToBeRendered.map(todo => <Todo key={todo.id} todoObj={todo} />)}

                    {/* Displays the AddTodoForm component*/}
                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <AddTodoForm newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} setTodos={setTodos} />
                    </Stack>

                </CardContent>

            </Card>

        </Container >

    );
}