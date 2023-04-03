import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import {
  Divider,
  Chip,
  Typography,
  Card,
  CardContent,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { AccountCircle } from "@mui/icons-material";

const Contact = ({ helmetTitle }) => {
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
          theme.palette.mode === "dark" ? grey[800] : "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Divider
          textAlign="center"
          sx={{
            mt: 2,
            "&::before, &::after": {
              borderColor: "warning.main",
            },
          }}
        >
          <Chip
            icon={<AccountCircle />}
            color="warning"
            label={
              <Typography
                variant="body1"
                color="black"
                sx={{ textAlign: "center" }}
              >
                ارتباط با من
              </Typography>
            }
            sx={{ p: 3 }}
          />
        </Divider>

        <Grid container sx={{ mt: 5 }}>
          <Grid
            xs={12}
            sx={{
              textAlign: "left",
            }}
          >
            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? "200ms" : "0ms",
              }}
            >
              <Typography sx={{ m: 3 }}>شماره تماس من : 09338427480</Typography>
            </Slide>
            <Slide
              direction="up"
              in={loading}
              style={{
                transitionDelay: loading ? "400ms" : "0ms",
              }}
            >
              <Typography sx={{ m: 3 }}>
                zahraamini.77522@gmail.com : ایمیل من
              </Typography>
            </Slide>
            <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? "600ms" : "0ms",
            }}
          >
            <Typography sx={{ m: 3 }}>
            واتساپ و تلگرام : 09338427480
            </Typography>
          </Slide>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
