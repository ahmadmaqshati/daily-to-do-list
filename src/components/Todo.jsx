import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import { Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

export default function Todo({ title, details }) {
    return (
        <Card className='card-body' sx={{ background: "#00000029", color: 'white', marginTop: 4 }}>

            <CardContent>

                <Grid container>

                    {/* Task title and details container */}
                    <Grid xs={8}>

                        <Typography variant="h6" style={{ textAlign: "right" }}>
                            {/* المهمة الاولى */}
                            {title}
                        </Typography>
                        <Typography variant="h6" style={{ textAlign: "right" }}>
                            {/* تفاصيل المهمة الاولى */}
                            {details}
                        </Typography>

                    </Grid>



                    {/* Button container */}
                    <Grid className='buttons' xs={4} display='flex' justifyContent="space-around" alignItems="center">

                        {/* Check-Button */}
                        <IconButton
                            className='icon-button check'
                            style={{
                                background: '#FFFFFF',
                                color: '#8bc34a',
                                border: "3px solid #8bc34a"
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
                            className='icon-button delete delete'
                            style={{
                                background: "#FFFDFF",
                                border: "3px solid rgb(244 0 0 / 42%)",
                                color: 'rgb(244 0 0 / 78%)'
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
