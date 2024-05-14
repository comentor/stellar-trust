import {Fieldset, Group, Stack, TextInput} from "@mantine/core";

export function Profile() {
    return (
        <Fieldset legend="Personal information" variant="filled">
            <Group>
            <Stack justify="flex-start" mt="md">
                <TextInput label="First Name" placeholder="First" />
                <TextInput label="Email Address" placeholder="Email" mt="md" />
            </Stack>
            <Stack justify="flex-end" mt="md">
                <TextInput label="Last name" placeholder="Last" />
                <TextInput label="Phone number" placeholder="Phone" mt="md" />
            </Stack>
            </Group>
        </Fieldset>
    )
}