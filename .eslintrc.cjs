module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true, // Updated to es2021 for more current features
    node: true, // Added for Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // TypeScript rules
    'plugin:react-hooks/recommended', // Rules for React hooks
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:import/errors', // Import plugin to help validate proper imports
    'plugin:import/warnings',
    'plugin:import/typescript', // This line helps in understanding TypeScript imports
    'prettier', // Makes sure this is last in the extends array
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  plugins: [
    'react',
    '@typescript-eslint', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'react-hooks',
    'jsx-a11y',
    'import',
  ],
  ignorePatterns: ['node_modules/', 'build/', 'dist/'], // Ignores node_modules, build, and dist directories
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
    'react/react-in-jsx-scope': 'off', // Not needed with React 17 JSX Transform
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'react/jsx-uses-react': 'off', // Not needed with React 17 JSX Transform
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }], // Allow jsx syntax in .tsx files
    'no-unused-vars': 'warn', // Warns about unused variables
    '@typescript-eslint/no-unused-vars': ['warn'], // Warns about unused variables in TypeScript
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
