const vue = require('eslint-plugin-vue')

module.exports = [
  ...vue.configs['flat/recommended'],
  {
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
    },
  },
]
