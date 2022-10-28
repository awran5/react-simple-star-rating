# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [5.1.5](https://github.com/awran5/react-simple-star-rating/compare/v5.1.4...v5.1.5) (2022-10-28)

### Bug Fixes

- fix: reset rating value not working properly [#34](https://github.com/awran5/react-simple-star-rating/issues/31)

### [5.1.3](https://github.com/awran5/react-simple-star-rating/compare/v5.1.2...v5.1.3) (2022-10-11)

### Bug Fixes

- window is not defined error while using Next.js ([aeeeb57](https://github.com/awran5/react-simple-star-rating/commit/aeeeb577b87fb0b5d0ac8e8dfa2a9ceb64506f92)), closes [#28](https://github.com/awran5/react-simple-star-rating/issues/28)
- window is undefined" and "navigator is undefined" when using in Next.js ([abb3c5b](https://github.com/awran5/react-simple-star-rating/commit/abb3c5bcf566bee4ec07dfdab350fac93182b43b)), closes [#26](https://github.com/awran5/react-simple-star-rating/issues/26)

### [5.1.2](https://github.com/awran5/react-simple-star-rating/compare/v5.1.1...v5.1.2) (2022-10-07)

- window is undefined" and "navigator is undefined" when using in Next.js, issue [#26](https://github.com/awran5/react-simple-star-rating/issues/26)

## [5.1.0](https://github.com/awran5/react-simple-star-rating/compare/v5.0.0...v5.1.0) (2022-10-03)

### Bug Fixes

- remove unnecessary css ([962c126](https://github.com/awran5/react-simple-star-rating/commit/962c1267c9c41cfd5652e0362c7dcb25a47ff1de)), closes [#25](https://github.com/awran5/react-simple-star-rating/issues/25)

## [5.0.0](https://github.com/awran5/react-simple-star-rating/compare/v4.1.1...v5.0.0) (2022-10-03)

## [4.1.0](https://github.com/awran5/react-simple-star-rating/compare/v4.0.5...v4.1.0) (2022-10-03)

### Features

- **BREAKING CHANGES:** renamed `allowHalfIcon` prop to `allowFraction`
- **BREAKING CHANGES:** `ratingValue` prop has been removed. Now you can use `initialValue` prop instead
- **BREAKING CHANGES:** renamed `fullIcon` prop to `fillIcon`
- **BREAKING CHANGES:** renamed `fullStyle` prop to `fillStyle`
- **BREAKING CHANGES:** renamed `fullClassName` prop to `fillClassName`
- add new props `onPointerMove`, `onPointerEnter`, `onPointerLeave`
- add new prop `disableFillHover` to Enable / Disable hover effect on filled icons
- add css module ([ad2bca7](https://github.com/awran5/react-simple-star-rating/commit/ad2bca7968fbff86fdd3a212358534b4cb9be134)) this should fix issues [#20](https://github.com/awran5/react-simple-star-rating/issues/20), [#22](https://github.com/awran5/react-simple-star-rating/issues/22)
- add more props ([e475a1a](https://github.com/awran5/react-simple-star-rating/commit/e475a1aa4218847d404291be35de36ff0dd006ad))
- add postcss ([9acc4db](https://github.com/awran5/react-simple-star-rating/commit/9acc4db17341c95f2669cf3371a5077e4b58776f))
- add react types ([1a6cbb6](https://github.com/awran5/react-simple-star-rating/commit/1a6cbb6a7e506b962326920fe896fe391079d03b))
- add storybook ([adc8285](https://github.com/awran5/react-simple-star-rating/commit/adc8285f752df41ffe5c1a4a601decdc14a6b70b))
- add storybook build ([4ddc939](https://github.com/awran5/react-simple-star-rating/commit/4ddc939ab7dcb962c24e98d5676d18d740990bd5))
- add titleSeparator prop & update docs ([95832f5](https://github.com/awran5/react-simple-star-rating/commit/95832f551daba0ad67796deca5b3854f2a5e2bb5)), issue [#18](https://github.com/awran5/react-simple-star-rating/issues/18)

### Bug Fixes

- fix Installation failed with react **18.2.0** [#21](https://github.com/awran5/react-simple-star-rating/issues/21)
- fix `initialValue` prop not working properly [#15](https://github.com/awran5/react-simple-star-rating/issues/15)
- fix `readonly` prop not working properly [#12](https://github.com/awran5/react-simple-star-rating/issues/12)
- adds default styling for starsvg ([1f9ca2e](https://github.com/awran5/react-simple-star-rating/commit/1f9ca2e4b1524e699801da6c9ef1590d1a19a878))
- issue [#10](https://github.com/awran5/react-simple-star-rating/issues/10) ([72d03ba](https://github.com/awran5/react-simple-star-rating/commit/72d03ba8e0b5087fa03f6acc77c0b5e8295eb3c5))
- various bugs and improvment. ([8aea6ee](https://github.com/awran5/react-simple-star-rating/commit/8aea6ee806e52e1d01113114ab7462a6903bf47c))

### [4.0.5](https://github.com/awran5/react-simple-star-rating/compare/v4.0.4...v4.0.5) (2021-12-13)

### [4.0.4](https://github.com/awran5/react-simple-star-rating/compare/v4.0.3...v4.0.4) (2021-12-13)

### Bug Fixes

- handle value issue [#7](https://github.com/awran5/react-simple-star-rating/issues/7) ([b28b534](https://github.com/awran5/react-simple-star-rating/commit/b28b534ce6a55bf18ff38817f1bd59610769eb4b))

### [4.0.3](https://github.com/awran5/react-simple-star-rating/compare/v4.0.2...v4.0.3) (2021-12-11)

### Bug Fixes

- click on touch devices ([cee11c2](https://github.com/awran5/react-simple-star-rating/commit/cee11c2e7fa2e23d872395fbaa1dc9f527aa4591))

### [4.0.2](https://github.com/awran5/react-simple-star-rating/compare/v4.0.0...v4.0.2) (2021-12-10)

### Bug Fixes

- fix [#6](https://github.com/awran5/react-simple-star-rating/issues/6) not working on mobile browsers ([d0c1c4d](https://github.com/awran5/react-simple-star-rating/commit/d0c1c4d31fa2209215ccbc3b1dfb386d0a46e49a))
- **responsive issue:** add missing CSS to fix responsive ([5e20f1e](https://github.com/awran5/react-simple-star-rating/commit/5e20f1e78ea1480620b9ffc0303a3f646dfe3bcf))

## 2.0.0

### Major Changes

- Removed: CSS stylesheet.
- Removed: Label Prop
- Update: Package dependencies.
- Added: Eslint airbnb style.
- Added: RatingView Component
- Added: Ability to add a custom SVG icon

# 4.0.0

- rename: `star` prop to `iconsCount`
- remove: `width`, `height` you can use `size` prop instead
- add: `readonly` prop
- add: `fillColorArray` prop to add a color range
- add: `fullIcon`, `emptyIcon`, `customIcons` for add a custom SVG icons
- add: `rtl` for RTL support
- add: `allowHalfIcon` prop to enable a fractional icon (half icon)
- add: `allowHover` enable / disable hover effect
- add: `showTooltip` prop to show a tooltip with live values with other `props` to customize
