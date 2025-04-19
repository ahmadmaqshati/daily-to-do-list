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


export default function TodoList() {

    const { todos, setTodos } = useContext(TodosContexts)

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
                    {todos.map(todo => <Todo key={todo.id} todoObj={todo} />)}

                    {/* Displays the AddTodoForm component*/}
                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <AddTodoForm newTodoTitle={newTodoTitle} setNewTodoTitle={setNewTodoTitle} setTodos={setTodos} />
                    </Stack>

                </CardContent>

            </Card>

        </Container >

    );
}