import { Box, Button, chakra, Heading, Stack, useColorModeValue } from '@chakra-ui/react';
import { Features } from './features';

export const HowWeDoIt = () => {
    const buttonColorScheme = useColorModeValue('green', 'purple');
    const textGradient = useColorModeValue(
        'linear(to-r, green.400,purple.500)',
        'linear(to-r, purple.500 20%, blue.400 90%)'
    );

    return (
        <Stack align="center" justify="center" py={{ base: 12, md: 16 }} w="full">
            <Heading as="h2" fontFamily="pangramSans" fontWeight="bold" textTransform="uppercase">
                <chakra.span bgClip="text" bgGradient={textGradient}>
                    How
                </chakra.span>
                {` We Do It`}
            </Heading>
            <Box px={20} pt={10} w="full">
                <Features />
            </Box>
            <Box pt={4}>
                <Button colorScheme={buttonColorScheme}>Learn More</Button>
            </Box>
        </Stack>
    );
};
