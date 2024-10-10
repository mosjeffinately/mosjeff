import type { StackProps } from '@chakra-ui/react';
import { Box, HStack, Icon, IconButton, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { PiDiamondFill } from 'react-icons/pi';
import type { ExperienceData } from '../../../../types';
import { BoldPlusIcon } from '../../../atoms/icons';

export type ExperienceAccordionContentMobileProps = StackProps & {
    data: Pick<ExperienceData, 'things'>;
    onToggle: () => void;
};

export const ExperienceAccordionContentMobile = ({
    data,
    onToggle,
    ...props
}: ExperienceAccordionContentMobileProps): React.ReactElement => {
    return (
        <Stack
            bgColor="brown.500"
            borderColor="olive.500"
            borderStyle="solid"
            borderWidth={1.5}
            color="olive.700"
            py={{ base: 2, sm: 3 }}
            {...props}
        >
            <Box ml="auto">
                <IconButton
                    animate={{ rotate: 45 }}
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
            </Box>
            {data.things.map((thing) => (
                <HStack
                    align="center"
                    justify="flex-start"
                    spacing={2}
                    w="full"
                >
                    <Icon as={PiDiamondFill} fontSize="xs" />
                    <Text fontFamily="body" fontSize="2xl">
                        {thing}
                    </Text>
                </HStack>
            ))}
        </Stack>
    );
};
