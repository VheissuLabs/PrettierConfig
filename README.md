# @vheissulabs/prettier-config

Shared Prettier configuration for VheissuLabs projects.

## Installation

```bash
npm install --save-dev @vheissulabs/prettier-config
```

## Usage

Add to your `package.json`:

```json
{
  "prettier": "@vheissulabs/prettier-config"
}
```

Or create a `.prettierrc.js`:

```js
module.exports = require('@vheissulabs/prettier-config')
```

### Extending the config

```js
module.exports = {
  ...require('@vheissulabs/prettier-config'),
  printWidth: 120
}
```

## What's included

- 4 space indentation
- No semicolons
- Single quotes
- Vue script/style indentation
- Single attribute per line
- Import sorting (no blank lines between groups):
  1. `vue`
  2. `@laravel/*`
  3. `@/layouts/*`
  4. `@/components/*`
  5. Relative imports
