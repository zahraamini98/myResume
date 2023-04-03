import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Typography, Box, IconButton } from "@mui/material";
import { RandomReveal } from "react-random-reveal";
import { GitHub, Telegram , WhatsApp, LinkedIn } from "@mui/icons-material";

import ThemeActionButton from "../ThemeActionButton";
import avatar from "../../assets/pro.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    const theme = useTheme();

    return (
        <>
            <ThemeActionButton />
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 200,
                    width: 200,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "block",
                        xs: "block",
                    },
                }}
            >
                ZA
            </Avatar>
            <Typography variant="h6" color="#bd93f9" sx={{ color:
                theme.palette.mode === "dark"
                    ? "#bd93f9"
                    : "#7b1fa2",}} >
                <RandomReveal
                    isPlaying
                    duration={4}
                    characterSet={alphabetPersian}
                    characters="زهرا امینی"
                    onComplete={() => setStart(true)}
                />
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characters="front-end Developer"
                    />
                </Typography>
            )}

            <Box component="div" sx={{ m: "0 auto", textAlign: "center" }}>
                <IconButton aria-label="Github">
                    <a
                        href="https://github.com/zahraamini98"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="LinkedIn">
                    <a
                        href="https://www.linkedin.com/in/zahra-amini-283301231"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                    <a href="https://t.me/zahraamini77" target="_blank" rel="noopener noreferrer">
                        <Telegram sx={{ color: "gray" }} />
                    </a>
                </IconButton>
                <IconButton aria-label="WhatsApp">
                    <a href="https://wa.me/989338427480" target="_blank" rel="noopener noreferrer">
                        <WhatsApp sx={{ color: "gray" }} />
                    </a>
                </IconButton>
            </Box>
        </>
    );
};

export default SidebarHeader;
