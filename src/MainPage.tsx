import { ActionIcon, Box, Button, Center, em, Grid, Group, 
    Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBriefcase2, IconCode, IconHome, IconMail, IconUser } from "@tabler/icons-react";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

const BUTTONS_INFO = [
    {
        name: "Home",
        icon: <IconHome/>,
        id: "home",
    },
    {
        name: "Projects",
        icon: <IconCode/>,
        id: "projects",
    },
    {
        name: "Resume",
        icon: <IconBriefcase2/>,
        id: "resume",
    },
    {
        name: "About Me",
        icon: <IconUser/>,
        id: "aboutme",
    },
    {
        name: "Contact",
        icon: <IconMail/>,
        id: "contact",
    },
]

export default function MainPage() {
    const theme = useMantineTheme();

    const isSmallMobile = useMediaQuery(`(max-width: ${em(350)})`);

    const buttons = BUTTONS_INFO.map((button, idx) => 
        <Button
            variant="light"
            leftSection={button.icon}
            size="xl"
            component="a"
            href={"#" + button.id}
            tabIndex={idx + 1}
        >
            {button.name}
        </Button>
    );
    const actionIcons = BUTTONS_INFO.map((button, idx) =>
        <ActionIcon
            variant="light"
            size={isSmallMobile ? "lg" : "xl"}
            component="a"
            href={"#" + button.id}
            tabIndex={idx + 1}
        >
            {button.icon}
        </ActionIcon>
    );

    const mobileNavbarHeight = "5rem";
    const mobileHeight = "calc(100vh - " + mobileNavbarHeight + ")";

    return (
        <Grid h="100vh" gutter="0" overflow="hidden">
            <Grid.Col 
                hiddenFrom="md"
                span={12}
                style={{
                    borderBottomStyle: "solid",
                    borderBottomColor: theme.colors.gray[2],
                    borderBottomWidth: "2px"
                }}
            >
                <Center
                    h={mobileNavbarHeight}
                    p="xl"
                >
                    <Group
                        gap="md"
                    >
                        {...actionIcons}
                    </Group>
                </Center>
            </Grid.Col>
            <Grid.Col
                visibleFrom="md"
                span={3}
                style={{
                    borderRightStyle: "solid",
                    borderRightColor: theme.colors.gray[2],
                    borderRightWidth: "2px"
                }}
            >
                <Center
                    h="100vh"
                    p="xl"
                >
                    <Stack
                        gap="xl"
                    >
                        {...buttons}
                    </Stack>
                </Center>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 9}}>
                <Box 
                    h={{base: "calc(100vh - 5rem)", md: "100vh"}}
                    style={{scrollBehavior: "smooth", overflowY: "scroll"}}
                >
                    <Stack gap={0}>
                        <Home id="home" mobileHeight={mobileHeight}/>
                        <Projects id="projects" mobileHeight={mobileHeight}/>
                        <Resume id="resume" mobileHeight={mobileHeight}/>
                        <AboutMe id="aboutme" mobileHeight={mobileHeight}/>
                        <Contact id="contact" mobileHeight={mobileHeight}/>
                    </Stack>
                </Box>
            </Grid.Col>
        </Grid>
    )
}

