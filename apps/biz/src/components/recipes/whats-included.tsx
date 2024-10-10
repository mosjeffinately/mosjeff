import { SimpleGrid } from '@chakra-ui/react';

export const WhatsIncluded = () => {
    return (
        <SimpleGrid
            alignItems="flex-start"
            columns={{ base: 1, md: 3 }}
            spacing={20}
        ></SimpleGrid>
    );
};
