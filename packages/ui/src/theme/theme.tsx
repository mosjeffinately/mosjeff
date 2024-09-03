import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/albert-sans';
import '@fontsource/ibm-plex-mono';
import {
    Avatar,
    Button,
    Checkbox,
    IconButton,
    Input,
    InputElement,
    Progress
} from './components';
import { workwear } from './config/colors';

export const theme: ThemeConfig = extendTheme({
    colors: workwear.colors,
    components: {
        Avatar,
        Button,
        Checkbox,
        IconButton,
        Input,
        InputElement,
        Progress
    },
    fonts: {
        body: `'Albert Sans', sans-serif`,
        heading: `'Albert Sans', sans-serif`,
        mono: `'IBM Plex Mono', monospace`
    },
    initialColorMode: 'light',
    styles: {
        global: {
            body: {
                bgColor: 'cream.500',
                color: 'brown.500'
            },
            '.js-focus-visible :focus:not([data-focus-visible-added])': {
                outline: 'none',
                boxShadow: 'none'
            }
        }
    },
    useSystemColorMode: false
});

export default theme;
