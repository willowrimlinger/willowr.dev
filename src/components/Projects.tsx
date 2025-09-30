import { Button, Center, Stack, Title } from "@mantine/core";
import { IconAlignBoxLeftTop, IconBrandDiscord, IconChess, IconPlanet, IconWorldWww } from "@tabler/icons-react";
import { PageProps } from "../types/pageProps";

const PROJECTS_INFO =[
    {
        name: "willowr.dev",
        link: "https://github.com/willowrimlinger/willowr.dev",
        icon: <IconWorldWww/>,
    },
    {
        name: "Wim",
        link: "https://github.com/willowrimlinger/Wim",
        icon: <IconAlignBoxLeftTop/>,
    },
    {
        name: "Planetary Portfolio",
        link: "https://github.com/willowrimlinger/planetaryportfolio",
        icon: <IconPlanet/>,
    },
    {
        name: "Discord Clone",
        link: "https://github.com/willowrimlinger/discord-clone",
        icon: <IconBrandDiscord/>,
    },
    {
        name: "Chess Puzzle",
        link: "https://github.com/willowrimlinger/chess-puzzle",
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

