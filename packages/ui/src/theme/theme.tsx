import { type ThemeConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/albert-sans';
import '@fontsource/ibm-plex-mono';
import '@fontsource/sanchez';
import {
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    IconButton,
    Input,
    Progress,
    Radio
} from './components';
import { workwear } from './config/colors';
import './index.css';

export const theme: ThemeConfig = extendTheme({
    borders: {
        '2xl': '1rem solid'
    },
    colors: workwear.colors,
    components: {
        Avatar,
        Badge,
        Button,
        Card,
        Checkbox,
        IconButton,
        Input,
        Progress,
        Radio
    },
    fonts: {
        body: `var(--font-editorial-sans), 'Albert Sans', sans-serif`,
        editorial: `var(--font-editorial-sans), sans-serif`,
        extended: `var(--font-monument-extended), sans-serif`,
        heading: `'Albert Sans', sans-serif`,
        mono: `'IBM Plex Mono', monospace`,
        serif: `'Sanchez', serif`
    },
    initialColorMode: 'light',
    styles: {
        global: {
            body: {
                bgColor: 'cream.500',
                color: 'brown.500'
            }
        }
    },
    useSystemColorMode: false
});
