# @vheissulabs/prettier-config

Shared Prettier and ESLint configuration for VheissuLabs projects.

## Installation

```bash
npm install --save-dev @vheissulabs/prettier-config
```

## Prettier Usage

Run the init script to automatically add the config to your package.json:

```bash
npx vheissu-prettier-init
```

Or manually add to your `package.json`:

```json
{
  "prettier": "@vheissulabs/prettier-config"
}
```

### Extending Prettier config

```js
module.exports = {
  ...require('@vheissulabs/prettier-config'),
  printWidth: 120
}
```

## ESLint Usage (Vue)

Install peer dependencies:

```bash
npm install --save-dev eslint eslint-plugin-vue
```

Create `eslint.config.js` in your project:

```js
const vheissuConfig = require('@vheissulabs/prettier-config/eslint')

module.exports = [
  ...vheissuConfig,
  // Your overrides here
]
```

### What ESLint enforces

Forces Vue template content to new lines:

```vue
<!-- Before (Prettier output) -->
<PrimaryButton @click="save">Save</PrimaryButton>

<!-- After (ESLint fix) -->
<PrimaryButton @click="save">
    Save
</PrimaryButton>
```

## What's included

### Prettier
- 4 space indentation
- No semicolons
- Single quotes
- Vue script/style indentation
- Single attribute per line
- HTML whitespace sensitivity: ignore
- Import sorting (no blank lines between groups)

### ESLint (Vue)
- Single-line element content forced to new line
- Closing bracket on new line for multiline elements
- Max 1 attribute per line
- 4 space HTML indentation
