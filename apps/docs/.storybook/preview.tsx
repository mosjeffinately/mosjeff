import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@mosjeff/dope-design-system';
import { Preview } from '@storybook/react';
import 'focus-visible/dist/focus-visible';
import React from 'react';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ChakraProvider theme={theme}>
                {/* <CSSReset /> */}
                {/* <Global styles={GlobalStyles} /> */}
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
        }
    }
};

export default preview;
