import { Button, Center, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { PageProps } from "../types/pageProps";

export default function Resume(props: PageProps) {
    const theme = useMantineTheme();

    return (
        <Center
            h={{base: props.mobileHeight, md: "100vh"}} 
            bg={theme.colors.gray[2]}
            id={props.id}
        >
            <Stack align="center">
                <Title
                    size="2rem"
                >
                    Resume
                </Title>
                <Button
                    component="a"
                    href="/resume.pdf"
                    target="_blank"
                    leftSection={<IconExternalLink/>}
                    size="lg"
                >
                    Resume
                </Button>
            </Stack>
        </Center>
    )
}
