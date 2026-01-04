#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(process.cwd(), 'package.json')
const eslintConfigPath = path.join(process.cwd(), 'eslint.config.js')

if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ No package.json found in current directory')
  process.exit(1)
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

// Add Prettier config
if (packageJson.prettier) {
  console.log('⚠️  Prettier config already exists in package.json')
} else {
  packageJson.prettier = '@vheissulabs/prettier-config'

  const originalContent = fs.readFileSync(packageJsonPath, 'utf8')
  const indent = originalContent.match(/^(\s+)/m)?.[1] || '  '

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, indent.length) + '\n'
  )
  console.log('✅ Added prettier config to package.json')
}

// Add ESLint config
if (fs.existsSync(eslintConfigPath)) {
  console.log('⚠️  eslint.config.js already exists')
} else {
  const eslintConfig = `const vheissuConfig = require('@vheissulabs/prettier-config/eslint')

module.exports = [...vheissuConfig]
`
  fs.writeFileSync(eslintConfigPath, eslintConfig)
  console.log('✅ Created eslint.config.js')
}

console.log('')
console.log('📦 Install peer dependencies:')
console.log('   npm install --save-dev eslint eslint-plugin-vue')
