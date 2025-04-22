import {
    ToggleButton,
    ToggleButtonGroup,
} from '@mui/material';

export default function FilterToggleGroup({ setTodos, displayTodoType, setDisplayTodoType }) {

    return (
        <ToggleButtonGroup
            value={displayTodoType}
            onClick={(e) => {
                setDisplayTodoType(e.target.value)
            }}
            exclusive

            aria-label="text alignment"
            style={{ direction: "ltr", marginTop: "30px" }}
        >


            {/* Button for clear all todos  */}
            <ToggleButton onClick={() => {
                setTodos([])
            }} style={{ color: "#ffffffc9", fontWeight: "900" }}>
                مسح الكل
            </ToggleButton>

            <ToggleButton value='non-completed' style={{ color: "#ffffffc9", fontWeight: "900" }}>
                غير منجز
            </ToggleButton>
            <ToggleButton value='completed' style={{ color: "#ffffffc9", fontWeight: "900" }}>
                منجز
            </ToggleButton>
            <ToggleButton value='all' style={{ color: "#ffffffc9", fontWeight: "900" }}>
                الكل
            </ToggleButton>

        </ToggleButtonGroup>
    )
}
