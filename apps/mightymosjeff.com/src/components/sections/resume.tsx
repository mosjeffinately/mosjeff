'use client';
import { Box, Center, Spinner, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

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
            <Stack justify="center" maxW="40rem" py={6} w="full">
                <Box
                    as={Document}
                    file="/assets/files/Jeff_Johnson-Resume_2024.pdf"
                    loading={
                        <Center py={10}>
                            <Spinner color="indigo.500" />
                        </Center>
                    }
                    onLoadSuccess={onDocumentLoadSuccess}
                    w="full"
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ))}
                </Box>
            </Stack>
        </Center>
    );
}
