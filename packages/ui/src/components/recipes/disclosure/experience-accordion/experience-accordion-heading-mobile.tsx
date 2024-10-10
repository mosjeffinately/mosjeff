import type { SimpleGridProps } from '@chakra-ui/react';
import { Flex, Icon, IconButton, SimpleGrid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ExperienceData } from '../../../../types';
import { BoldPlusIcon } from '../../../atoms/icons';
import type { ExperienceAccordionHeadingProps } from './experience-accordion-heading';

export type ExperienceAccordionHeadingMobileProps = SimpleGridProps & {
    data: Omit<ExperienceData, 'things'>;
    onToggle: () => void;
};

export const ExperienceAccordionHeadingMobile = ({
    data: { company, location, timeline, title },
    onToggle,
    ...props
}: ExperienceAccordionHeadingProps): React.ReactElement => {
    return (
        <SimpleGrid
            borderColor="olive.500"
            borderStyle="solid"
            borderWidth={3}
            color="olive.700"
            columns={1}
            templateColumns="auto"
            m={0}
            px={4}
            py={{ base: 2, sm: 4 }}
            spacing={4}
            w="full"
            {...props}
        >
            <Flex align="center" justify="flex-start" m={0} p={0}>
                <Text
                    fontFamily="extended"
                    fontSize="2.25rem"
                    fontWeight="black"
                    lineHeight="normal"
                >
                    {timeline}
                </Text>
                <IconButton
                    aria-label="accordion button"
                    as={motion.button}
                    h={10}
                    icon={<Icon as={BoldPlusIcon} fontSize="2rem" />}
                    m={0}
                    ml="auto"
                    onClick={onToggle}
                    p={0}
                    variant="unstyled"
                    w={10}
                />
            </Flex>
            <Flex align="center" justify="flex-start" m={0} p={0}>
                <Text fontFamily="serif" fontSize="3xl" m={0} p={0}>
                    {company}
                </Text>
            </Flex>
            <Flex align="center" justify="flex-start" m={0} p={0}>
                <Text fontFamily="body" fontSize="xl" m={0} p={0}>
                    {title}
                </Text>
            </Flex>
            <Flex align="center" justify="flex-start" m={0} p={0}>
                <Text fontFamily="body" fontSize="xl" m={0} p={0}>
                    {location}
                </Text>
            </Flex>
        </SimpleGrid>
    );
};
