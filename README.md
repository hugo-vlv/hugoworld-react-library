# Hugoworld React Library

[![NPM](https://img.shields.io/npm/v/hugoworld-react-library.svg)](https://www.npmjs.com/package/hugoworld-react-library)

This boilerplate can be used as a starting point for your React components library needs.

| | Includes        |                                               |
| ----- | --------------- | ---------------------------------------------------------|
| ⚛️     | React           | Enables seamless integration with React projects.         |
| 📝     | Typescript      | Provides type safety and enhanced tooling for JavaScript. |
| 🚀     | Vite            | Optimized build tooling for fast development.             |
| 🌳     | Tree Shakeable  | Supports efficient bundle optimization via tree shaking.  |
| 🎨     | CSS Modules     | Scoped and modular CSS management for better styling.     |
| 📚     | Storybook       | Develop UI components in isolation for better testing. Leverages Vite to bundle super fast !    |

## Installation

<span style="border-radius: 5px; background-color: #1c2b41; color: white; padding: 1rem; display: flex; margin-bottom: 2rem;">
    <span style="font-size: 1.3rem;">ℹ️</span>
    <span style="margin-left: 1rem;">
       <b>Note:</b> All package manager commands use <b>yarn</b>, which should be replaceable with any other.
    </span>
</span>

First and foremost, rename the package in `package.json`

```diff
{
-  "name": "hugoworld-react-library"
+  "name": "your-awesome-name"
}
```

If you are using nvm, you can run `nvm use`, which will install (if necessary) and use the node version specified in `.nvmrc`

Then install dependencies

```bash
$ yarn
```

## Usage

<span style="border-radius: 5px; background-color: #1c2b41; color: white; padding: 1rem; display: flex;">
    <span style="font-size: 1.3rem;">ℹ️</span>
    <span style="margin-left: 1rem;">
       It is required to build the library for the demo page to reflect changes, because it imports the components from the <b>dist</b> folder
    </span>
</span>

### Dev mode:

```bash
$ yarn dev
```

### Build:

```bash
$ yarn dev
```

### Testing

```bash
# Run all tests:
$ yarn test

# Get real time coverage (boots up a web server displaying a metric page)
$ yarn test:coverage
```

### Storybook

Storybook lets you develop UI components in isolation, which can improve component reuse, testability, and development speed.

To boot up the development server:

```bash
$ yarn storybook
```

Feel free to customize the config and theme in `.storybook` folder to suit your needs.

The current setup expects you to place your stories in the `lib` folder, best inside components folders (same goes with styles and tests).

The command `yarn build-storybook` will generate a static version of your storybook in the `storybook-static` folder. It can be deployed to any static hosting service.

### Linting

```bash
$ yarn lint:ts
$ yarn lint:css
```

### Publishing

Publishing logic is not included in this boilerplate, but its configuration is already set up in `package.json`, feel free to plug in your favorite CI/CD pipeline.

### TODO Zone

#### Convert the boilerplate to a generic template with CLI configuration (Priority: Low)
- Let user customize the package name, description, etc.
- Display a handful of tips to get started (customize storybook theme, add more components, test them, etc.)

#### Add more testing examples in codebase (end-to-end, integration, etc.) (Priority: High)
