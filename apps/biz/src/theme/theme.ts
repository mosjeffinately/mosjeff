import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { colors, config, fonts } from './config';

export const theme: ThemeConfig = extendTheme({
    colors,
    config,
    fonts,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode('yellow.50', 'blue.700')(props),
                color: mode('gray.800', 'yellow.100')(props),
            },
        }),
    },
});
