const vue = require('eslint-plugin-vue')
const tseslint = require('typescript-eslint')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')

const baseConfig = [
  // Vue recommended rules
  ...vue.configs['flat/recommended'],

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,

  // Run Prettier as an ESLint rule
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]

// Vue-specific rules that run AFTER Prettier
// These fix template formatting that Prettier doesn't handle well
baseConfig.push({
  rules: {
    // Force element content to new line
    'vue/singleline-html-element-content-newline': ['error', {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: true,
    }],
    // Force closing bracket to new line
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    // Max attributes per line
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1,
    }],
    // Consistent indentation in templates
    'vue/html-indent': ['error', 4],
    // Disable rules that conflict with Prettier
    'vue/html-self-closing': 'off',
    // Allow single-word component names (common in page components)
    'vue/multi-word-component-names': 'off',
  },
})

// Add TypeScript support for Vue files
baseConfig.push({
  files: ['**/*.vue'],
  languageOptions: {
    parserOptions: {
      parser: tseslint.parser,
    },
  },
})

module.exports = baseConfig
