import {Card, Group, Progress, Stack, Text, Title} from '@mantine/core';
import {GoalCard} from "./goalCard.tsx";
import {StatsGroup} from "./statsGroup.tsx";
import {StatsSegments} from "./statsSegments.tsx";

export function Dashboard() {

    return <>
        <Title order={2}>Welcome</Title>
        <Stack>
        <Group align={"start"}>
            <StatsGroup></StatsGroup>
            <GoalCard></GoalCard>
        </Group>
        <StatsSegments></StatsSegments>
        </Stack>
    </>
}