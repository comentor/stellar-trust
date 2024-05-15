import {Button, FileInput, Group, Modal, Select, Text, TextInput, Title} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

export function Insurance() {

    const [opened, { open, close }] = useDisclosure(false);
    return <>
        <Group align={"start"} justify={"space-between"}>
            <Title mb="xl" order={2}>{`Insurance`}</Title>
            <Button onClick={open} justify={"end"}>Insurance claim</Button>
        </Group>
        <Text>
            For all accommodations within EU buyer protection is automatically activated. <br/>
            Meaning that in case of a scamming by a host or a host agency case many cases are covered for the guest -
            read the details here<br/><br/>
            However, there is other options that you can choose for your EU accommodations<br/><br/>
            Renter Liability for 3.50 net per booking<br/>
            Housing Insurance for 6.00 net per month<br/><br/>
            You may book the options during checkout. Find the detailed terms here
        </Text>

        <Modal opened={opened} onClose={close} title={<Title display={"inline"} mb="xl" order={2}>{`Insurance Claim`}</Title>}>

            <Select
                label="Category"
                placeholder="Pick value"
                data={[
                    'Claim',
                    'Question',
                ]}
                defaultValue="Auto"
                allowDeselect={false}
                mb="lg"
            />
            <Select
                label="Accomodation"
                placeholder="Pick value"
                data={[

                ]}
                defaultValue="Auto"
                allowDeselect={false}
                mb="lg"
            />
            <TextInput
                label="Email Address"
                placeholder="Email"
                mb="lg"
            />
            <FileInput
                multiple={true}
                label="Upload your proofs"
                description="(Multiple uploads allowed)"
                placeholder="Upload"
                mb="lg"
            />
            <Button mb="lg">Save</Button>
        </Modal>
    </>
}