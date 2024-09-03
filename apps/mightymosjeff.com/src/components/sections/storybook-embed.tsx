import { Box, Stack } from '@chakra-ui/react';

export function StorybookEmbed(): React.ReactElement {
    return (
        <Stack justify="center" maxW="40rem" p={0} w="full">
            <Box
                as="iframe"
                h="calc(100vh - 4.5rem)"
                src="https://dope-design-system.com"
                w="100vw"
            />
        </Stack>
    );
}
