module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/display-name': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-no-duplicate-props': 1,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
