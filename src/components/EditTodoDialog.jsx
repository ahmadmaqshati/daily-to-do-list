import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditTodoDialog({ open, handleTodoEdit, handleClose, editInput, setEditInput, todoObj }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            dir='rtl'
            slotProps={{
                paper: {
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        handleClose()
                    },
                },
            }}
        >

            <DialogTitle>تعديل المهمة</DialogTitle>

            <DialogContent>
                {/* Input field for editing the title */}
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

                <Button onClick={handleClose}>إلغاء</Button>
                <Button type="submit" onClick={() => handleTodoEdit(todoObj.id, editInput)}>
                    تعديل
                </Button>

            </DialogActions>

        </Dialog>
    )
}