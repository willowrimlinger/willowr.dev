import { Button, Center, Stack, Title } from "@mantine/core";
import { IconAlignBoxLeftTop, IconBrandDiscord, IconChess, IconPlanet, IconWorldWww } from "@tabler/icons-react";
import { PageProps } from "../types/pageProps";

const PROJECTS_INFO =[
    {
        name: "maxrimlinger.com",
        link: "https://github.com/maxrimlinger/maxrimlinger.com",
        icon: <IconWorldWww/>,
    },
    {
        name: "Mim",
        link: "https://github.com/maxrimlinger/mim",
        icon: <IconAlignBoxLeftTop/>,
    },
    {
        name: "Planetary Portfolio",
        link: "https://github.com/maxrimlinger/planetaryportfolio",
        icon: <IconPlanet/>,
    },
    {
        name: "Discord Clone",
        link: "https://github.com/maxrimlinger/discord-clone",
        icon: <IconBrandDiscord/>,
    },
    {
        name: "Chess Puzzle",
        link: "https://github.com/maxrimlinger/chess-puzzle",
        icon: <IconChess/>,
    },
] 

export default function Projects(props: PageProps) {
    const projects = PROJECTS_INFO.map(project =>
        <Button
            variant="subtle"
            component="a"
            size="xl"
            href={project.link}
            target="_blank"
            leftSection={project.icon}
        >
            {project.name}
        </Button>
    );

    return (
        <Center
            h={{base: props.mobileHeight, md: "100vh"}} 
            id={props.id}
        >
            <Stack align="center">
                <Title
                    size="2rem"
                >
                    Projects
                </Title>
                {...projects}
            </Stack>
        </Center>
    )
}

