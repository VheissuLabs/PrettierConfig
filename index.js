module.exports = {
  tabWidth: 4,
  semi: false,
  singleQuote: true,
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'css',
  printWidth: 100,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  importOrder: [
    '^vue$',
    '^@vue(.*)$',
    '^@inertiajs(.*)$',
    '^@laravel/(.*)$',
    '^@/layouts/(.*)$',
    '^@/components/(.*)$',
    '^@/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '**/*.yml',
      options: {
        tabWidth: 2
      }
    }
  ]
}
