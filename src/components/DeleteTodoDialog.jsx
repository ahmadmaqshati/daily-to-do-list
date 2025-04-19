import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';


export default function DeleteTodoDialog({ open, handleClose, handleTodoDelete, todoObj }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            dir='rtl'

            slotProps={{
                paper: {

                    onSubmit: (event) => {
                        event.preventDefault();
                        handleClose()
                    },
                },
            }}
        >

            <DialogTitle>حذف المهمة</DialogTitle>

            <DialogContent>

                <DialogContentText id="alert-dialog-description">
                    لا يمكنك التراجع عن الحذف في حال اختيار زر(حذف)
                </DialogContentText>

            </DialogContent>

            <DialogActions>

                <Button onClick={handleClose}>إلغاء</Button>
                <Button type="submit" onClick={() => handleTodoDelete(todoObj.id)}>
                    حذف
                </Button>

            </DialogActions>

        </Dialog>
    )
}