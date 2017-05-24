# egg-passport-linkedin

linkedin passport plugin for egg

## Install

```bash
$ npm i egg-passport-linkedin --save
```

## Usage

```js
// config/plugin.js
exports.passportLinkedin = {
  enable: true,
  package: 'egg-passport-linkedin',
};
```

## Configuration

```js
// config/config.default.js
exports.passportLinkedin = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.