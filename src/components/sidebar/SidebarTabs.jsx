import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import MainContext from "../../context";

import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    SchoolRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";

const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } =
        useContext(MainContext);

    const theme = useTheme();

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };
    

    const tabs = [
        { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
        { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
        { label: "رزومه من", icon: <TextSnippetRounded />, ...tabProps(2) },
        { label: "نمونه کارها", icon: <SchoolRounded />, ...tabProps(3) },
        { label: "ارتباط با من", icon: <ConnectWithoutContactRounded />, ...tabProps(5),},
    ];

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            indicatorColor={
                theme.palette.mode === "dark" ? "secondary" : "primary"
            }
            textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
            onChange={handlePageNumber}
        >
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        // backgroundColor:
                        //     theme.palette.mode === "dark"
                        //         ? grey[800]
                        //         : grey[500],
                        color: "text.primary",
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        "&.MuiTab-root": {
                            minHeight: 50,
                        },
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
            ))}
        </Tabs>
    );
};

export default SidebarTabs;
