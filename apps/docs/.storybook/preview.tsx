import { ChakraProvider } from '@chakra-ui/react';
import { Fonts, theme } from '@mosjeff/dope-design-system';
import {
    INITIAL_VIEWPORTS,
    MINIMAL_VIEWPORTS
} from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';
import 'focus-visible/dist/focus-visible';
import React from 'react';
import '../global.css';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ChakraProvider theme={theme}>
                <Fonts />
                <Story />
            </ChakraProvider>
        )
    ],
    parameters: {
        backgrounds: {
            default: 'cream',
            values: [
                {
                    name: 'cream',
                    value: '#FAF9F4'
                }
            ]
        },
        chakra: {
            theme
        },
        viewport: {
            defaultViewport: 'mobile1',
            viewports: {
                ...MINIMAL_VIEWPORTS,
                ...INITIAL_VIEWPORTS
            }
        }
    }
};

export default preview;
