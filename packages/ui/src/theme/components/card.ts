import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// eslint-disable-next-line @typescript-eslint/unbound-method -- following chakra example.
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
    body: {
        borderRadius: 'none',
        mx: 0,
        px: 0,
        w: 'full'
    },
    container: {
        borderRadius: 'md',
        m: 0,
        p: 0
    },
    header: {
        borderBottomRadius: 'none',
        borderTopRadius: 'inherit',
        mx: 0,
        px: 0,
        w: 'full'
    },
    footer: {
        borderBottomRadius: 'inherit',
        borderTopRadius: 'none',
        mx: 0,
        px: 0,
        w: 'full'
    }
});

const sizes = {
    sm: definePartsStyle({
        container: {
            maxW: '3xl',
            minW: 0
        }
    }),
    md: definePartsStyle({
        container: {
            maxW: '4xl',
            minW: '3xl'
        }
    }),
    lg: definePartsStyle({
        container: {
            maxW: '8xl',
            minW: '5xl'
        }
    })
};

const variants = {
    elevated: definePartsStyle({
        container: {
            bgColor: 'cream.200',
            boxShadow: '2xl'
        }
    }),
    filled: definePartsStyle({
        body: { bgColor: 'inherit' },
        container: {
            bgColor: 'brown.500',
            boxShadow: '2xl',
            m: 0,
            overflow: 'hidden',
            p: 0
        },
        footer: { bgCOlor: 'inherit' },
        header: { bgColor: 'inherit' }
    }),
    outline: definePartsStyle({
        container: {
            bgColor: 'cream.100',
            border: 'sm',
            borderColor: 'olive.500',
            boxShadow: '2xl',
            overflow: 'hidden',
            p: 0
        }
    })
};

export const Card = defineMultiStyleConfig({
    baseStyle,
    defaultProps: { size: 'md', variant: 'outline' },
    sizes,
    variants
});
