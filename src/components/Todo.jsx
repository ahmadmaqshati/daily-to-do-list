import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
/* import Grid from '@mui/material/Unstable_Grid2'; */
import Grid from "@mui/material/Grid";

import Box from '@mui/material/Box';
import { useState } from 'react';
/* icons */
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
/*Dialog Imports*/
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function Todo() {
    return (
        <>
            {/*  
            =======================================================================
                                           Todo-Compoanat
            =======================================================================
            */}

            <Card className='card-body' sx={{ background: "#00000029", color: 'white', marginTop: 4 }}>

                <CardContent>
                    <Grid container spacing={2}>
                        {/* عمود النصوص */}
                        <Grid item xs={8}>
                            <Typography variant="h6" style={{ textAlign: "right" }}>
                                المهمة الاولى
                            </Typography>
                            <Typography variant="h6" style={{ textAlign: "right" }}>
                                تفاصيل المهمة الاولى
                            </Typography>
                        </Grid>

                        {/* عمود الأزرار */}
                        <Grid item xs={4} className="buttons" display="flex" justifyContent="space-around" alignItems="center">
                            {/* زر التأكيد */}
                            <IconButton
                                className="icon-button check"
                                style={{
                                    background: "#FFFFFF",
                                    color: "#8bc34a",
                                    border: "3px solid #8bc34a",
                                }}
                            >
                                <CheckIcon />
                            </IconButton>

                            {/* زر التعديل */}
                            <IconButton
                                className="icon-button edit"
                                style={{
                                    background: "white",
                                    border: "3px solid #A6C2E7",
                                    color: "#3F5971",
                                }}
                            >
                                <EditIcon />
                            </IconButton>

                            {/* زر الحذف */}
                            <IconButton
                                className="icon-button delete"
                                style={{
                                    background: "#FFFDFF",
                                    border: "3px solid rgb(244 0 0 / 42%)",
                                    color: "rgb(244 0 0 / 78%)",
                                }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>



































                </CardContent>

            </Card >


        </>


    )
}





