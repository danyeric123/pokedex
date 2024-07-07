# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other configurations...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};

// Pokedex TypeScript React Page

This project is a Pokedex page built with React and TypeScript, inspired by an idea from Theo (https://t3-tools.notion.site/Pokedex-Problem-90f9dcfff10d4418a6fad44581b1ecff). It offers a modern web application experience for exploring and discovering various Pokémon, utilizing the power of TypeScript for type safety and React for a dynamic UI.

## Features

- **TypeScript Integration**: Leverages TypeScript for static type checking, enhancing code quality and developer experience.
- **React Framework**: Utilizes React for building a responsive and interactive user interface.
- **Vite for Build Tooling**: Employs Vite as the build tool for fast development and optimized production builds, including Hot Module Replacement (HMR).

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-directory>
yarn
```

To run the project locally:

```bash
yarn dev
```

## Plugins and Tools

This project uses the following official Vite plugins for React:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Utilizes Babel for enabling Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Uses SWC as a faster alternative to Babel for Fast Refresh.

## ESLint Configuration

For a production-grade application, consider enhancing the ESLint configuration for type-aware linting:

1. Update the `parserOptions` in your ESLint configuration:

```js
export default {
  // other configurations...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

2. Switch from `plugin:@typescript-eslint/recommended` to either `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked` for stricter type checks.
3. Optionally, include `plugin:@typescript-eslint/stylistic-type-checked` for stylistic rules.
4. Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list for React-specific linting rules.

## Contribution

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or feature requests.