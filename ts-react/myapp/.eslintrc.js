// module.exports = {
//     env: {
//         browser: true,
//         es6: true,
//         jest: true
//     },
//     parser: "@typescript-eslint/parser"
//     extends: [
//         'react-app',
//         'airbnb',
//         'plugin:@typescript-eslint/recommended',
//         'prettier/@typescript-eslint'
//     ],
//     globals: {
//         Atomics: 'readonly',
//         SharedArrayBuffer: 'readonly'
//     },
//     parserOptions: {
//         ecmaFeatures: {
//             ecmaVersion: "2018",
//             sourceType: "module",
//             jsx: true
//         },
//         ecmaVersion: 2018,
//         sourceType: 'module'
//     },
//     plugins: ['react', 'import', 'jsx-a11y'],
//     rules: {
//         'react/jsx-filename-extension': [
//             'error',
//             {
//                 extensions: ['.tsx']
//             }
//         ],
//         'import/prefer-default-export': 'off',
//         '@typescript-eslint/explicit-function-return-type': 'off',
//         '@typescript-eslint/explicit-member-accessibility': 'off'
//     },
//     settings: {
//         'import/parsers': {
//             '@typescript-eslint/parser': ['.ts', '.tsx']
//         },
//         'import/resolver': {
//             typescript: {}
//         }
//     }
// };

module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    }
};
