'use client';
import { Image } from '@chakra-ui/next-js';
import { Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';

export const Main = () => {
    return (
        <Stack
            align="center"
            bgColor="gray.100"
            h="full"
            justify="center"
            spacing={4}
            w="full"
        >
            <SimpleGrid columns={{ base: 1, md: 2 }}>
                <Flex align="center" justify="center">
                    <Image
                        alt="Plumbing Setup"
                        borderRadius="sm"
                        height={256}
                        loading="lazy"
                        opacity={0.8}
                        src="/assets/images/stock/pexels-polina-tankilevitch-3735742.jpg"
                        sx={{
                            objectFit: 'cover',
                            repeat: 'none'
                        }}
                        width={512}
                    />
                </Flex>
                <Flex
                    alignItems="center"
                    direction="column"
                    gap={2}
                    justify="start"
                    px={{ base: 4, md: 8, lg: 20 }}
                    py={12}
                    zIndex={3}
                >
                    <Heading
                        as="h1"
                        fontSize="xl"
                        fontWeight="bold"
                        letterSpacing="tighter"
                    >
                        American Plumbing of CNY
                    </Heading>
                    <Heading
                        as="h2"
                        fontFamily="poppins"
                        fontSize="sm"
                        fontWeight="normal"
                    >
                        Providing quality and affordability since 2009
                    </Heading>
                    <Text
                        color="blackAlpha.500"
                        fontFamily="poppins"
                        fontSize="lg"
                        letterSpacing="wider"
                        mb={4}
                        pr={{ base: 0, lg: 16 }}
                        textAlign="center"
                    >
                        {`We offer quality craftsmanship and cost-effective solutions to all your plumbing needs.`}
                    </Text>
                </Flex>
            </SimpleGrid>
        </Stack>
    );
};
