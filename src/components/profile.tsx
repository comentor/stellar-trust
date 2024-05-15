import {Button, Fieldset, Group, Stack, TextInput} from "@mantine/core";
import {IUser} from "../services/interfaces.ts";
import {useEffect, useState} from "react";
import {DataService} from "../services/data.ts";

export function Profile({dataService}: {dataService: DataService}) {

    const [userState, setUserState] = useState<IUser | null>(null);
    useEffect(()=> {
        // todo revise this
        dataService.user$.subscribe(data => {
            setUserState(data)
        })
    },[]);
    return userState ? <Stack>
        <Fieldset legend="Personal information" variant="filled">
            <Group>
                <Stack justify="flex-start" mt="md">
                    <TextInput
                        label="First Name"
                        placeholder="First"
                        defaultValue={userState?.firstName ?? ''}
                        onChange={(ev) => setUserState({...userState, firstName: ev.target.value} as IUser)}
                    />
                    <TextInput
                        label="Email Address"
                        placeholder="Email"
                        defaultValue={userState.email} mt="md"
                        onChange={(ev) => setUserState({...userState, email: ev.target.value} as IUser)}
                    />
                </Stack>
                <Stack justify="flex-end" mt="md">
                    <TextInput
                        label="Last name"
                        placeholder="Last"
                        defaultValue={userState?.lastName}
                        onChange={(ev) => setUserState({...userState, lastName: ev.target.value} as IUser)}
                    />
                    <TextInput
                        label="Phone number"
                        placeholder="Phone"
                        defaultValue={userState?.phoneNumber}
                        onChange={(ev) => setUserState({...userState, phoneNumber: ev.target.value} as IUser)}
                        mt="md"
                    />
                </Stack>
            </Group>
        </Fieldset>
        <Button onClick={() => dataService.saveUser(userState)}>Save</Button>
    </Stack> : null
}