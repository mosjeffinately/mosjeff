import {
    type ComponentStyleConfig,
    defineStyleConfig
} from '@chakra-ui/react';

export const Input: ComponentStyleConfig = defineStyleConfig({
    baseStyle: {
        borderRadius: 'md',
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
                borderColor: 'brown.500',
                boxShadow: `0 0 0 0.25rem rgba(217, 167, 98, 0.40)`,
                color: 'brown.500',
                outline: 'none'
            },
            _focusVisible: {},
            _hover: { borderColor: 'gray.400' },
            _invalid: {
                borderColor: 'red.500',
                _hover: { borderColor: 'red.300' }
            },
            _placeholder: {
                color: 'brown.200'
            }
        }
    },
    sizes: {
        sm: {
            field: {
                fontSize: 'xs',
                h: '2rem'
            }
        },
        md: {
            field: {
                fontSize: 'md',
                h: '2.5rem'
            }
        },
        lg: {
            field: {
                fontSize: 'lg',
                h: '3rem'
            }
        }
    }
});
