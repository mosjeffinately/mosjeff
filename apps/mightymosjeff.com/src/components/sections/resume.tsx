'use client';
import { Box, Center, Stack } from '@chakra-ui/react';
import { useState } from 'react';

export function Resume(): React.ReactElement {
    const [numPages, setNumPages] = useState<number>(2);

    const onDocumentLoadSuccess = ({
        numPages: resultNumPages
    }: {
        numPages: number;
    }) => {
        setNumPages(resultNumPages);
    };

    return (
        <Center>
            <Stack h="100vh" justify="center" py={6} w="full">
                <Box
                    as="object"
                    data="/assets/files/Jeff_Johnson-Resume_2024.pdf"
                    height="100%"
                    type="application/pdf"
                    w="full"
                />
            </Stack>
        </Center>
    );
}
