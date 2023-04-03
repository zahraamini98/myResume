import { useEffect, useState } from "react";

import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";

import { Home, About, Resume, Portfolio, Contact } from "../pages";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp]);

    const handlePageNumber = (event, newPage) => {
        setPageNumber(newPage);
    };

    const handleThemeChange = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <MainContext.Provider
            value={{
                pageNumber,
                handlePageNumber,
                handleThemeChange,
                drawerOpen,
                setDrawerOpen,
            }}
        >
            <MainLayout mode={mode}>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <DrawerActionButton />
                <PagesContainer>
                    <SwipeableViews
                        index={pageNumber}
                        onChangeIndex={handlePageNumber}
                    >
                        <Page pageNumber={pageNumber} index={0}>
                            <Home  />
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <About  />
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Resume />
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <Portfolio />
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Contact />
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
