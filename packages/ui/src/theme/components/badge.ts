import {
    type ComponentStyleConfig,
    defineStyle,
    defineStyleConfig
} from '@chakra-ui/react';

export const Badge: ComponentStyleConfig = defineStyleConfig({
    baseStyle: defineStyle({
        alignItems: 'center',
        display: 'inline-flex',
        fontStyle: 'normal',
        fontWeight: 'semibold',
        justifyContent: 'center',
        textTransform: 'uppercase'
    }),
    sizes: {
        sm: defineStyle({
            borderRadius: 'md',
            fontSize: 'xs',
            gap: 1.5,
            lineHeight: '125%',
            px: 2,
            py: 1
        }),
        md: defineStyle({
            borderRadius: 'md',
            fontSize: 'sm',
            lineHeight: 'normal',
            gap: 1.5,
            px: 3,
            py: 2
        }),
        lg: defineStyle({
            borderRadius: 'lg',
            fontSize: 'md',
            lineHeight: 'normal',
            gap: 2,
            px: 3,
            py: 2
        })
    }
});
