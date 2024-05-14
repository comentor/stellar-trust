import { Text } from '@mantine/core';
import classes from './statsGroup.module.css';


const data = [
    {
        title: 'Accommodations',
        stats: '6',
        description: '24% more than average',
    },
    {
        title: 'Bookings',
        stats: '14',
        description: '20% more than last month',
    },
    {
        title: 'Reviews',
        stats: '24',
        description: '92% positive',
    },
];

export function StatsGroup() {
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));
    return <div className={classes.root}>{stats}</div>;
}