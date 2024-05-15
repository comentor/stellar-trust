import {Group, rem, Tabs, Title} from "@mantine/core";
import {IconBadge, IconBellDollar, IconBuilding, IconMessage, IconPlugConnected, IconPlus} from "@tabler/icons-react";

export function Accomodations() {

    const iconStyle = { width: rem(12), height: rem(12) };

    return  <>
        <Group align={"start"} justify={"space-between"}>
            <Title mb="xl" order={2}>{`Accommodations`}</Title>
            <Group>
                <IconPlugConnected />
                <IconPlus />
            </Group>
        </Group>
        <Tabs defaultValue="gallery">
            <Tabs.List>
                <Tabs.Tab defaultChecked value="accomodations" leftSection={<IconBuilding style={iconStyle} />}>
                    Accommodations
                </Tabs.Tab>
                <Tabs.Tab value="reviews" leftSection={<IconMessage style={iconStyle} />}>
                    Reviews
                </Tabs.Tab>
                <Tabs.Tab value="bookings" leftSection={<IconBellDollar style={iconStyle} />}>
                    Bookings
                </Tabs.Tab>
                <Tabs.Tab value="badges" leftSection={<IconBadge style={iconStyle} />}>
                    Badges
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="accomodations">
                No accommodations yet
            </Tabs.Panel>

            <Tabs.Panel value="reviews">
                No reviews yet
            </Tabs.Panel>

            <Tabs.Panel value="bookings">
                No bookings yet
            </Tabs.Panel>

            <Tabs.Panel value="badges">
                No badges yet
            </Tabs.Panel>
        </Tabs>
    </>
}