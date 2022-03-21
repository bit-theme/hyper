<h1 align="center">
  <img src="./icon.png" alt="Logo" width="96" />
  <br />
  Bit Theme for <a href="https://hyper.is">Hyper</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/stars/bit-theme/hyper?style=flat-square&color=41B883" alt="Stars" />
  <img src="https://img.shields.io/github/license/bit-theme/hyper?style=flat-square&color=41B883" alt="Stars" />
  <img src="https://img.shields.io/badge/PRs-Welcome-41B883?style=flat-square" alt="Stars" />
</p>

![Screenshot](./screenshot.png)

## Install

- Open Hyper.
- Run `hyper install hyper-bit-theme`.
- And ready.

## Choosing a variant

Three theme variants are available: `default`, `soft` and `intense`.

To define a variant you must edit your `.hyper.js` configuration file as follows. If no variant is defined the default theme will be applied.

``` js

module.exports = {
  config: {
      /*
        Other settings hidden
      */

     bitThemeConfig: {
       variant: '[variant-name]'
     }
    },
  };

```

The `intense` variant would be defined as follows:

``` js

module.exports = {
  config: {
      /*
        Other settings hidden
      */

     bitThemeConfig: {
       variant: 'intense'
     }
    },
  };

```
