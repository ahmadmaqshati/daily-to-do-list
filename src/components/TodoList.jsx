import {
    Container,
    Card,
    CardContent,
    Button,
    Typography,
    Divider,
    ToggleButton,
    ToggleButtonGroup,
    TextField,
    Stack
} from '@mui/material';

import { Add as AddIcon, Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Todo from './Todo';
import { useEffect, useState } from 'react';

export default function TodoList() {

    // States
    const [todos, setTodos] = useState([])
    const [newTodoTitle, setNewTodoTitle] = useState('')

    // Function to handling the process of adding a new todo item
    const addNewTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            details: '',
            isCompleted: false
        }

        setTodos(prevTodos => [...prevTodos, newTodo]);
        setNewTodoTitle('')
    }


    // useEffect for Saving todos to localStorage whenever they change
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


    return (
        <Container maxWidth="md">
            < Card sx={{ background: "#7100ffb5", maxHeight: '840px', overflowY: "auto" }}>
                <CardContent>
                    <Typography variant="h3" sx={{ fontWeight: "700", color: "#e22bba" }} >
                        مهامي
                    </Typography>

                    <Divider style={{ marginTop: "25px" }} />

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
                    {todos.map(todo => <Todo key={todo.id} title={todo.title} details={todo.details} />)}

                    {/* New todo input and button container */}
                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <TextField
                            style={{ width: "50%" }}
                            id="outlined-basic"
                            label="عنوان المهمة"
                            variant="outlined"
                            value={newTodoTitle}
                            onChange={(e) => {
                                setNewTodoTitle(e.target.value)
                            }}
                        />

                        <Button className='add-btn'
                            style={{ fontSize: "3rem", background: '#bf2be2', borderRadius: "50%", width: "70px", height: "70px", marginLeft: '14%' }}
                            variant="contained"
                            disabled={!newTodoTitle}
                            onClick={addNewTodo}
                        >
                            <AddIcon />
                        </Button>

                    </Stack>
                </CardContent>

            </Card>

        </Container >

    );
}
