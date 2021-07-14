module.exports = {
    env: {
      es6: true,
      jest: true,
      browser: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      DEV: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'prettier',
      'jsf-ally',
      'import',
      'react-hooks',
      'prettier',
    ],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.jsx', '.js'],
        },
      ],
      'import/prefer-default-export': 'off',
      'react/state-in-constructor': 'off',
      'react/static-property-placement': 'off',
      'global-require': 'off',
      'react-native/no-raw-text': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/prop-types': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-console': ['error', { allow: ['tron'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
}