import { Button, ButtonGroup, chakra, Heading, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react';
import { PricingCard } from '../atoms';

export const WhatItCosts = () => {
    const buttonColorScheme = useColorModeValue('teal', 'teal');

    const textGradient = useColorModeValue(
        'linear(to-r, green.400,purple.500)',
        'linear(to-r, purple.500 20%, blue.400 90%)'
    );

    return (
        <Stack align="center" justify="center" py={{ base: 12, md: 16 }} spacing={4} w="full">
            <Heading as="h2" fontFamily="pangramSans" fontWeight="bold" textTransform="uppercase">
                <chakra.span bgClip="text" bgGradient={textGradient}>
                    What
                </chakra.span>
                {` It Costs`}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <PricingCard
                    cta={
                        <ButtonGroup>
                            <Button colorScheme={buttonColorScheme} variant="solid">
                                Learn More
                            </Button>
                            <Button colorScheme={buttonColorScheme} variant="outline">
                                Contact Us
                            </Button>
                        </ButtonGroup>
                    }
                    description="Standard 5 page package includes:"
                    features={[
                        'Home, About, Services, Portfolio, and Contact pages',
                        'Unlimited page edits',
                        'Logo design or update',
                        'Domain acquisition or transfer',
                        'Initial deployment to your preferred hosting platform',
                    ]}
                    price={2500}
                    title="One Time Payment"
                    variant="outline"
                />
                <PricingCard
                    cta={
                        <ButtonGroup>
                            <Button colorScheme={buttonColorScheme} variant="solid">
                                Learn More
                            </Button>
                            <Button colorScheme={buttonColorScheme} variant="outline">
                                Contact Us
                            </Button>
                        </ButtonGroup>
                    }
                    description="Standard 5 page package includes:"
                    features={[
                        'Home, About, Services, Portfolio, and Contact pages',
                        'Unlimited page edits',
                        'All hosting fees',
                        'Logo design or update',
                        'Domain acquisition or transfer',
                    ]}
                    frequency="month"
                    price={200}
                    title="Monthly Subscription"
                    variant="fill"
                />
            </SimpleGrid>
        </Stack>
    );
};
