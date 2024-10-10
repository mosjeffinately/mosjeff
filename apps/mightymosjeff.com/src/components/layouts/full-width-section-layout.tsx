import { Stack, type StackProps } from '@chakra-ui/react';

export function FullWidthSectionLayout({
    children,
    justify = 'center',
    ...props
}: StackProps): React.ReactElement {
    return (
        <Stack {...props} h="full" justify={justify} w="full">
            {children}
        </Stack>
    );
}
