import { defineStyleConfig, type ComponentStyleConfig } from '@chakra-ui/react';

export const Checkbox: ComponentStyleConfig = defineStyleConfig({
    baseStyle: {
        control: {
            bgColor: 'cream.200',
            border: 'sm',
            borderColor: 'brown.500',
            borderRadius: 'sm',
            _checked: {
                bgGradient: `linear(to-br, brown.500, brown.800)`,
                outline: 'none',
                _hover: {
                    bgColor: 'cream.300',
                    color: 'gray.400'
                }
            },
            _focus: {
                boxShadow: 'none',
                outline: 'none'
            },
            _hover: {
                bgColor: 'cream.300'
            },
            _indeterminate: {
                bgGradient: `linear(to-br, brown.500, brown.800)`,
                outline: 'none',
                _hover: {
                    bgColor: 'cream.300',
                    color: 'brown.500'
                }
            }
        },
        label: {
            color: 'brown.500',
            fontSize: 'md',
            fontWeight: 'normal'
        }
    },
    defaultProps: {
        size: 'md'
    },
    sizes: {
        sm: {
            control: { h: 3, w: 3 },
            label: { fontSize: 'sm' },
            icon: { fontSize: '2xs' }
        },
        md: {
            control: { h: 4, w: 4 },
            label: { fontSize: 'md' },
            icon: { fontSize: 'sm' }
        },
        lg: {
            control: { h: 6, w: 6 },
            label: { fontSize: 'lg' },
            icon: { fontSize: 'lg' }
        }
    }
});
