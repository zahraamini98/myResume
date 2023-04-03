import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { grey  } from "@mui/material/colors";
import {
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import {
    SettingsEthernetRounded,
    HomeRepairServiceRounded,
    SchoolRounded,
} from "@mui/icons-material";

import { devEdu , devHistroy} from "../constants/details";

const Resume = ({ helmetTitle }) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                overflowY: "scroll",
                backgroundColor:
                            theme.palette.mode === "dark"
                                ? grey[800]
                                : "whitesmoke",
            }}
        >
            <CardContent>
                <Slide
                    direction="down"
                    in={loading}
                    style={{
                        transitionDelay: loading ? "200ms" : "0ms",
                    }}
                >
                    <Divider
                        textAlign="center"
                        sx={{
                            mt: 2,
                            "&::before, &::after": {
                                borderColor: "error.main",
                            },
                        }}
                    >
                        <Chip
                            icon={<SettingsEthernetRounded />}
                            color="error"
                            label={
                                <Typography
                                    variant="body1"
                                    color="black"
                                    sx={{ textAlign: "center" }}
                                >
                                    رزومه من
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
                </Slide>
                <Grid container sx={{ mt: 4}}>
                    <Grid xs={12} md={6} >
                        <Slide
                            direction="down"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "200ms" : "0ms",
                            }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "warning.main",
                                    },
                                }}
                            >
                                <Chip
                                    icon={<HomeRepairServiceRounded />}
                                    color="warning"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            sx={{ textAlign: "center" }}
                                        >
                                            تجربیات
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                        </Slide>
                        <Timeline position="right" sx={{ direction: "ltr"  }}>
                            {devHistroy.map((item, index) => (
                                <Slide
                                    direction="up"
                                    in={loading}
                                    style={{
                                        transitionDelay: loading
                                            ? `${index + 3}99ms`
                                            : "0ms",
                                    }}
                                >
                                    <TimelineItem key={index}>
                                        <TimelineSeparator>
                                            <TimelineDot
                                                color="warning"
                                                variant="outlined"
                                            >
                                                <HomeRepairServiceRounded color="warning" />
                                            </TimelineDot>
                                                <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography
                                                variant="caption"
                                                color="gray"
                                            >
                                                {item.year}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                            >
                                                {item.major}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                            >
                                                {item.place}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                            ))}
                        </Timeline>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Slide
                            direction="down"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "200ms" : "0ms",
                            }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "info.main",
                                    },
                                }}
                            >
                                <Chip
                                    icon={<SchoolRounded />}
                                    color="info"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            sx={{ textAlign: "center" }}
                                        >
                                            تحصیلات
                                        </Typography>
                                    }
                                    sx={{ p: 3 }}
                                />
                            </Divider>
                        </Slide>

                        <Timeline position="right" sx={{ direction: "ltr" }}>
                            {devEdu.map((item, index) => (
                                <Slide
                                    direction="up"
                                    in={loading}
                                    style={{
                                        transitionDelay: loading
                                            ? `${index + 3}99ms`
                                            : "0ms",
                                    }}
                                >
                                    <TimelineItem key={index}>
                                        <TimelineSeparator>
                                            <TimelineDot
                                                color="info"
                                                variant="outlined"
                                            >
                                                <SchoolRounded color="info" />
                                            </TimelineDot>
                                            {index != 3 ? (
                                                <TimelineConnector />
                                            ) : null}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography
                                                variant="caption"
                                                color="gray"
                                            >
                                                {item.year}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                            >
                                                {item.cert}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                            >
                                                {item.major}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                            >
                                                {item.place}
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                </Slide>
                            ))}
                        </Timeline>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Resume;
