#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(process.cwd(), 'package.json')

if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ No package.json found in current directory')
  process.exit(1)
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

// Detect if project uses ES modules
const isESModule = packageJson.type === 'module'
const eslintExt = isESModule ? 'cjs' : 'js'
const eslintConfigPath = path.join(process.cwd(), `eslint.config.${eslintExt}`)

// Check for existing eslint config (either .js or .cjs)
const existingConfigs = ['eslint.config.js', 'eslint.config.cjs', 'eslint.config.mjs']
  .map(f => path.join(process.cwd(), f))
  .filter(f => fs.existsSync(f))

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
if (existingConfigs.length > 0) {
  console.log(`⚠️  ESLint config already exists: ${path.basename(existingConfigs[0])}`)
} else {
  const eslintConfig = `const vheissuConfig = require('@vheissulabs/prettier-config/eslint')

module.exports = [...vheissuConfig]
`
  fs.writeFileSync(eslintConfigPath, eslintConfig)
  console.log(`✅ Created eslint.config.${eslintExt}${isESModule ? ' (CommonJS for ES module project)' : ''}`)
}

console.log('')
console.log('📦 Install peer dependencies:')
console.log('   npm install --save-dev eslint eslint-plugin-vue typescript-eslint')
