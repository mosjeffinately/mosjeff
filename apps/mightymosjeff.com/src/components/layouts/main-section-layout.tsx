import { Center, Stack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function MainSectionLayout({
    children
}: PropsWithChildren): React.ReactElement {
    return (
        <Center>
            <Stack justify="center" maxW="40rem" py={6} w="full">
                {children}
            </Stack>
        </Center>
    );
}
