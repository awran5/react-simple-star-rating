# React Simple Rating

> A simple react component for adding a star rating to your project.

[![NPM](https://img.shields.io/npm/v/react-simple-star-rating.svg)](https://www.npmjs.com/package/react-simple-star-rating)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-star-rating)
![GitHub](https://img.shields.io/github/license/awran5/react-simple-star-rating)

<p align="center">
  <img src="./screenshot.gif" alt="screenshot" width="100%" />
</p>

## Install

#### npm

```sh
npm i react-simple-star-rating
```

#### Yarn

```sh
yarn add react-simple-star-rating
```

<br />

## Usage

```jsx
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    // other logic
  }

  return (
    <div className='App'>
      <Rating
        onClick={handleRating}
        ratingValue={rating} /* Available Props */
      />
    </div>
  )
}
```

### Available Props

| Prop                 | Type            | Options  | Description                                   |          Default           |
| -------------------- | --------------- | -------- | --------------------------------------------- | :------------------------: |
| `onClick`            | function        | Required | Handles the returned rating value             |            `-`             |
| `ratingValue`        | number          | Required | Rating value passed from the Rating component |            `-`             |
| `iconsCount`         | number          | Optional | Number of the icons                           |            `5`             |
| `size`               | number          | Optional | Icon width / height in `px`                   |            `25`            |
| `readonly`           | boolean         | Optional | Readonly mode                                 |          `false`           |
| `fillColor`          | string          | Optional | Full icons color                              |         `#f1a545`          |
| `fillColorArray`     | array           | Optional | Array of string to add color range            |            `[]`            |
| `emptyColor`         | string          | Optional | Empty icons color                             |         `#cccccc`          |
| `fullIcon`           | ReactElement    | Optional | Custom full icon SVG                          |           `null`           |
| `emptyIcon`          | ReactElement    | Optional | Custom empty icon SVG                         |           `null`           |
| `customIcons`        | array of object | Optional | Add a group of icons                          |            `[]`            |
| `rtl`                | boolean         | Optional | RTL mode                                      |          `false`           |
| `allowHalfIcon`      | boolean         | Optional | Enable a fractional icon (half icon)          |          `false`           |
| `allowHover`         | boolean         | Optional | Enable / Disable hover effect                 |           `true`           |
| `transition`         | boolean         | Optional | Adds a transition effect on mouse hover       |          `false`           |
| `className`          | string          | Optional | Applied to the `main` span                    | `react-simple-star-rating` |
| `style`              | CSSProperties   | Optional | Inline style applied to the `main` span       |       `basic style`        |
| `fullClassName`      | string          | Optional | Applied to the `filled` icon span             |       `filled-icons`       |
| `emptyClassName`     | string          | Optional | Applied to the `empty` icon span              |       `empty-icons`        |
| `fullStyle`          | CSSProperties   | Optional | Inline style applied to `filled` icon span    |       `basic style`        |
| `emptyStyle`         | CSSProperties   | Optional | Inline style applied to `empty` icon span     |       `basic style`        |
| `showTooltip`        | string          | Optional | Show a tooltip with live values               |          `false`           |
| `tooltipDefaultText` | string          | Optional | Initial tooltip text if no rating value       |        `Your Rate`         |
| `tooltipArray`       | array           | Optional | Array of strings to show inside tooltip       |            `[]`            |
| `tooltipClassName`   | string          | Optional | Tooltip CSS class                             |      `rating-tooltip`      |
| `tooltipStyle`       | CSSProperties   | Optional | Inline style applied to the `tooltip` span    |       `basic style`        |

---

<br />

## Migrate to v4

1. Old props changes

| old        | new            | changes   |
| ---------- | -------------- | --------- |
| `stars`    | `iconsCount`   | `Renamed` |
| `children` | `inline props` | `Removed` |

2. Remove `RatingView` Component, now you can use `readonly` prop instead

3. Custom SVG, You can use your own `SVG` now as a inline props `fullIcon` | `emptyIcon` | `customIcons`. See all available props above

<br />

## Demos

See all demos and usage examples [in action](https://react-simple-star-rating.vercel.app/).

<br />

[![Edit react-simple-rating-ts](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-simple-rating-ts-fzmpu?fontsize=14&hidenavigation=1&theme=dark)

### License

MIT © [awran5](https://github.com/awran5/)
