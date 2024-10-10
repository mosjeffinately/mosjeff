import { Heading, Show, Stack } from '@chakra-ui/react';
import { WorkAccordion, WorkCardList } from '@mosjeff/dope-design-system';
import { experience } from '@mosjeff/utils/experience';

export const Work = () => {
    return (
        <Stack justify="center" px={8} spacing={6} w="full">
            <Heading
                as="h4"
                color="gray.500"
                fontFamily="monospace"
                fontSize="3xl"
                fontWeight={400}
            >
                {`work work work work work work. - rihanna`}
            </Heading>
            <Show above="md">
                <WorkAccordion data={experience} />
            </Show>
            <Show below="md">
                <WorkCardList data={experience} />
            </Show>
        </Stack>
    );
};
