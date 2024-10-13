# vv3-templ-render-SVG

This template uses Vue 3 with Vite, Composition API, Vue Router, Pinia, axios and Bootstrap 5.
It implements a crude SVG render cycle with ticking on a world object.
The tick just changes the radius of a circle for demonstration purposes.

This template also defines a store for settings.
This store is used to dynamically render a ControlView and a DataView.
The renderStore provides methods to start a timer that performs a world tick and all methods used to controll that 
basic render loop.

Based on 
https://github.com/Robert-Baumgartner/vv3-templ-r-CB

Usage:
```
npx degit https://github.com/thomaspsik/vv3-templ-render-SVG.git your-project
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
