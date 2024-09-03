import { type ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

export const IconButton: ComponentStyleConfig = defineStyleConfig({
    baseStyle: {
        alignItems: 'center',
        borderRadius: 'base',
        boxShadow: 'none',
        fontStyle: 'normal',
        fontWeight: 'semibold',
        justifyContent: 'center',
        outline: 'none',
        _active: {
            boxShadow: 'none',
            outline: 'none'
        },
        _disabled: {
            boxShadow: 'none',
            cursor: 'not-allowed',
            outline: 'none'
        },
        _hover: {
            boxShadow: 'none',
            outline: 'none'
        }
    },
    defaultProps: {
        size: 'md',
        variant: 'outline'
    },
    sizes: {
        sm: {
            fontSize: 'md',
            h: 5,
            lineHeight: 'shorter',
            w: 5
        },
        md: {
            fontSize: 'lg',
            h: 8,
            w: 8
        },
        lg: {
            fontSize: 'xl',
            h: 10,
            w: 10
        },
        xl: {
            fontSize: '2rem',
            h: 12,
            w: 12
        }
    },
    variants: {
        ghost: {
            bgColor: 'transparent',
            color: 'brown.500',
            _active: {
                bgColor: 'cream.300',
                color: 'brown.600'
            },
            _disabled: {
                bgColor: 'transparent',
                color: 'gray.400'
            },
            _hover: {
                bgColor: 'cream.400',
                color: 'brown.600',
                _disabled: {
                    bgColor: 'transparent',
                    color: 'gray.400'
                }
            }
        },
        outline: {
            bgColor: 'brown.500',
            borderColor: 'brown.400',
            borderStyle: 'solid',
            borderWidth: 0.5,
            color: 'cream.500',
            _active: {
                bgColor: 'brown.700',
                color: 'cream.700'
            },
            _disabled: {
                bgColor: 'brown.500',
                borderColor: 'gray.500',
                color: 'gray.500'
            },
            _hover: {
                bgColor: 'brown.600',
                borderColor: 'brown.500',
                color: 'cream.600',
                _disabled: {
                    bgColor: 'brown.500',
                    borderColor: 'gray.500',
                    color: 'gray.500'
                }
            }
        },
        solid: {
            bgColor: 'olive.500',
            border: 'none',
            color: 'khaki.300',
            _active: {
                bgColor: 'olive.700',
                color: 'khaki.500'
            },
            _disabled: {
                bgColor: 'gray.500',
                color: 'khaki.50'
            },
            _hover: {
                bgColor: 'olive.600',
                color: 'khaki.400',
                _disabled: {
                    bgColor: 'gray.500',
                    color: 'khaki.50'
                }
            }
        }
    }
});
