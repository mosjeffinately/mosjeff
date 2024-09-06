import { type ThemeConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/albert-sans';
import '@fontsource/ibm-plex-mono';
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

export const theme: ThemeConfig = extendTheme({
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
            }
        }
    },
    useSystemColorMode: false
});
