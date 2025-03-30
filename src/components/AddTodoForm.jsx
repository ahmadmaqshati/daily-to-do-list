import {
    Button,
    TextField
} from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

export default function AddTodoForm({ newTodoTitle, setNewTodoTitle, setTodos }) {

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

    return (
        <>
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
        </>
    )
}