import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const DevInfo = ({ children }) => {
    return (
        <Typography
            variant="body2"
            color=""
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

export default DevInfo;
