const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: ['./base'],
    globals: {
        React: true,
        JSX: true
    },
    ignorePatterns: ['node_modules/', 'dist/'],
    parserOptions: {
        project
    },
    plugins: ['only-warn'],
    settings: {
        'import/resolver': {
            typescript: {
                project
            }
        }
    }
};
