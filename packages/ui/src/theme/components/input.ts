import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method -- followed chakra-ui docs example
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys);

// element: {
//     sm: { h: '2.5rem' },
//     md: { h: '3.125rem' },
//     lg: { h: '3.75rem' }
// }

const baseStyle = definePartsStyle({
    element: {
        color: 'gray.300',
        fontSize: 'md',
        pointerEvents: 'none',
        px: 2
    },
    field: {
        bgColor: 'cream.200',
        borderColor: 'brown.500',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '0.0625rem',
        color: 'brown.500',
        display: 'flex',
        fontWeight: 'semibold',
        px: 4,
        w: 'full',
        _focus: {
            borderColor: 'brown.500 !important',
            boxShadow: `0 0 0 0.25rem rgba(217, 167, 98, 0.40) !important`,
            color: 'brown.500 !important',
            outline: 'none !important'
        },
        _focusVisible: {
            borderColor: 'brown.500 !important',
            boxShadow: `0 0 0 0.25rem rgba(217, 167, 98, 0.40) !important`,
            color: 'brown.500 !important',
            outline: 'none !important'
        },
        _hover: { borderColor: 'gray.400' },
        _invalid: {
            borderColor: 'red.500',
            _hover: { borderColor: 'red.300' }
        },
        _placeholder: {
            color: 'brown.200'
        }
    }
});

const sizes = {
    sm: definePartsStyle({
        element: {
            fontSize: 'md'
        },
        field: {
            fontSize: 'xs',
            h: 8
        }
    }),
    md: definePartsStyle({
        element: {
            fontSize: 'lg'
        },
        field: {
            fontSize: 'md',
            h: 10
        }
    }),
    lg: definePartsStyle({
        element: {
            fontSize: 'xl'
        },
        field: {
            fontSize: 'lg',
            h: 12
        }
    })
};

export const Input = defineMultiStyleConfig({
    baseStyle,
    defaultProps: { size: 'md', variant: 'outline' },
    sizes
});
