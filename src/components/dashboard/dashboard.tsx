import {Group, Stack, Title} from '@mantine/core';
import {GoalCard} from "./goalCard.tsx";
import {StatsGroup} from "./statsGroup.tsx";
import {StatsSegments} from "./statsSegments.tsx";
import {DataService} from "../../services/data.ts";
import {useEffect, useState} from "react";
import {IUser} from "../../services/interfaces.ts";

export function Dashboard({dataService}: {dataService: DataService}) {

    const [userState, setUserState] = useState<IUser | null>(null);
    useEffect(()=> {
        // todo revise this
        dataService.user$.subscribe(data => {
            setUserState(data)
        })
    },[]);

    return <>
        <Title mb="xl" order={2}>{`Welcome, ${userState?.firstName ?? ''} ${userState?.lastName ?? ''}!`}</Title>
        <Stack>
        <Group align={"start"}>
            <StatsGroup></StatsGroup>
            <GoalCard></GoalCard>
        </Group>
        <StatsSegments></StatsSegments>
        </Stack>
    </>
}