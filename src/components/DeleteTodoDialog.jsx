import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ModalContext } from '../contexts/modalContext';
import { TodosContexts } from '../contexts/todosContexts';
import { useContext } from 'react';

export default function DeleteTodoDialog() {

    const { todos, setTodos } = useContext(TodosContexts)

    const { isDeleteDialogOpen,
        handleCloseDeleteDialog,
        deleteTodoId
    } = useContext(ModalContext)


    // Delete specific todo item
    const handleTodoDelete = (todoId) => {
        setTodos(todos.filter((todo) =>
            todo.id != todoId
        ))
    }


    return (
        <Dialog
            open={isDeleteDialogOpen}
            onClose={handleCloseDeleteDialog}
            dir="rtl"
        >
            <DialogTitle>حذف المهمة</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    لا يمكنك التراجع عن الحذف في حال اختيار زر (حذف).
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseDeleteDialog}>إلغاء</Button>

                <Button
                    type="button"
                    color="error"
                    onClick={() => {
                        handleTodoDelete(deleteTodoId);
                        handleCloseDeleteDialog();
                    }}
                >
                    حذف
                </Button>
            </DialogActions>
        </Dialog>
    );
}
