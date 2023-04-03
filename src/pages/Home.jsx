import { useEffect, useRef, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { move} from "../constants/particles";
import bg02 from "../assets/bg4.jpg";

const Home = ({ helmetTitle }) => {

    const nameEl = useRef(null);
    const infoEl = useRef(null);


    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" زهرا امینی"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
        });

        const TypedInfo = new Typed(infoEl.current, {
            strings: ["Front-end Developer", "React developer"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false,
            loop : true
        });


        return () => {
            typedName.destroy();
            TypedInfo.destroy()
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={move}
            />
            <Box component="div" sx={{ display: "flex" , marginTop : "400px"}}>
                <Typography
                    ref={nameEl}
                    variant="h3"
                    color="#ce93d8"
                ></Typography>
            </Box>
            <Box component="div" sx={{ display: "flex"}}>
            <Typography
                ref={infoEl}
                variant="h4"
                color="#f5f5f5"
            ></Typography>
        </Box>
        </Box>
    );
};

export default Home;
