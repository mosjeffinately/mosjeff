import { dirname, join, resolve } from 'path';

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config = {
    addons: [
        getAbsolutePath('@chakra-ui/storybook-addon'),
        getAbsolutePath('@storybook/addon-actions'),
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials')
    ],
    core: {},
    docs: {
        autodocs: true
    },
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },
    stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],

    async viteFinal(config, { configType }) {
        // customize the Vite config here
        return {
            ...config,
            define: { 'process.env': {} },
            resolve: {
                alias: [
                    {
                        find: 'ui',
                        replacement: resolve(__dirname, '../../../packages/ui/')
                    }
                ]
            }
        };
    }
};

export default config;
