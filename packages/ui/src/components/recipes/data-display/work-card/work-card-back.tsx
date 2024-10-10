import { Box, Flex, List, ListIcon, ListItem, Stack } from '@chakra-ui/react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { PiDiamondFill } from 'react-icons/pi';
import type { ExperienceData } from '../../../../types';

const containerVariants: Variants = {
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.5 } },
    initial: { opacity: 0 }
};

const contentVariants: Variants = {
    animate: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, bounce: 0 }
    },
    exit: { y: -100, opacity: 0 },
    initial: { y: -100, opacity: 0 }
};

export type WorkCardBackProps = {
    data: Pick<ExperienceData, 'things'>;
    isOpen: boolean;
};

export const WorkCardBack = ({
    data: { things },
    isOpen
}: WorkCardBackProps): React.ReactElement => (
    <Stack
        animate="animate"
        as={motion.div}
        exit="exit"
        h="full"
        initial="initial"
        spacing={0}
        variants={containerVariants}
    >
        <Box as={motion.div} variants={contentVariants} zIndex={isOpen ? 1 : 0}>
            <Stack
                as={List}
                color="olive.700"
                fontFamily="editorial"
                h="full"
                fontSize="md"
                m={0}
                p={{ base: 4, lg: 6 }}
                w="full"
            >
                {things.map((thing) => (
                    <Flex
                        align="baseline"
                        as={ListItem}
                        gap={2}
                        justify="flex-start"
                        w="full"
                    >
                        <ListIcon as={PiDiamondFill} fontSize="xs" />
                        {thing}
                    </Flex>
                ))}
            </Stack>
        </Box>
    </Stack>
);
