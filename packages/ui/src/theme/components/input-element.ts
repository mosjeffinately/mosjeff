import { type ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

export const InputElement: ComponentStyleConfig = defineStyleConfig({
    baseStyle: {
        color: 'gray.300',
        fontSize: 'md',
        h: 'full',
        pointerEvents: 'none',
        px: 8
    },
    sizes: {
        sm: { h: '2.5rem' },
        md: { h: '3.125rem' },
        lg: { h: '3.75rem' }
    }
});
