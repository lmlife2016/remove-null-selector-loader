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
