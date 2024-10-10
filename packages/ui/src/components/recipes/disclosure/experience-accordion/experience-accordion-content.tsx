import type { StackProps } from '@chakra-ui/react';
import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { PiDiamondFill } from 'react-icons/pi';
import type { ExperienceData } from '../../../../types';

export type ExperienceAccordionContentProps = StackProps & {
    data: Pick<ExperienceData, 'things'>;
};

export function ExperienceAccordionContent({
    data,
    ...props
}: ExperienceAccordionContentProps): React.ReactElement {
    return (
        <Stack
            bgColor="brown.500"
            borderTop="0.25rem solid"
            borderTopColor="olive.700"
            color="olive.700"
            m={0}
            px={{ base: 2, md: 5, lg: 6 }}
            py={{ base: 4, lg: 6 }}
            w="full"
            {...props}
        >
            {data.things.map((datum) => (
                <HStack
                    align="center"
                    justify="flex-start"
                    spacing={3.5}
                    w="full"
                >
                    <Icon as={PiDiamondFill} fontSize="xs" />
                    <Text fontFamily="editorial" fontSize="2xl">
                        {datum}
                    </Text>
                </HStack>
            ))}
        </Stack>
    );
}
