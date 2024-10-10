import {
    Box,
    Heading,
    Stack,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react';
import { Assets } from './assets';

export const WhatYouGet = () => {
    const textGradient = useColorModeValue(
        'linear(to-r, green.400,purple.500)',
        'linear(to-r, purple.500 20%, blue.400 90%)'
    );

    return (
        <Stack
            align="center"
            justify="center"
            py={{ base: 12, md: 16 }}
            w="full"
        >
            <Heading
                as="h2"
                fontFamily="pangramSans"
                fontWeight="bold"
                textTransform="uppercase"
            >
                <chakra.span bgClip="text" bgGradient={textGradient}>
                    What
                </chakra.span>
                {` You Get`}
            </Heading>
            <Box px={20} py={10} w="full">
                <Assets />
            </Box>
        </Stack>
    );
};
