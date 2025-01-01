import { Center, Stack, Title, Text } from "@mantine/core";
import { PageProps } from "../types/pageProps";

export default function AboutMe(props: PageProps) {
    return (
        <Center
            h={{base: props.mobileHeight, md: "100vh"}} 
            id={props.id}
            p="xl"
        >
            <Stack
                maw="600px"
                align="center"
            >
                <Title
                    size="2rem"
                >
                    About Me
                </Title>
                <Text size="lg">
                    I am a 3rd year undergraduate computer science student at Rochester Institute of Technology.
                    I love to program, but in my free time I enjoy playing the drums, rock climbing,
                    making music, and hiking.
                </Text>
            </Stack>
        </Center>
    )
}
