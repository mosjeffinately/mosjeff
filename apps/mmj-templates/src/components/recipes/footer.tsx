'use client';
import { Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
    return (
        <Stack
            align="center"
            bgColor="gray.300"
            direction={{ base: 'column', md: 'row' }}
            h="full"
            justify="flex-start"
            px={{ base: 4, md: 6, lg: 8 }}
            spacing={4}
            w="full"
        >
            <Text fontSize="xs" fontWeight="hairline">
                © 2024 American Plumbing of CNY. All Rights Reserved.
            </Text>
        </Stack>
    );
};
