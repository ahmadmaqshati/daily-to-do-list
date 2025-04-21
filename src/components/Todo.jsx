import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Stack } from "@mui/material"
import EditTodoDialog from './EditTodoDialog';
import DeleteTodoDialog from './DeleteTodoDialog';
import { TodosContexts } from '../contexts/todosContexts';
import { ModalContext } from '../contexts/modalContext';
import { useContext } from 'react';
export default function Todo({ todoObj }) {

    const { todos, setTodos } = useContext(TodosContexts)

    const {
        handleOpenEditDialog,
        handleOpenDeleteDialog,
    } = useContext(ModalContext)


    // Toggle the completion status of a specific todo item.
    const toggleTodoCompletion = (todoId) => {
        setTodos(todos.map((todo) =>
            todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo

        ))
    }

    return (
        <>
            <Card className='card-body' sx={{ background: "#00000029", color: 'white', marginTop: 4 }}>
                <CardContent>
                    <Stack className='t' direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="10px">
                        {/* Task title and details */}
                        <Stack>
                            <Typography className='title' variant="h6" style={{ textAlign: "right" }}>
                                {todoObj.title}
                            </Typography>
                            <Typography className='details' variant="h6" style={{ textAlign: "right" }}>
                                {todoObj.details}
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            {/* Check-Button */}
                            <IconButton
                                className='icon-button check'
                                onClick={() => toggleTodoCompletion(todoObj.id)}

                                style={{
                                    background: todoObj.isCompleted ? "green" : '#FFFFFF',
                                    color: '#8bc34a',
                                    border: "3px solid #8bc34a",
                                    marginLeft: "16px"
                                }}
                            >
                                <CheckIcon />
                            </IconButton>

                            {/* Edit-Button */}
                            <IconButton
                                className='icon-button edit'
                                style={{
                                    background: "white",
                                    border: "3px solid #A6C2E7",
                                    color: "#3F5971"
                                }}
                                onClick={() => handleOpenEditDialog(todoObj.id, todoObj.title)}
                            >
                                <EditIcon />
                            </IconButton>

                            {/* Delete-Button */}
                            <IconButton
                                className='icon-button delete'
                                style={{
                                    background: "#FFFDFF",
                                    border: "3px solid rgb(244 0 0 / 42%)",
                                    color: 'rgb(244 0 0 / 78%)'
                                }}
                                onClick={() => handleOpenDeleteDialog(todoObj.id)}

                            >
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>

            <EditTodoDialog />

            <DeleteTodoDialog />
        </>

    );
}