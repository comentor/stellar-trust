import {Select} from "@mantine/core";

export function Badge() {
    return <>
        <Select
            label="Badge Style"
            placeholder="Pick value"
            data={[
                'Horizontal Blue',
                'Horizontal Green',
                'Horizontal White Blue',
                'Horizontal White Green',
                'Vertical Blue',
                'Vertical Green',
                'Vertical White Blue',
                'Vertical White Green',
            ]}
            defaultValue="Horizontal Blue"
            allowDeselect={false}
        />

        <Select
            label="Language"
            description="Same as your profile laguage by default"
            placeholder="Pick value"
            data={[
                'Auto',
                'Deutsch',
                'Italiano',
                'English'
            ]}
            defaultValue="Auto"
            allowDeselect={false}
            mt="md"
        />
    </>
}