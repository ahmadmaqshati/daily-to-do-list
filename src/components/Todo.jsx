import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Stack } from "@mui/material"

export default function Todo({ todoObj, updatedTodos }) {

    return (
        <Card className='card-body' sx={{ background: "#00000029", color: 'white', marginTop: 4 }}>
            <CardContent>
                <Stack className='t' direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap="10px">
                    {/* Task title and details container */}
                    <Stack>
                        <Typography className='title' variant="h6" style={{ textAlign: "right" }}>
                            {todoObj.title}
                        </Typography>
                        <Typography className='details' variant="h6" style={{ textAlign: "right" }}>
                            {todoObj.details}
                        </Typography>
                    </Stack>

                    {/* Button container */}
                    <Stack direction="row" spacing={2}>

                        {/* Check-Button */}
                        <IconButton
                            className='icon-button check'
                            onClick={() => {
                                updatedTodos(todoObj.id)
                            }}

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
    );
}

