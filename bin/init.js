#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(process.cwd(), 'package.json')

if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ No package.json found in current directory')
  process.exit(1)
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

if (packageJson.prettier) {
  console.log('⚠️  Prettier config already exists in package.json')
  console.log('   Current value:', JSON.stringify(packageJson.prettier))
  process.exit(0)
}

packageJson.prettier = '@vheissulabs/prettier-config'

// Preserve formatting by detecting indent
const originalContent = fs.readFileSync(packageJsonPath, 'utf8')
const indent = originalContent.match(/^(\s+)/m)?.[1] || '  '

fs.writeFileSync(
  packageJsonPath,
  JSON.stringify(packageJson, null, indent.length) + '\n'
)

console.log('✅ Added prettier config to package.json')
console.log('   "prettier": "@vheissulabs/prettier-config"')
