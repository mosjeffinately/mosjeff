import { CardBody, Flex, Stack, Text } from '@chakra-ui/react';
import type { ExperienceData } from '../../../../types';

export type WorkCardFrontProps = {
    data: Pick<ExperienceData, 'company' | 'location' | 'title' | 'timeline'>;
};

export const WorkCardFront = ({
    data: { company, location, title, timeline }
}: WorkCardFrontProps): React.ReactElement => {
    return (
        <Stack
            align="flex-start"
            as={CardBody}
            justify="flex-start"
            m={0}
            p={{ base: 4, lg: 6 }}
        >
            <Text
                fontFamily="extended"
                fontSize={{
                    base: '4xl',
                    md: '4xl',
                    lg: '6xl'
                }}
                fontWeight="black"
                m={0}
                p={0}
                textTransform="lowercase"
                w="full"
            >
                {timeline}
            </Text>
            <Flex
                align="center"
                as={Text}
                fontFamily="serif"
                fontSize={{ base: 'xl' }}
                fontWeight="medium"
                justify="flex-start"
                m={0}
                noOfLines={1}
                p={0}
            >
                {company}
            </Flex>
            <Flex
                align="center"
                as={Text}
                fontFamily="editorial"
                fontSize="lg"
                fontWeight="light"
                justify="flex-start"
                m={0}
                p={0}
            >
                {title}
            </Flex>
            <Flex
                align="center"
                as={Text}
                fontFamily="editorial"
                fontSize="lg"
                fontWeight="light"
                justify="flex-start"
                m={0}
                p={0}
            >
                {location}
            </Flex>
        </Stack>
    );
};
