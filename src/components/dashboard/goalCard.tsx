import {Card, Progress, Text} from "@mantine/core";

export function GoalCard() {
    return <Card withBorder radius="md" padding="xl" bg="var(--mantine-color-body)">
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Monthly goal
        </Text>
        <Text fz="lg" fw={500}>
            14 / 50
        </Text>
        <Progress value={28} mt="md" size="lg" radius="xl" />
    </Card>
}