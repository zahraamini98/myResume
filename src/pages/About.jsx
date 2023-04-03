import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Slide
} from "@mui/material";
import { grey  } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, SelfImprovementRounded ,ImportContactsRounded, DownloadDoneRounded } from "@mui/icons-material";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import { devSkills } from "../constants/skills";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import { devSkill } from "../constants/details";

const About = ({ helmetTitle }) => {
    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);

    const theme = useTheme();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 90);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 50);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, gitSkill } =
        devSkills;

    return (
        <Card
            sx={{
                height: "100vh",
                    backgroundColor:
                            theme.palette.mode === "dark"
                                ? grey[800]
                                : "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} >
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "primary.main",
                                },
                            }}
                        >
                            <Chip
                                color="primary"
                                icon={<CodeRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                   برنامه نویس
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <Grid container>

                            <Grid xs={12}>
                                <DevInfo>   نام و نام خانوادگی : زهرا امینی  </DevInfo>
                                <DevInfo>متولد : 22/5/77</DevInfo>
                                <DevInfo>شهر : اصفهان</DevInfo>
                                <DevInfo>zahraamini.775222@gmail.com :ایمیل</DevInfo>
                                <DevInfo>شماره موبایل : 09338427480</DevInfo>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "secondary.main",
                                },
                            }}
                        >
                            <Chip
                                color="secondary"
                                icon={<SelfImprovementRounded />}
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        مهارت های من
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>
                        <Skill
                            name={htmlSkill.name}
                            icon={htmlSkill.icon}
                            color={htmlSkill.color}
                            value={html}
                        />
                        <Skill
                            name={cssSkill.name}
                            icon={cssSkill.icon}
                            color={cssSkill.color}
                            value={css}
                        />
                        <Skill
                            name={jsSkill.name}
                            icon={jsSkill.icon}
                            color={jsSkill.color}
                            value={javascript}
                        />
                        <Skill
                            name={reactSkill.name}
                            icon={reactSkill.icon}
                            color={reactSkill.color}
                            value={reactJs}
                        />
                        <Skill
                            name={gitSkill.name}
                            icon={gitSkill.icon}
                            color={gitSkill.color}
                            value={git}
                        />
                    </Grid>
                </Grid>

                <Grid container>
                <Grid sx={{ width: 1, mt: 5 }} xs={12}>
                <Divider
                    textAlign="center"
                    sx={{
                        "&::before, &::after": {
                            borderColor: "secondary.main",
                        },
                    }}
                >
                    <Chip
                        color="secondary"
                        icon={<ImportContactsRounded />}
                        label={
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{ textAlign: "center" }}
                            >
                                سایر دانش ها
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
            </Grid>
                </Grid>

                <Grid   container justifyContent="flex-start">
                <Grid xs={12} md={6}>
                <Timeline position="right" sx={{ direction: "ltr" }}>
                {devSkill.map((item, index) => (
                    index > 3 && 
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
                                    <DownloadDoneRounded/>
                                </TimelineDot>
                                {index != 3 ? (
                                    <TimelineConnector  />
                                ) : null}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant="body1"
                                    sx={{mt : 1}}
                                >
                                    {item.name}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>
                ))}
            </Timeline>
                </Grid>
                <Grid xs={12} md={6}>
                <Timeline position="right" sx={{ direction: "ltr" }}>
                {devSkill.map((item, index) => (
                    index < 4 && 
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading
                                ? `${index + 3}99ms`
                                : "0ms",
                        }}
                    >
                        <TimelineItem position="right" sx={{ direction: "ltr" }} key={index}>
                            <TimelineSeparator>
                                <TimelineDot
                                    color="info"
                                    variant="outlined"
                                >
                                    <DownloadDoneRounded/>
                                </TimelineDot>
                                    <TimelineConnector  />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography
                                    variant="body1"
                                    sx={{mt : 1}}
                                >
                                    {item.name}
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

export default About;
