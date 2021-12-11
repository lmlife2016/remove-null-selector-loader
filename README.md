# remove-null-selector-loader

remove null selector from css

## Install
```bash
npm i remove-null-selector-loader
```

## Use
in vue.config.js
```js
module.exports = {
  configureWebpack: {
    module: {
      rules: [{
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'remove-null-selector-loader',
          'less-loader',
        ],
      }],
    },
  },
};
```
then, you can write less like this:
```less
html {
  body:null-selector {
    div {
      background: red;
    }
  }
}
```
remove-null-selector-loader will remove 'body:null-selector', css is like below:
```css
html div { background: red; }
```

## Why use it ?
Keep nesting in less, but the css selector will not too long.