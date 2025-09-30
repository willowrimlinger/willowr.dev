import { Center, Stack, Title, useMantineTheme, Group, ActionIcon } from "@mantine/core";
import { PageProps } from "../types/pageProps";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import { useState } from "react";

export default function Contact(props: PageProps) {
    const [emailRecipient, setEmailRecipient] = useState("email_obfuscated");
    const [emailDomain, setEmailDomain] = useState("until_click.com");
    const theme = useMantineTheme();

    return (
        <Center
            h={{base: props.mobileHeight, md: "100vh"}} 
            bg={theme.colors.gray[2]}
            id={props.id}
        >
            <Stack 
                align="center"
                gap="lg"
            >
                <Title
                    size="2rem"
                >
                    Contact
                </Title>
                <Group>
                    <ActionIcon
                        component="a"
                        href={`mailto:${emailRecipient}@${emailDomain}`}
                        size="xl"
                        aria-label="Email"
                        title="Email"
                        onClick={() => {
                            setEmailRecipient("hey");
                            setEmailDomain("willowr.dev")
                        }}
                    >
                        <IconMail/>
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href="https://linkedin.com/in/willowrimlinger"
                        target="_blank"
                        size="xl"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <IconBrandLinkedin/>
                    </ActionIcon>
                </Group>
            </Stack>
        </Center>
    )
}
