import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Divider from '@mui/material/Divider';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from "@mui/material/Grid";
/* import Grid from '@mui/material/Unstable_Grid2'; */
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
/* todo */
import Todo from './Todo';
/* unique */



export default function TodoList() {

    return (
        <Container maxWidth="md">

            {/*===============================main card==============================*/}
            < Card sx={{ background: "#7100ffb5", }}>
                <CardContent>
                    <Typography variant="h3" sx={{ fontWeight: "700", color: "#e22bba" }} >
                        مهامي
                    </Typography>

                    <Divider style={{ marginTop: "25px" }} />

                    {/*
                    ==============
                    Filter Buttons
                    ===============
                    */}

                    <ToggleButtonGroup
                        value=''
                        exclusive

                        aria-label="text alignment"
                        style={{ direction: "ltr", marginTop: "30px" }}
                    >
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            مسح الكل
                        </ToggleButton>
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            غير منجز
                        </ToggleButton>
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            منجز
                        </ToggleButton>
                        <ToggleButton style={{ color: "#ffffffc9", fontWeight: "900" }}>
                            الكل
                        </ToggleButton>



                    </ToggleButtonGroup>

                    {/* All Todos */}
                    <Todo />
                    <Todo />


                    {/*===All Todos===*/}

                    <Grid container spacing={2} sx={{ marginTop: "20px", alignItems: "center" }}>
                        {/* حقل إدخال عنوان المهمة */}
                        <Grid item xs={8}>
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="عنوان المهمة"
                                variant="outlined"
                            />
                        </Grid>

                        {/* زر الإضافة */}
                        <Grid item xs={4} display="flex" justifyContent="center">
                            <Button
                                className="add-btn"
                                sx={{
                                    fontSize: "3rem",
                                    background: "#bf2be2",
                                    borderRadius: "50%",
                                    width: "70px",
                                    height: "70px",
                                    minWidth: "unset",
                                }}
                                variant="contained"
                            >
                                <AddIcon />
                            </Button>
                        </Grid>
                    </Grid>



                </CardContent>

            </Card>
            {/*===============================main card============================*/}

        </Container >

    );
}
/* 
 const todosList = [
        {
            id: uuidv4(),
            title: 'المهمة الاولى',
            details: 'ييييييييييييييي',
            isComlerted: false
        },
        {
            id: uuidv4(),
            title: 'المهمة الثانية',
            details: 'قققققققققق',
            isComlerted: false
        },
        {
            id: uuidv4(),
            title: 'المهمة الثالثة',
            details: 'هنننننننننننن',
            isComlerted: false
        }
    ]
    const todos = todosList.map((t) => {
        return <Todo key={t.id} title={t.title} details={t.details} />
    })

*/