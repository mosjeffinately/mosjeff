'use client';

import { Hero } from '@/components/recipes/hero';
import { HowWeDoIt } from '@/components/recipes/how-we-do-it';
import { WhatItCosts } from '@/components/recipes/what-it-costs';
import { WhatWeDo } from '@/components/recipes/what-we-do';
import { WhatYouGet } from '@/components/recipes/what-you-get';
import { Container, Divider, Flex } from '@chakra-ui/react';

const Home = () => {
    return (
        <Container maxW="7xl">
            <Hero />
            <Flex align="center" justify="center" w="full">
                <Divider colorScheme="blue" borderWidth={3} w={20} />
            </Flex>
            <WhatWeDo />
            <HowWeDoIt />
            <WhatYouGet />
            <WhatItCosts />
        </Container>
    );
};
export default Home;
