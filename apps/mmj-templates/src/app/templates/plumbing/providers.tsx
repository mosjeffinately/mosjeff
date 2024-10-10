'use client';

import {
    monumentExtended,
    mori,
    plexMono,
    poppins,
    sanchez
} from '@/app/fonts';
import { CacheProvider } from '@chakra-ui/next-js';
import {
    baseTheme,
    ChakraProvider,
    extendTheme,
    ThemeConfig
} from '@chakra-ui/react';

const theme: ThemeConfig = extendTheme({
    fonts: {
        body: `${mori.style.fontFamily}, ${baseTheme.fonts.body}`,
        heading: `${monumentExtended.style.fontFamily}, ${sanchez.style.fontFamily}, ${baseTheme.fonts.heading}`,
        mono: `${plexMono.style.fontFamily}, ${baseTheme.fonts.mono}`,
        poppins: `${poppins.style.fontFamily}, ${baseTheme.fonts.body}`
    },
    global: {
        body: {
            bgColor: 'gray.200',
            color: 'blackAlpha.700'
        }
    }
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
