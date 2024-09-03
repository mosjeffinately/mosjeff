import { type ComponentStyleConfig, defineStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = defineStyleConfig({
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
            fontSize: 'xs',
            gap: 1,
            h: 7,
            lineHeight: 'shorter',
            px: 2,
            py: 1.5
        },
        md: {
            fontSize: 'sm',
            gap: 4,
            h: 8,
            lineHeight: 'normal',
            px: 3,
            py: 0
        },
        lg: {
            fontSize: 'md',
            gap: 4,
            h: 10,
            lineHeight: 'normal',
            px: 4,
            py: 2
        },
        iconSm: {
            fontSize: 'md',
            h: 6,
            lineHeight: 'shorter',
            w: 6
        },
        iconMd: {
            fontSize: 'lg',
            h: 8,
            w: 8
        },
        iconLg: {
            fontSize: 'xl',
            h: 10,
            w: 10
        },
        iconXl: {
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
        gradient: {
            bgGradient: `linear(to-r, blue.500 0%, indigo.500 100%)`,
            color: 'cream.50'
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
            color: 'khaki.200',
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

// {
//   "to-t": "to top",
//   "to-tr": "to top right",
//   "to-r": "to right",
//   "to-br": "to bottom right",
//   "to-b": "to bottom",
//   "to-bl": "to bottom left",
//   "to-l": "to left",
//   "to-tl": "to top left"
// }
