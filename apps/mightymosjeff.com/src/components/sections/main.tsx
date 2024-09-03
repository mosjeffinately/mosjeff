'use client';
import { Center, Stack } from '@chakra-ui/react';
import { MosJeff } from '../heroes/mosjeff';

export function Main(): React.ReactElement {
    return (
        <Center>
            <Stack justify="center" maxW="40rem" py={6} w="full">
                <MosJeff />
            </Stack>
        </Center>
    );
}
