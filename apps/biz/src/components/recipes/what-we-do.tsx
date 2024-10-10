import {
    Box,
    Button,
    chakra,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { StarsIcon } from '../atoms';

export const WhatWeDo = () => {
    const buttonColorScheme = useColorModeValue('green', 'purple');

    const textGradient = useColorModeValue(
        'linear(to-r, green.400,purple.500)',
        'linear(to-r, purple.500 20%, blue.400 90%)'
    );

    return (
        <Stack
            align="center"
            justify="center"
            py={{ base: 12, md: 16 }}
            spacing={4}
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
                {` We Do`}
            </Heading>
            <Icon as={StarsIcon} fontSize="4xl" />
            <Text
                fontFamily="pangramSansRounded"
                fontSize="xl"
                fontWeight="medium"
                textAlign="center"
                w={{ base: 'full', md: '67%' }}
            >
                {`We specialize in small business web design and development for clients in Central New York and
                    around the US. Each site is written by us - no page builders or bloated themes here! We ensure great
                    performance, which helps drive more traffic to your site and more revenue for your business.`}
            </Text>
            <Box pt={4}>
                <Button colorScheme={buttonColorScheme}>Learn More</Button>
            </Box>
        </Stack>
    );
};
