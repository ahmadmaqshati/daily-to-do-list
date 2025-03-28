import {
    Container,
    Card,
    CardContent,
    Button,
    Typography,
    Divider,
    ToggleButton,
    ToggleButtonGroup,
    TextField,
    Stack
} from '@mui/material';
import { Add as AddIcon, Check as CheckIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import Todo from './Todo';

export default function TodoList() {


    const todos = [
        {
            id: 1,
            title: 'المهمة الاولى',
            details: 'تفاصيل المهمة الاولى',
            isCompleted: false
        },
        {
            id: 2,
            title: 'المهمة الثانية',
            details: 'تفاصيل المهمة الثانية',
            isCompleted: false
        },
    ]

    return (
        <Container maxWidth="md">
            < Card sx={{ background: "#7100ffb5", }}>
                <CardContent>
                    <Typography variant="h3" sx={{ fontWeight: "700", color: "#e22bba" }} >
                        مهامي
                    </Typography>

                    <Divider style={{ marginTop: "25px" }} />

                    {/* Filter Buttons */}
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

                    {/* render all todos */}
                    {todos.map(todo => <Todo key={todo.id} title={todo.title} details={todo.details} />)}

                    <Stack direction="row" sx={{ marginTop: "32px", justifyContent: "space-between" }}>
                        <TextField
                            style={{ width: "50%" }}
                            id="outlined-basic"
                            label="عنوان المهمة"
                            variant="outlined"
                        />


                        <Button className='add-btn'
                            style={{ fontSize: "3rem", background: '#bf2be2', borderRadius: "50%", width: "70px", height: "70px", marginLeft: '14%' }}
                            variant="contained"
                        >
                            <AddIcon />
                        </Button>
                        {/* === Add-Btn === */}

                    </Stack>
                </CardContent>

            </Card>

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