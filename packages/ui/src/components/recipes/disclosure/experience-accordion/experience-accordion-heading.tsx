import type { SimpleGridProps } from '@chakra-ui/react';
import {
    Flex,
    Icon,
    IconButton,
    Show,
    SimpleGrid,
    Text
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { ExperienceData } from '../../../../types';
import { BoldPlusIcon } from '../../../atoms/icons/bold-plus-icon';

export type ExperienceAccordionHeadingProps = SimpleGridProps & {
    data: Omit<ExperienceData, 'id' | 'things'>;
    isOpen: boolean;
    onToggle: () => void;
};

export const ExperienceAccordionHeading = ({
    data: { company, location, timeline, title },
    isOpen,
    onToggle,
    ...props
}: ExperienceAccordionHeadingProps): React.ReactElement => (
    <SimpleGrid
        color="olive.700"
        columns={{ base: 1, md: 5 }}
        templateColumns={{
            base: 'auto',
            md: '15rem 1.5fr 2fr 1fr 1.5rem',
            lg: '18rem 1.5fr 2fr 1fr 2rem',
            xl: '21.75rem 1.5fr 2fr 1fr 2.5rem'
        }}
        m={0}
        pb={{ base: 4, sm: 4, lg: 6 }}
        pt={{ base: 2, sm: 4, lg: 6 }}
        px={{ base: 4, md: 6, lg: 10 }}
        spacing={{ base: 4, md: 6 }}
        w="full"
        {...props}
    >
        <Flex align="center" justify="flex-start" m={0} p={0}>
            <Text
                fontFamily="extended"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="black"
            >
                {timeline}
            </Text>
            <Show below="md">
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
            </Show>
        </Flex>
        <Flex align="center" justify="flex-start" m={0} p={0}>
            <Text fontFamily="serif" fontSize="3xl" m={0} p={0}>
                {company}
            </Text>
        </Flex>
        <Flex align="center" justify="flex-start" m={0} p={0}>
            <Text fontFamily="editorial" fontSize="xl" m={0} p={0}>
                {title}
            </Text>
        </Flex>
        <Show above="md">
            <Flex align="center" justify="flex-start" m={0} p={0}>
                <Text fontFamily="editorial" fontSize="xl" m={0} p={0}>
                    {location}
                </Text>
            </Flex>
            <Flex align="center" justify="flex-start" m={0} p={0} w={10}>
                <IconButton
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    aria-label="accordion button"
                    as={motion.button}
                    h={10}
                    icon={<Icon as={BoldPlusIcon} fontSize="2.5rem" />}
                    m={0}
                    onClick={onToggle}
                    p={0}
                    variant="unstyled"
                    w={10}
                />
            </Flex>
        </Show>
    </SimpleGrid>
);
