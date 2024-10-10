'use client';

import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export const Hero = () => {
    const bgGradient = useColorModeValue(
        'linear(to-br, purple.200, purple.600)',
        'linear(to-br, purple.800, purple.400)'
    );

    const textGradient = useColorModeValue(
        'linear(to-r, green.400,purple.500)',
        'linear(to-r, purple.500 20%, blue.400 90%)'
    );

    return (
        <Stack
            align="center"
            direction={{ base: 'column', md: 'row' }}
            px={4}
            py={{ base: 16, md: 20 }}
            spacing={{ base: 8, md: 10 }}
        >
            <Flex
                align="center"
                flex={1}
                justify="center"
                position="relative"
                w="full"
            >
                <Box
                    bgGradient={bgGradient}
                    borderRadius="lg"
                    boxShadow="2xl"
                    height="300px"
                    overflow={'hidden'}
                    position="relative"
                    width={'full'}
                >
                    <Image
                        align="center"
                        alt="webpage illustration"
                        fit="cover"
                        h="full"
                        src="/assets/images/illustrations/workspace-desktop-1.svg"
                        w="full"
                    />
                </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                    fontFamily="objectSans"
                    fontSize={{
                        base: '3xl',
                        sm: '4xl',
                        md: '5xl',
                        lg: '6xl',
                    }}
                    fontWeight="extrabold"
                    lineHeight="shorter"
                >
                    <Text>Small Business</Text>
                    <Text bgClip="text" bgGradient={textGradient}>
                        Web Design +
                    </Text>
                    <Text bgClip="text" bgGradient={textGradient}>
                        Development
                    </Text>
                </Heading>
                <Button
                    colorScheme="blue"
                    variant="outline"
                    w={{ base: 'full', md: '50%', xl: '33%' }}
                >
                    Get in Touch!
                </Button>
            </Stack>
        </Stack>
    );
};
