import { Progress, Box, Text, Group, Paper, SimpleGrid, rem } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import classes from './statsSegments.module.css';

const data = [
    { label: 'Direct', count: '$2,040', part: 59, color: '#47d6ab' },
    { label: 'Airbnb', count: '$1,211', part: 35, color: '#03141a' },
    { label: 'Booking', count: '$311', part: 6, color: '#4fcdf7' },
];

export function StatsSegments() {
    const segments = data.map((segment) => (
        <Progress.Section value={segment.part} color={segment.color} key={segment.color}>
            {segment.part > 10 && <Progress.Label>{segment.part}%</Progress.Label>}
        </Progress.Section>
    ));

    const descriptions = data.map((stat) => (
        <Box key={stat.label} style={{ borderBottomColor: stat.color }} className={classes.stat}>
            <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
                {stat.label}
            </Text>

            <Group justify="space-between" align="flex-end" gap={0}>
                <Text fw={700}>{stat.count}</Text>
                <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
                    {stat.part}%
                </Text>
            </Group>
        </Box>
    ));

    return (
        <Paper withBorder p="md" radius="md">
            <Group justify="space-between">
                <Group align="flex-end" gap="xs">
                    <Text fz="xl" fw={700}>
                        $3,562
                    </Text>
                    <Text c="teal" className={classes.diff} fz="sm" fw={700}>
                        <span>18%</span>
                        <IconArrowUpRight size="1rem" style={{ marginBottom: rem(4) }} stroke={1.5} />
                    </Text>
                </Group>
                <IconDeviceAnalytics size="1.4rem" className={classes.icon} stroke={1.5} />
            </Group>

            <Text c="dimmed" fz="sm">
                Revenue compared to previous month
            </Text>

            <Progress.Root size={34} classNames={{ label: classes.progressLabel }} mt={40}>
                {segments}
            </Progress.Root>
            <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
                {descriptions}
            </SimpleGrid>
        </Paper>
    );
}