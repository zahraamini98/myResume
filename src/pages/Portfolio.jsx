import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { grey  } from "@mui/material/colors";
import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Button,
    CardMedia,
    Divider,
    Chip,
    Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {TerminalRounded} from "@mui/icons-material";

import { WorkSamples } from "../constants/WorkSamples";

const Portfolio = ({ helmetTitle }) => {
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
                backgroundColor:
                            theme.palette.mode === "dark"
                                ? grey[800]
                                : "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <CardContent>
                <Slide
                    direction="down"
                    in={loading}
                    style={{
                        transitionDelay: loading ? "100ms" : "0ms",
                    }}
                >
                    <Divider
                        textAlign="center"
                        sx={{
                            "&::before, &::after": {
                                borderColor: "primary.main",
                            },
                            mb: 3,
                        }}
                    >
                        <Chip
                            icon={<TerminalRounded />}
                            color="primary"
                            label={
                                <Typography
                                    variant="body1"
                                    color="black"
                                    sx={{ textAlign: "center" }}
                                >
                                   نمونه کارها 
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider>
                </Slide>

                <Grid container sx={{ mx: 3 }}>
                    {WorkSamples.map((s, index) => (
                        <Grid
                            key={index}
                            xs={12}
                            sm={6}
                            md={6}
                            lg={4}
                            sx={{ px: 2, mb: 2 }}
                        >
                            <Slide
                                direction="up"
                                in={loading}
                                style={{
                                    transitionDelay: loading
                                        ? `${index + 3}99ms`
                                        : "0ms",
                                }}
                            >
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        backgroundColor: "steelblue",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            width="200"
                                            image={s.image}
                                            alt={s.title}
                                        />
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                textAlign="left"
                                                gutterBottom
                                            >
                                                {s.title}
                                            </Typography>
                                          {
                                            /*
                                              <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                textAlign="left"
                                                gutterBottom
                                                sx={{ direction: "ltr" }}
                                            >
                                               {s.info}
                                            </Typography>
                                            */
                                          }
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button
                                            href={s.link}
                                            size="small"
                                            color="primary"
                                            target="_blank"
                                        >
                                            اطلاعات بیشتر
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};
export default Portfolio;
