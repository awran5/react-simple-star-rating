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

## Breaking Changes in v2

- Named Imports.
- removed css stylesheet.

## Usage

```jsx
import { Rating, RatingView } from 'react-simple-star-rating'
```

`Rating` component is used to set and control the rating value while `RatingView` is used as a **view** only

<br />

## 1. Rating Component Example

```jsx
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
  )
}
```

### Rating Props

| Prop          | Type      | Options  | Description                                         |  Default  |
| ------------- | --------- | -------- | --------------------------------------------------- | :-------: |
| `onClick`     | Function  | Required | Handles the returned rating value                   |    `-`    |
| `ratingValue` | Number    | Required | Rating value passed from the Rating component       |    `-`    |
| `stars`       | Number    | Optional | Number of the stars                                 |    `5`    |
| `size`        | Number    | Optional | Stars size in (applied to `with` and `height`) `px` |    25     |
| `transition`  | Number    | Optional | Adds ش transition effect when mouse hover           |   false   |
| `fillColor`   | String    | Optional | Full stars color                                    | `#f1a545` |
| `emptyColor`  | String    | Optional | Empty stars color                                   | `#cccccc` |
| `className`   | String    | Optional | Applied to the main `span`                          |     -     |
| `children`    | ReactNode | Optional | Allow you to use your own `SVG`.                    |     -     |

---

## 2. RatingView Component Example

```jsx
import React, { useState } from 'react'
import { RatingView } from 'react-simple-star-rating'

export default function MyComponent() {
  return (
    <div className='App'>
      <RatingView ratingValue={2} /* RatingView Props */ />
    </div>
  )
}
```

### Rating Component Props

| Prop          | Type      | Options  | Description                                       |  Default  |
| ------------- | --------- | -------- | ------------------------------------------------- | :-------: |
| `ratingValue` | Number    | Required | Rating value that you\'ll need to define          |    `-`    |
| `stars`       | Number    | Optional | Number of the stars                               |    `5`    |
| `size`        | Number    | Optional | Stars size in `px` Applied to `with` and `height` |    25     |
| `fillColor`   | String    | Optional | Full stars color                                  | `#f1a545` |
| `emptyColor`  | String    | Optional | Empty stars color                                 | `#cccccc` |
| `className`   | String    | Optional | Applied to the main `span`                        |     -     |
| `children`    | ReactNode | Optional | Allow you to use your own `SVG`.                  |     -     |

---

## Custom SVG

You can use your own `SVG` as a component `children` with both `Rating` and `RatingView` Components, Please note that you'll need to define the `fill` attribute and set it to `currentColor` and you may also need to set `width`, `height` attributes if needed.

```jsx
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  return (
    <div className='App'>
    
      <Rating /* Props.. */>
      
        {/* Set `fill`, `width`, `height` */}
        <svg fill='currentColor' width='25' height='25' viewBox='0 0 24 24'>
          <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
        </svg>
        
      </Rating>
      
    </div>
  )
}
```

---


[![Edit react-simple-rating-ts](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-simple-rating-ts-fzmpu?fontsize=14&hidenavigation=1&theme=dark)

### License

MIT © [awran5](https://github.com/awran5/)
