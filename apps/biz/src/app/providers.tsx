'use client';

import { theme } from '@/theme';
import { CacheProvider } from '@chakra-ui/next-js';
import {
    ChakraProvider,
    ColorMode,
    ColorModeProviderProps,
} from '@chakra-ui/react';
import { setCookie } from 'cookies-next';
import { PropsWithChildren } from 'react';

export type ProvidersProps = Readonly<PropsWithChildren> & {
    colorMode?: ColorMode;
};

export const Providers = ({ children, colorMode }: ProvidersProps) => {
    const colorModeManager: ColorModeProviderProps['colorModeManager'] = {
        get: (init) => colorMode ?? init,
        set: (value) => setCookie('chakra-ui-color-mode', value),
        ssr: true,
        type: 'cookie',
    };

    return (
        <CacheProvider>
            <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
};
