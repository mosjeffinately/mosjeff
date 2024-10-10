import {
    Card,
    CardFooter,
    Flex,
    Icon,
    IconButton,
    Stack,
    useDisclosure
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PiPlusCircleBold } from 'react-icons/pi';
import type { ExperienceData } from '../../../../types';
import { WorkCardBack } from './work-card-back';
import { WorkCardFront } from './work-card-front';

export type WorkCardProps = {
    data: ExperienceData;
};

export const WorkCard = ({
    data: { company, location, things, timeline, title }
}: WorkCardProps): React.ReactElement => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack
            as={Card}
            bgGradient={
                isOpen
                    ? `linear(to-br, brown.500 60%, brown.300 100%)`
                    : undefined
            }
            border="4px solid"
            borderColor="olive.800"
            h={{ base: 72 }}
            size={{ base: 'sm', md: 'md' }}
            w="full"
        >
            {isOpen ? (
                <WorkCardBack data={{ things }} isOpen={isOpen} />
            ) : (
                <WorkCardFront data={{ company, location, title, timeline }} />
            )}
            <Flex as={CardFooter} mt="auto" px={{ base: 4, lg: 6 }}>
                <IconButton
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    aria-label="toggle button"
                    as={motion.button}
                    h={10}
                    icon={<Icon as={PiPlusCircleBold} fontSize="4xl" />}
                    m={0}
                    ml="auto"
                    onClick={onToggle}
                    p={0}
                    variant="unstyled"
                    w={10}
                />
            </Flex>
        </Stack>
    );
};
