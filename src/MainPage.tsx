import { AppShell, Box, Center, Container, Grid, List, Text, Title } from "@mantine/core";

export default function MainPage() {
    return (
        <Grid overflow="hidden" h="100vh">
            <Grid.Col span={{base: 12, sm: 5}} bg="red">
                <Center h={{base: "auto", sm: "100vh"}}>
                    <Title size="4rem">Hi.<br/>I'm Max.</Title>
                </Center>
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 7}}>
                <Center h={{base: "auto", sm: "100vh"}}>
                    <List size="xl">
                        <List.Item>Projects</List.Item>
                        <List.Item>Resume</List.Item>
                        <List.Item>About Me</List.Item>
                        <List.Item>Contact</List.Item>
                    </List>
                </Center>
            </Grid.Col>
        </Grid>
    )
}
