import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Stack } from "@mui/material"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Todo({ todoObj, updatedTodos, handleTodoEdit }) {
    const [editInput, setEditInput] = React.useState(todoObj.title);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setEditInput(todoObj.title);
    };

    const handleClose = () => {
        setOpen(false);
    };



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

                        {/* Action buttons */}
                        <Stack direction="row" spacing={2}>
                            {/* Check-Button */}
                            <IconButton
                                className='icon-button check'
                                onClick={() => { updatedTodos(todoObj.id); }}
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
                                onClick={handleClickOpen}
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
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
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
                    <Button type="submit" onClick={() => {
                        handleTodoEdit(todoObj.id, editInput)
                    }}>تعديل</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}