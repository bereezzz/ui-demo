module.exports = {
    env: {
        browser: true,
        es2022: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript-prettier',
    ],
    globals: {
        __CLIENT__: 'readonly',
        __DEVELOPMENT__: 'readonly',
        __SERVER__: 'readonly',
        __VERSION__: 'readonly',
        mount: true,
        shallow: true,
    },
    overrides: [
        {
            extends: [],
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/array-type': 0,
                '@typescript-eslint/consistent-type-definitions': 0,
                '@typescript-eslint/consistent-type-imports': 0,
                '@typescript-eslint/no-floating-promises': 0,
                '@typescript-eslint/no-unsafe-argument': 0,
                '@typescript-eslint/no-unsafe-assignment': 0,
                '@typescript-eslint/no-unsafe-call': 0,
                '@typescript-eslint/no-unsafe-member-access': 0,
                '@typescript-eslint/no-unsafe-return': 0,
                '@typescript-eslint/no-var-requires': 0,
                '@typescript-eslint/require-await': 0,
                '@typescript-eslint/restrict-template-expressions': 0,
                '@typescript-eslint/unbound-method': 0,

                'sort-keys-fix/sort-keys-fix': 0,
            },
        },
        {
            extends: [],
            files: ['*.ts', 'constants.tsx', '**/constants/**', '**/hooks/**'],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: { project: './tsconfig.json' },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'filenames',
        'simple-import-sort',
        'import',
        'prettier',
        'typescript-sort-keys',
        'sort-keys-fix',
    ],
    rules: {
        '@typescript-eslint/array-type': [1, { default: 'array-simple', readonly: 'array-simple' }],
        '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
        '@typescript-eslint/consistent-type-imports': 1,

        '@typescript-eslint/naming-convention': 0,

        '@typescript-eslint/no-unused-expressions': 0,

        '@typescript-eslint/no-unused-vars': [
            1,
            {
                args: 'after-used',
                ignoreRestSiblings: false,
                vars: 'all',
                varsIgnorePattern: '^React$|^_$',
            },
        ],

        '@typescript-eslint/no-var-requires': 2,

        'arrow-body-style': [2, 'as-needed'],

        // Можем мутировать параметры внутри функции. Возможно включим.
        'class-methods-use-this': 1,

        'consistent-return': 0,

        'default-case': 0,

        'getter-return': 1,

        'global-require': 0,

        'import/no-extraneous-dependencies': [
            0,
            {
                devDependencies: [
                    '**/*.test.*',
                    '**/webpack/**/*.*',
                    'webpack.config.ts',
                ],
                peerDependencies: true,
            },
        ],

        'import/order': 0,

        'import/prefer-default-export': 0,

        'jsx-a11y/anchor-is-valid': 0,

        // Можем не давать роли html элементам
        'jsx-a11y/click-events-have-key-events': 0,

        'jsx-a11y/label-has-associated-control': 0,

        'jsx-a11y/media-has-caption': 0,

        // TODO: rework button
        'jsx-a11y/no-noninteractive-element-interactions': 0,

        'jsx-a11y/no-static-element-interactions': 0,

        'max-params': 0,

        // Разрешается использовать. Планируем постепенно отойти от такого паттерна
        'media-has-caption': 0,

        'no-param-reassign': 0,

        // TODO: придумать style-guide и включить правило
        'no-plusplus': 0,

        // TODO: избавиться после перевода на сервера на TS
        'no-restricted-globals': 0,

        // Или потом фиксим или выпиливаем классы
        'no-restricted-syntax': 0,

        // TODO: убрать. Геттеры всегда явно возвращают результат
        'no-underscore-dangle': 1,

        'no-unused-vars': 1,

        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
        ],

        'react/destructuring-assignment': 0,

        'react/forbid-prop-types': 0,

        // Можем не связывать input-text и label
        'react/function-component-definition': 0,

        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

        'react/jsx-fragments': [2, 'syntax'],

        'react/jsx-props-no-spreading': 0,

        'react/jsx-sort-props': [
            1,
            {
                multiline: 'last',
                reservedFirst: true,
                shorthandFirst: true,
            },
        ],

        'react/jsx-uses-react': 1,
        // Можем использовать параметры и свойства без деструкторизации
        'react/no-children-prop': 0,
        'react/no-unused-prop-types': 0,

        'react/prop-types': 0,

        // Используем любые типы функций для определения React компонентов
        'react/react-in-jsx-scope': 0,

        'react/require-default-props': 0,

        'react/sort-comp': [
            1,
            {
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    'everything-else',
                    'render',
                ],
            },
        ],

        'react/state-in-constructor': 0,

        'react/static-property-placement': 0,

        'react-hooks/exhaustive-deps': 1,

        // Можем не давать click events элементам дополнительный слушатель keyboard
        'simple-import-sort/imports': [
            2,
            {
                groups: [
                    // Packages. `react` related packages come first.
                    ['^react', '^@?\\w'],
                    // Anything that starts with a dot, and own imports
                    ['^\\.', 'shared', 'api', 'components', 'routes'],
                    ['^\\./'],
                    // Style imports.
                    ['^.+\\.s?css$'],
                    // Side effect imports.
                    ['^\\u0000'],
                ],
            },
        ],

        'sort-imports': 0,

        'sort-keys-fix/sort-keys-fix': [1, 'asc', { caseSensitive: true, natural: true }],

        'typescript-sort-keys/interface': [
            1,
            'asc',
            { caseSensitive: true, natural: true, requiredFirst: true },
        ],
        'typescript-sort-keys/string-enum': [1, 'asc', { caseSensitive: true, natural: true }],
    },
    settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
        },
    },
};
