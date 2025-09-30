import { Center, Title } from "@mantine/core";
import { PageProps } from "../types/pageProps";

export default function Home(props: PageProps) {
    return (
        <Center 
            h={{base: props.mobileHeight, md: "100vh"}} 
            p="xl"
            bg="blue"
            id={props.id}
        >
            <Title size="5rem" c="white">Hi.<br/>I'm Willow.</Title>
        </Center>
    )
}
