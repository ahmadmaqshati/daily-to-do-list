import {
    Typography,
    Divider,
} from '@mui/material';

export default function Header() {
    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: "700", color: "#e22bba" }} >
                مهامي
            </Typography>

            <Divider style={{ marginTop: "25px" }} />
        </>
    )
}
