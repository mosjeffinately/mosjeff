const { resolve } = require('node:path');
const { rules } = require('./react');

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
    extends: [
        '@vercel/style-guide/eslint/node',
        '@vercel/style-guide/eslint/typescript'
    ].map(require.resolve),
    globals: {
        React: true,
        JSX: true
    },
    ignorePatterns: ['node_modules/', 'dist/'],
    parserOptions: {
        project
    },
    plugins: ['only-warn'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type']
        // 'sort-imports': [
        //     'error',
        //     {
        //         allowSeparatedGroups: true,
        //         memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        //     }
        // ]
    },
    settings: {
        'import/resolver': {
            typescript: {
                project
            }
        }
    }
};
