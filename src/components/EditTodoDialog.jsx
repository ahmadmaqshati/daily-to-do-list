import { useContext } from 'react';
import { ModalContext } from '../contexts/modalContext';
import { TodosContexts } from '../contexts/todosContexts';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

export default function EditTodoDialog() {
    const {
        isEditDialogOpen,
        editInput,
        setEditInput,
        editTodoId,
        handleCloseEditDialog
    } = useContext(ModalContext);

    const { todos, setTodos } = useContext(TodosContexts);

    const handleTodoEdit = (todoId, newTitle) => {
        setTodos(todos.map(todo =>
            todo.id === todoId ? { ...todo, title: newTitle } : todo
        ));
    };

    return (
        <Dialog
            open={isEditDialogOpen}
            onClose={handleCloseEditDialog}
            dir='rtl'
            slotProps={{
                paper: {
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();

                        handleCloseEditDialog();
                    },
                },
            }}
        >
            <DialogTitle>تعديل المهمة</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="العنوان"
                    fullWidth
                    variant="standard"
                    style={{ paddingTop: "10px" }}
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseEditDialog}>إلغاء</Button>
                <Button type="submit" onClick={() => {
                    handleTodoEdit(editTodoId, editInput);
                }}>تعديل</Button>
            </DialogActions>
        </Dialog>
    );
}
