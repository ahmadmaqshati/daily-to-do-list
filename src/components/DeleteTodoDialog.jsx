import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteTodoDialog({ open, handleClose, handleTodoDelete, todoObj }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            dir="rtl"
        >
            <DialogTitle>حذف المهمة</DialogTitle>

            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    لا يمكنك التراجع عن الحذف في حال اختيار زر (حذف).
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>إلغاء</Button>

                <Button
                    type="button"
                    color="error"
                    onClick={() => {
                        handleTodoDelete(todoObj.id);
                        handleClose();
                    }}
                >
                    حذف
                </Button>
            </DialogActions>
        </Dialog>
    );
}
